import { useState, useEffect } from 'react';

export type LMSRole =
  | 'admin' | 'executive' | 'manager'
  | 'supervisor' | 'engineer'
  | 'operator' | 'technician' | 'custodian'
  | null;

export interface LMSUser {
  sub: string;
  name: string;
  email: string;
  role: LMSRole;
  facilityId: string;
  orgId?: string;
}

function decodeJWT(token: string): any {
  try { return JSON.parse(atob(token.split('.')[1])); }
  catch { return null; }
}

const DEFAULT_ACCESS_ROLES: LMSRole[] = ['admin', 'executive', 'manager', 'supervisor', 'engineer'];

export function useLMSAuth() {
  const [user, setUser]                = useState<LMSUser | null>(null);
  const [loading, setLoading]          = useState(true);
  const [enrolledCourses, setEnrolled] = useState<string[]>([]);
  const [enrollmentChecked, setChecked] = useState(false);

  const initFromToken = (token: string) => {
    const payload = decodeJWT(token);
    if (!payload || (payload.exp && payload.exp * 1000 < Date.now())) return false;

    const role = (
      payload['custom:role'] ||
      payload['cognito:groups']?.[0] ||
      null
    )?.toLowerCase() as LMSRole;

    const u: LMSUser = {
      sub:        payload.sub || '',
      name:       payload.name || payload.email?.split('@')[0] || 'User',
      email:      payload.email || '',
      role,
      facilityId: payload['custom:facilityId'] || 'facility-001',
      orgId:      payload['custom:orgId'],
    };

    setUser(u);

    if (role && !DEFAULT_ACCESS_ROLES.includes(role)) {
      const baseUrl = import.meta.env.VITE_API_BASE_URL ||
                      'https://vflco2pvo3.execute-api.us-east-2.amazonaws.com/prod';
      fetch(`${baseUrl}/lms/enrollments?userId=${u.sub}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(r => r.json())
        .then(data => { setEnrolled(data.courseIds || []); setChecked(true); setLoading(false); })
        .catch(() => { setEnrolled([]); setChecked(true); setLoading(false); });
    } else {
      setChecked(true);
      setLoading(false);
    }
    return true;
  };

  useEffect(() => {
    // 1. Try localStorage first (direct access)
    const token =
      localStorage.getItem('nexum_access_token') ||
      localStorage.getItem('nexum_id_token');

    if (token && initFromToken(token)) return;

    // 2. Listen for postMessage from parent (iframe mode)
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'NEXUM_AUTH') {
        const t = event.data.accessToken || event.data.idToken;
        if (t) {
          // Store so refresh works
          localStorage.setItem('nexum_access_token', event.data.accessToken || '');
          localStorage.setItem('nexum_id_token', event.data.idToken || '');
          initFromToken(t);
        }
      }
    };

    window.addEventListener('message', handleMessage);

    // If no token after 3s, stop loading
    const timeout = setTimeout(() => {
      setLoading(false);
      setChecked(true);
    }, 3000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timeout);
    };
  }, []);

  const isAuthenticated      = !!user;
  const isAdmin              = user?.role === 'admin';
  const isExecutive          = user?.role === 'executive';
  const isManager            = user?.role === 'manager';
  const isSupervisor         = user?.role === 'supervisor';
  const isEngineer           = user?.role === 'engineer';
  const isNexumAdmin         = user?.role === 'admin';
  const hasLMSAccess         = !!(user && (DEFAULT_ACCESS_ROLES.includes(user.role as LMSRole) || enrolledCourses.length > 0));
  const canManageEnrollments = ['admin', 'executive', 'manager'].includes(user?.role || '');
  const canEnrollManagers    = ['admin', 'executive'].includes(user?.role || '');
  const isReadOnly           = !!(user && (['supervisor', 'engineer'].includes(user.role || '') || (!DEFAULT_ACCESS_ROLES.includes(user.role as LMSRole) && enrolledCourses.length > 0)));
  const canAccessCourse      = (courseId: string) => {
    if (!user) return false;
    if (DEFAULT_ACCESS_ROLES.includes(user.role as LMSRole)) return true;
    return enrolledCourses.includes(courseId);
  };

  return {
    user, loading: loading || !enrollmentChecked,
    isAuthenticated, isAdmin, isExecutive, isManager,
    isSupervisor, isEngineer, isNexumAdmin, hasLMSAccess,
    canManageEnrollments, canEnrollManagers, isReadOnly,
    enrolledCourses, canAccessCourse,
  };
}

// Backwards compat
export const useAuth = useLMSAuth;
