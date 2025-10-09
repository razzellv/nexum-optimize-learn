import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ModuleDashboard } from "@/components/ModuleDashboard";
import { ModuleViewer } from "@/components/ModuleViewer";
import { CompletionCertificate } from "@/components/CompletionCertificate";
import { modules as initialModules } from "@/data/modules";
import { moduleContent } from "@/data/moduleContent";
import { Module } from "@/types/course";
import { toast } from "sonner";

type View = 'hero' | 'dashboard' | 'module' | 'certificate';

const Index = () => {
  const [currentView, setCurrentView] = useState<View>('hero');
  const [modules, setModules] = useState<Module[]>(initialModules);
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);

  const handleGetStarted = () => {
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

  const handleModuleComplete = () => {
    if (selectedModuleId === null) return;

    // Mark current module as completed
    const updatedModules = modules.map(module => {
      if (module.id === selectedModuleId) {
        return { ...module, completed: true };
      }
      // Unlock next module
      if (module.id === selectedModuleId + 1) {
        return { ...module, locked: false };
      }
      return module;
    });

    setModules(updatedModules);
    
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
        return <Hero onGetStarted={handleGetStarted} />;
      
      case 'dashboard':
        return (
          <ModuleDashboard 
            modules={modules} 
            onModuleSelect={handleModuleSelect} 
          />
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
        return <Hero onGetStarted={handleGetStarted} />;
    }
  };

  return renderView();
};

export default Index;
