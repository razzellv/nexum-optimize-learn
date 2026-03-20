// src/hooks/useAuth.ts
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

// Roles that always have LMS access
const DEFAULT_ACCESS_ROLES: LMSRole[] = ['admin', 'executive', 'manager', 'supervisor', 'engineer'];

export function useLMSAuth() {
  const [user, setUser]               = useState<LMSUser | null>(null);
  const [loading, setLoading]         = useState(true);
  const [enrolledCourses, setEnrolled] = useState<string[]>([]);
  const [enrollmentChecked, setChecked] = useState(false);

  useEffect(() => {
    const token =
      localStorage.getItem('nexum_access_token') ||
      localStorage.getItem('nexum_id_token');

    if (!token) { setLoading(false); return; }

    const payload = decodeJWT(token);
    if (!payload || (payload.exp && payload.exp * 1000 < Date.now())) {
      setLoading(false);
      return;
    }

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

    // For roles that need enrollment check, fetch from API
    if (role && !DEFAULT_ACCESS_ROLES.includes(role)) {
      const baseUrl = import.meta.env.VITE_API_BASE_URL ||
                      'https://vflco2pvo3.execute-api.us-east-2.amazonaws.com/prod';
      fetch(`${baseUrl}/lms/enrollments?userId=${u.sub}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(r => r.json())
        .then(data => {
          setEnrolled(data.courseIds || []);
          setChecked(true);
          setLoading(false);
        })
        .catch(() => {
          setEnrolled([]);
          setChecked(true);
          setLoading(false);
        });
    } else {
      setChecked(true);
      setLoading(false);
    }
  }, []);

  const isAuthenticated = !!user;
  const isAdmin         = user?.role === 'admin';
  const isExecutive     = user?.role === 'executive';
  const isManager       = user?.role === 'manager';
  const isSupervisor    = user?.role === 'supervisor';
  const isEngineer      = user?.role === 'engineer';
  const isNexumAdmin    = user?.role === 'admin';

  // Has LMS access = default role OR has active enrollment
  const hasLMSAccess = !!(
    user && (
      DEFAULT_ACCESS_ROLES.includes(user.role as LMSRole) ||
      enrolledCourses.length > 0
    )
  );

  const canManageEnrollments = ['admin', 'executive', 'manager'].includes(user?.role || '');
  const canEnrollManagers    = ['admin', 'executive'].includes(user?.role || '');

  // Read-only: supervisors, engineers, and enrolled trainees
  const isReadOnly = !!(
    user && (
      ['supervisor', 'engineer'].includes(user.role || '') ||
      (!DEFAULT_ACCESS_ROLES.includes(user.role as LMSRole) && enrolledCourses.length > 0)
    )
  );

  // Check if user can access a specific course
  const canAccessCourse = (courseId: string): boolean => {
    if (!user) return false;
    if (DEFAULT_ACCESS_ROLES.includes(user.role as LMSRole)) return true;
    return enrolledCourses.includes(courseId);
  };

  return {
    user,
    loading: loading || !enrollmentChecked,
    isAuthenticated,
    isAdmin,
    isExecutive,
    isManager,
    isSupervisor,
    isEngineer,
    isNexumAdmin,
    hasLMSAccess,
    canManageEnrollments,
    canEnrollManagers,
    isReadOnly,
    enrolledCourses,
    canAccessCourse,
  };
}
