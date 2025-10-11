import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ModuleDashboard } from "@/components/ModuleDashboard";
import { ModuleViewer } from "@/components/ModuleViewer";
import { CompletionCertificate } from "@/components/CompletionCertificate";
import { AuthForm } from "@/components/Auth/AuthForm";
import { modules as initialModules } from "@/data/modules";
import { moduleContent } from "@/data/moduleContent";
import { useAuth } from "@/hooks/useAuth";
import { useUserProgress } from "@/hooks/useUserProgress";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { LogOut, Rss, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

type View = 'hero' | 'dashboard' | 'module' | 'certificate';

const Index = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();
  const { modules, loading: progressLoading, saveProgress } = useUserProgress(user?.id, initialModules);
  const [currentView, setCurrentView] = useState<View>('hero');
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);

  // Show auth form if not logged in
  if (!user && !authLoading) {
    return <AuthForm onSuccess={() => {}} />;
  }

  // Show loading while checking auth
  if (authLoading || progressLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const handleGetStarted = () => {
    setCurrentView('dashboard');
  };

  const handleViewCurriculum = () => {
    setCurrentView('dashboard');
  };

  const handleModuleSelect = (moduleId: number) => {
    setSelectedModuleId(moduleId);
    setCurrentView('module');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedModuleId(null);
  };

  const handleModuleComplete = async () => {
    if (selectedModuleId === null) return;

    // Save progress to database
    const updatedModules = await saveProgress(selectedModuleId);
    
    // Check if all modules are completed
    const allCompleted = updatedModules.every(m => m.completed);
    
    if (allCompleted) {
      toast.success("Congratulations! You've completed all modules!");
      setTimeout(() => {
        setCurrentView('certificate');
      }, 2000);
    } else {
      toast.success("Module completed! Next module unlocked.");
      handleBackToDashboard();
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'hero':
        return (
          <>
            <div className="absolute top-4 right-4 z-50 flex gap-2">
              <Button variant="outline" size="sm" onClick={() => navigate('/feed')}>
                <Rss className="w-4 h-4 mr-2" />
                Industry Feed
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate('/videos')}>
                <Video className="w-4 h-4 mr-2" />
                Videos
              </Button>
              <Button variant="outline" size="sm" onClick={signOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
            <Hero onGetStarted={handleGetStarted} onViewCurriculum={handleViewCurriculum} />
          </>
        );
      
      case 'dashboard':
        return (
          <>
            <div className="absolute top-4 right-4 z-50 flex gap-2">
              <Button variant="outline" size="sm" onClick={() => navigate('/feed')}>
                <Rss className="w-4 h-4 mr-2" />
                Industry Feed
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate('/videos')}>
                <Video className="w-4 h-4 mr-2" />
                Videos
              </Button>
              <Button variant="outline" size="sm" onClick={signOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
            <ModuleDashboard 
              modules={modules} 
              onModuleSelect={handleModuleSelect} 
            />
          </>
        );
      
      case 'module':
        if (selectedModuleId === null) return null;
        const content = moduleContent[selectedModuleId];
        if (!content) {
          toast.error("Module content not available yet");
          handleBackToDashboard();
          return null;
        }
        return (
          <ModuleViewer 
            content={content}
            onBack={handleBackToDashboard}
            onComplete={handleModuleComplete}
          />
        );
      
      case 'certificate':
        return (
          <CompletionCertificate 
            completionDate={new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          />
        );
      
      default:
        return <Hero onGetStarted={handleGetStarted} onViewCurriculum={handleViewCurriculum} />;
    }
  };

  return renderView();
};

export default Index;
