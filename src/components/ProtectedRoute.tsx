// src/components/ProtectedRoute.tsx
import { useLMSAuth } from '@/hooks/useAuth';
import { Shield, Lock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading, hasLMSAccess, isAuthenticated, enrolledCourses } = useLMSAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto" />
          <p className="text-muted-foreground text-sm">Verifying access...</p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-6 max-w-md px-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Sign In Required</h2>
            <p className="text-muted-foreground text-sm">
              Access to Nexum Suum Optimize & Learn requires an active Nexum Suum account.
            </p>
          </div>
          <Button
            className="w-full"
            onClick={() => {
              window.location.href =
                import.meta.env.VITE_MAIN_PLATFORM_URL ||
                'https://portal.nexumsuum-facilityintelligence.com';
            }}
          >
            Sign In via Nexum Portal
          </Button>
        </div>
      </div>
    );
  }

  // Logged in but no access and no enrollments
  if (!hasLMSAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-6 max-w-md px-6">
          <div className="w-16 h-16 rounded-full bg-destructive/10 border border-destructive/30 flex items-center justify-center mx-auto">
            <Shield className="w-8 h-8 text-destructive" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Access Restricted</h2>
            <p className="text-muted-foreground text-sm">
              Nexum Suum Optimize & Learn is available to authorized roles or users
              enrolled by their facility manager. Contact your manager to request access.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-muted/30 border border-border/40 text-sm text-muted-foreground">
            Signed in as:{' '}
            <span className="font-medium text-foreground">{user?.name}</span>
            {' · '}
            <Badge variant="outline" className="text-xs capitalize ml-1">
              {user?.role || 'Unknown role'}
            </Badge>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              window.location.href =
                import.meta.env.VITE_MAIN_PLATFORM_URL ||
                'https://portal.nexumsuum-facilityintelligence.com';
            }}
          >
            Back to Portal
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
