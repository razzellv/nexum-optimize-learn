import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ModuleDashboard } from "@/components/ModuleDashboard";
import { ModuleViewer } from "@/components/ModuleViewer";
import { CompletionCertificate } from "@/components/CompletionCertificate";
import { CourseSelector } from "@/components/CourseSelector";
import { FinalExam } from "@/components/FinalExam";
import { courses } from "@/data/courses";
import { moduleContent } from "@/data/moduleContent";
import { hvacModuleContent } from "@/data/hvacModuleContent";
import { thermodynamicsModuleContent } from "@/data/thermodynamicsModuleContent";
import { specialistModuleContent } from "@/data/specialistModuleContent";
import { facilityIntelligenceModuleContent } from "@/data/facilityIntelligenceModuleContent";
import { useUserProgress } from "@/hooks/useUserProgress";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Rss, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

type View = 'hero' | 'courses' | 'dashboard' | 'module' | 'final-exam' | 'certificate';

const Index = () => {
  const navigate = useNavigate();
  const { getCourseModules, getCourseProgress, loading: progressLoading, saveProgress } = useUserProgress();
  const [currentView, setCurrentView] = useState<View>('hero');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);

  // Show loading while initializing
  if (progressLoading) {
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
    setCurrentView('courses');
  };

  const handleViewCurriculum = () => {
    setCurrentView('courses');
  };

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
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

  const handleBackToCourses = () => {
    setSelectedCourseId(null);
    setCurrentView('courses');
  };

  const handleModuleComplete = async () => {
    if (selectedModuleId === null || !selectedCourseId) return;

    // Save progress (session-based)
    saveProgress(selectedCourseId, selectedModuleId, 100);
    
    const updatedModules = getCourseModules(selectedCourseId);
    
    // Check if all modules in current course are completed
    const allCompleted = updatedModules.every(m => m.completed);
    
    if (allCompleted) {
      toast.success("Course completed! All modules finished.");
      handleBackToCourses();
    } else {
      toast.success("Module completed! Next module unlocked.");
      handleBackToDashboard();
    }
  };

  const handleFinalExamComplete = (passed: boolean, score: number) => {
    if (passed) {
      toast.success(`Congratulations! You passed with ${score.toFixed(1)}%`);
      setTimeout(() => {
        setCurrentView('certificate');
      }, 2000);
    } else {
      toast.error(`Not passed. Score: ${score.toFixed(1)}%`);
    }
  };

  const handleStartFinalExam = () => {
    setCurrentView('final-exam');
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
            </div>
            <Hero onGetStarted={handleGetStarted} onViewCurriculum={handleViewCurriculum} />
          </>
        );
      
      case 'courses':
        const courseProgressMap = courses.reduce((acc, course) => {
          const progress = getCourseProgress(course.id);
          acc[course.id] = progress;
          return acc;
        }, {} as Record<string, { completed: number; total: number }>);

        const allCoursesCompleted = courses.every(c => {
          const progress = courseProgressMap[c.id];
          return progress.completed === progress.total;
        });

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
            </div>
            <CourseSelector
              courses={courses}
              onSelectCourse={handleSelectCourse}
              courseProgress={courseProgressMap}
            />
            {allCoursesCompleted && (
              <div className="fixed bottom-8 right-8">
                <Button size="lg" onClick={handleStartFinalExam}>
                  Take Final Exam
                </Button>
              </div>
            )}
          </>
        );
      
      case 'dashboard':
        if (!selectedCourseId) return null;
        const currentModules = getCourseModules(selectedCourseId);
        return (
          <>
            <div className="absolute top-4 left-4 z-50">
              <Button variant="outline" size="sm" onClick={handleBackToCourses}>
                ← Back to Courses
              </Button>
            </div>
            <div className="absolute top-4 right-4 z-50 flex gap-2">
              <Button variant="outline" size="sm" onClick={() => navigate('/feed')}>
                <Rss className="w-4 h-4 mr-2" />
                Industry Feed
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate('/videos')}>
                <Video className="w-4 h-4 mr-2" />
                Videos
              </Button>
            </div>
            <ModuleDashboard 
              modules={currentModules} 
              onModuleSelect={handleModuleSelect} 
            />
          </>
        );
      
      case 'module':
        if (selectedModuleId === null || !selectedCourseId) return null;
        
        // Map course ID to content
        let contentMap;
        if (selectedCourseId === "facility-optimization") {
          contentMap = moduleContent;
        } else if (selectedCourseId === "hvac-optimization") {
          contentMap = hvacModuleContent;
        } else if (selectedCourseId === "thermodynamics-tech") {
          contentMap = thermodynamicsModuleContent;
        } else if (selectedCourseId === "career-specialist") {
          contentMap = specialistModuleContent;
        } else {
          contentMap = {};
        }
        
        const content = contentMap[selectedModuleId];
        if (!content) {
          return (
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Module content not yet available</h2>
                <p className="text-muted-foreground mb-6">This module content is being developed.</p>
                <Button onClick={handleBackToDashboard}>Back to Dashboard</Button>
              </div>
            </div>
          );
        }
        return (
          <ModuleViewer 
            content={content}
            onBack={handleBackToDashboard}
            onComplete={handleModuleComplete}
          />
        );
      
      case 'final-exam':
        return <FinalExam onComplete={handleFinalExamComplete} onBack={handleBackToCourses} />;
      
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
