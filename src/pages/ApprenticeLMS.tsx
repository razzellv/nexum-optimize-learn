import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, ArrowRight, GraduationCap } from "lucide-react";
import { apprenticeModules } from "@/data/apprenticeModules";
import { apprenticeModuleContent } from "@/data/apprenticeModuleContent";
import { ApprenticeModule } from "@/types/apprentice";
import { ApprenticeProgress } from "@/components/ApprenticeLMS/ApprenticeProgress";
import { ApprenticeModuleCard } from "@/components/ApprenticeLMS/ApprenticeModuleCard";
import { ApprenticeModuleViewer } from "@/components/ApprenticeLMS/ApprenticeModuleViewer";
import { ApprenticeFinalExam } from "@/components/ApprenticeLMS/ApprenticeFinalExam";
import { ApprenticeCertificate } from "@/components/ApprenticeLMS/ApprenticeCertificate";
import { toast } from "sonner";

type View = "landing" | "modules" | "module-content" | "final-exam" | "certificate";

const STORAGE_KEY = "facility-intelligence-apprentice-progress";

interface ProgressData {
  completedModules: number[];
  examPassed: boolean;
  examScore: number;
}

const ApprenticeLMS = () => {
  const [view, setView] = useState<View>("landing");
  const [modules, setModules] = useState<ApprenticeModule[]>(apprenticeModules);
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
  const [examPassed, setExamPassed] = useState(false);
  const [examScore, setExamScore] = useState(0);

  // Load progress from session storage
  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data: ProgressData = JSON.parse(saved);
        const updatedModules = apprenticeModules.map((m, index) => ({
          ...m,
          completed: data.completedModules.includes(m.id),
          locked: index === 0 ? false : !data.completedModules.includes(apprenticeModules[index - 1].id),
        }));
        setModules(updatedModules);
        setExamPassed(data.examPassed);
        setExamScore(data.examScore);
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }
  }, []);

  // Save progress to session storage
  const saveProgress = (completedModules: number[], examPassed: boolean, examScore: number) => {
    const data: ProgressData = { completedModules, examPassed, examScore };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const handleModuleSelect = (moduleId: number) => {
    const module = modules.find(m => m.id === moduleId);
    if (module && !module.locked) {
      setSelectedModuleId(moduleId);
      setView("module-content");
    }
  };

  const handleModuleComplete = () => {
    if (selectedModuleId === null) return;

    const updatedModules = modules.map((m, index) => {
      if (m.id === selectedModuleId) {
        return { ...m, completed: true };
      }
      // Unlock next module
      if (index > 0 && modules[index - 1].id === selectedModuleId) {
        return { ...m, locked: false };
      }
      return m;
    });

    setModules(updatedModules);
    const completedIds = updatedModules.filter(m => m.completed).map(m => m.id);
    saveProgress(completedIds, examPassed, examScore);
    
    toast.success("Module completed! Next module unlocked.");
    setView("modules");
    setSelectedModuleId(null);
  };

  const handleExamComplete = (passed: boolean, score: number) => {
    if (passed) {
      setExamPassed(true);
      setExamScore(score);
      const completedIds = modules.filter(m => m.completed).map(m => m.id);
      saveProgress(completedIds, true, score);
      setView("certificate");
    } else {
      setView("modules");
    }
  };

  const allModulesCompleted = modules.every(m => m.completed);

  // Landing Page
  if (view === "landing") {
    return (
      <div className="min-h-screen gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 gradient-secondary rounded-2xl flex items-center justify-center shadow-glow">
                <GraduationCap className="w-10 h-10 text-secondary-foreground" />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                Nexum Suum – Facility Intelligence™
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Facility Intelligence<br />Apprentice Certification
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
                Foundations of Facility Data, Systems Thinking, and Operational Metrics
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <Card className="bg-white/10 border-white/20 text-primary-foreground">
                <CardContent className="pt-6 text-center">
                  <BookOpen className="w-10 h-10 mx-auto mb-3 text-secondary" />
                  <h3 className="font-semibold text-lg">3 Core Modules</h3>
                  <p className="text-sm text-primary-foreground/70">Structured learning path with quizzes</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-primary-foreground">
                <CardContent className="pt-6 text-center">
                  <Award className="w-10 h-10 mx-auto mb-3 text-accent" />
                  <h3 className="font-semibold text-lg">60-Question Exam</h3>
                  <p className="text-sm text-primary-foreground/70">Comprehensive certification assessment</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-primary-foreground">
                <CardContent className="pt-6 text-center">
                  <GraduationCap className="w-10 h-10 mx-auto mb-3 text-success" />
                  <h3 className="font-semibold text-lg">PDF Certificate</h3>
                  <p className="text-sm text-primary-foreground/70">Downloadable upon completion</p>
                </CardContent>
              </Card>
            </div>

            {/* Program Details */}
            <Card className="bg-white/5 border-white/10 text-left mt-8">
              <CardHeader>
                <CardTitle className="text-primary-foreground">Program Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-primary-foreground/80">
                <p>• <strong>Module Quizzes:</strong> 70% passing score to unlock next module</p>
                <p>• <strong>Final Exam:</strong> 75% passing score for certification</p>
                <p>• <strong>No Login Required:</strong> Progress saved in your browser session</p>
                <p>• <strong>Self-Paced:</strong> Complete at your own pace</p>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="pt-8">
              <Button 
                size="lg" 
                onClick={() => setView("modules")}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 shadow-glow"
              >
                Begin Certification Program
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Footer Note */}
            <p className="text-sm text-primary-foreground/50 pt-8">
              Written for facility operators, supervisors, engineers, and technical managers.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Modules Dashboard
  if (view === "modules") {
    return (
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button variant="ghost" onClick={() => setView("landing")} className="mb-4">
              ← Back to Overview
            </Button>
            <h1 className="text-3xl font-bold text-foreground">Facility Intelligence Apprentice</h1>
            <p className="text-muted-foreground">Complete all modules to unlock the certification exam</p>
          </div>

          {/* Progress Bar */}
          <ApprenticeProgress 
            modules={modules} 
            currentModuleId={selectedModuleId ?? undefined}
            examUnlocked={allModulesCompleted}
            examPassed={examPassed}
          />

          {/* Module Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {modules.map(module => (
              <ApprenticeModuleCard 
                key={module.id} 
                module={module} 
                onSelect={handleModuleSelect}
              />
            ))}
          </div>

          {/* Final Exam Card */}
          <Card className={`shadow-medium ${allModulesCompleted ? 'border-accent/50 bg-accent/5' : 'opacity-60'}`}>
            <CardContent className="py-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${allModulesCompleted ? 'gradient-secondary shadow-glow' : 'bg-muted'}`}>
                    <Award className={`w-7 h-7 ${allModulesCompleted ? 'text-secondary-foreground' : 'text-muted-foreground'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Final Certification Exam</h3>
                    <p className="text-sm text-muted-foreground">
                      {examPassed 
                        ? `Passed with ${examScore.toFixed(0)}%` 
                        : allModulesCompleted 
                          ? "60 questions • 75% to pass" 
                          : "Complete all modules to unlock"}
                    </p>
                  </div>
                </div>
                <Button 
                  size="lg"
                  disabled={!allModulesCompleted}
                  onClick={() => setView("final-exam")}
                >
                  {examPassed ? "View Certificate" : "Start Exam"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {examPassed && (
            <div className="mt-6 text-center">
              <Button variant="outline" size="lg" onClick={() => setView("certificate")}>
                <Award className="w-4 h-4 mr-2" />
                View Your Certificate
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Module Content View
  if (view === "module-content" && selectedModuleId !== null) {
    const content = apprenticeModuleContent[selectedModuleId];
    if (!content) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground">Module content not available</p>
            <Button onClick={() => setView("modules")} className="mt-4">Back to Modules</Button>
          </div>
        </div>
      );
    }
    return (
      <ApprenticeModuleViewer
        content={content}
        moduleNumber={selectedModuleId}
        onBack={() => { setView("modules"); setSelectedModuleId(null); }}
        onComplete={handleModuleComplete}
      />
    );
  }

  // Final Exam View
  if (view === "final-exam") {
    return (
      <ApprenticeFinalExam
        onComplete={handleExamComplete}
        onBack={() => setView("modules")}
      />
    );
  }

  // Certificate View
  if (view === "certificate") {
    return (
      <ApprenticeCertificate
        score={examScore}
        onStartOver={() => setView("modules")}
      />
    );
  }

  return null;
};

export default ApprenticeLMS;
