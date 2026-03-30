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
import { newEquipmentModuleContent } from "@/data/newEquipmentModules";
import { facilityIntelligenceIIModuleContent } from "@/data/facilityIntelligenceIIModuleContent";
import { useUserProgress } from "@/hooks/useUserProgress";
import { useLMSAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Rss, Video, RotateCcw } from "lucide-react";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";

type View = 'hero' | 'courses' | 'dashboard' | 'module' | 'final-exam' | 'certificate';

const COURSE_CONTENT_MAP: Record<string, Record<number, any>> = {
  'facility-optimization':  moduleContent,
  'hvac-optimization':      hvacModuleContent,
  'thermodynamics-tech':    thermodynamicsModuleContent,
  'career-specialist':      specialistModuleContent,
  'facility-intelligence':  facilityIntelligenceModuleContent,
  'new-equipment-systems':  newEquipmentModuleContent,
  'facility-intelligence-ii': facilityIntelligenceIIModuleContent,
};

const Index = () => {
  const navigate = useNavigate();
  const { getCourseModules, getCourseProgress, loading: progressLoading, saveProgress, resetProgress } = useUserProgress();
  const { isReadOnly } = useLMSAuth();
  const [currentView, setCurrentView] = useState<View>('hero');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);

  if (progressLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  const handleGetStarted     = () => setCurrentView('courses');
  const handleViewCurriculum = () => setCurrentView('courses');
  const handleSelectCourse   = (courseId: string) => { setSelectedCourseId(courseId); setCurrentView('dashboard'); };
  const handleModuleSelect   = (moduleId: number) => { setSelectedModuleId(moduleId); setCurrentView('module'); };
  const handleBackToDashboard = () => { setCurrentView('dashboard'); setSelectedModuleId(null); };
  const handleBackToCourses   = () => { setSelectedCourseId(null); setCurrentView('courses'); };

  const handleModuleComplete = async () => {
    if (selectedModuleId === null || !selectedCourseId) return;
    if (!isReadOnly) saveProgress(selectedCourseId, selectedModuleId);
    const allCompleted = getCourseModules(selectedCourseId).every(m => m.completed);
    if (allCompleted && !isReadOnly) {
      toast.success("Course completed!");
      handleBackToCourses();
    } else {
      toast.success(isReadOnly ? "Module viewed." : "Module completed!");
      handleBackToDashboard();
    }
  };

  const handleFinalExamComplete = (passed: boolean, score: number) => {
    if (passed) {
      toast.success(`Congratulations! You passed with ${score.toFixed(1)}%`);
      setTimeout(() => setCurrentView('certificate'), 2000);
    } else {
      toast.error(`Not passed. Score: ${score.toFixed(1)}%`);
    }
  };

  const NavButtons = () => (
    <div className="absolute top-4 right-4 z-50 flex gap-2">
      <Button variant="outline" size="sm" onClick={() => navigate('/feed')}><Rss className="w-4 h-4 mr-2" />Industry Feed</Button>
      <Button variant="outline" size="sm" onClick={() => navigate('/videos')}><Video className="w-4 h-4 mr-2" />Videos</Button>
    </div>
  );

  const renderView = () => {
    switch (currentView) {
      case 'hero':
        return <><NavButtons /><Hero onGetStarted={handleGetStarted} onViewCurriculum={handleViewCurriculum} /></>;

      case 'courses': {
        const courseProgressMap = courses.reduce((acc, course) => {
          acc[course.id] = getCourseProgress(course.id);
          return acc;
        }, {} as Record<string, { completed: number; total: number }>);
        return (
          <>
            <div className="absolute top-4 right-4 z-50 flex gap-2">
              {!isReadOnly && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm"><RotateCcw className="w-4 h-4 mr-2" />Reset Progress</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Reset All Progress?</AlertDialogTitle>
                      <AlertDialogDescription>This will clear all your course progress. This action cannot be undone.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => { resetProgress(); setCurrentView('hero'); toast.success("Progress reset"); }}>Reset</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              <NavButtons />
            </div>
            <CourseSelector courses={courses} onSelectCourse={handleSelectCourse} courseProgress={courseProgressMap} />
          </>
        );
      }

      case 'dashboard': {
        if (!selectedCourseId) return null;
        return (
          <>
            <div className="absolute top-4 left-4 z-50">
              <Button variant="outline" size="sm" onClick={handleBackToCourses}>← Back to Courses</Button>
            </div>
            <NavButtons />
            <ModuleDashboard modules={getCourseModules(selectedCourseId)} onModuleSelect={handleModuleSelect} />
          </>
        );
      }

      case 'module': {
        if (selectedModuleId === null || !selectedCourseId) return null;
        const content = (COURSE_CONTENT_MAP[selectedCourseId] || {})[selectedModuleId];
        if (!content) {
          return (
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">Module content coming soon</h2>
                <p className="text-muted-foreground">This module is being developed.</p>
                <Button onClick={handleBackToDashboard}>Back to Dashboard</Button>
              </div>
            </div>
          );
        }
        return <ModuleViewer content={content} onBack={handleBackToDashboard} onComplete={handleModuleComplete} />;
      }

      case 'final-exam':
        return <FinalExam onComplete={handleFinalExamComplete} onBack={handleBackToCourses} />;

      case 'certificate':
        return <CompletionCertificate completionDate={new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} />;

      default:
        return <Hero onGetStarted={handleGetStarted} onViewCurriculum={handleViewCurriculum} />;
    }
  };

  return renderView();
};

export default Index;
