import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Module } from "@/types/course";
import { courses } from "@/data/courses";
import { toast } from "sonner";

interface UserProgress {
  id: string;
  user_id: string;
  course_id: string;
  module_id: number;
  completed: boolean;
  completed_at: string | null;
  quiz_score: number | null;
  quiz_attempts: number;
  created_at: string;
  updated_at: string;
}

export const useUserProgress = (userId: string | undefined) => {
  const [coursesProgress, setCoursesProgress] = useState<Record<string, Module[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      // Initialize with default modules
      const defaultProgress: Record<string, Module[]> = {};
      courses.forEach(course => {
        defaultProgress[course.id] = course.modules;
      });
      setCoursesProgress(defaultProgress);
      setLoading(false);
      return;
    }

    loadProgress();
  }, [userId]);

  const loadProgress = async () => {
    if (!userId) return;

    try {
      const { data, error } = await (supabase as any)
        .from("user_progress")
        .select("*")
        .eq("user_id", userId);

      if (error) throw error;

      const progressData = data as UserProgress[] | null;

      // Update modules based on saved progress
      const updatedCoursesProgress: Record<string, Module[]> = {};

      courses.forEach((course) => {
        const courseProgressData = progressData?.filter((p) => p.course_id === course.id) || [];
        const completedModuleIds = courseProgressData
          .filter((p) => p.completed)
          .map((p) => p.module_id);

        const updatedModules = course.modules.map((module, index) => {
          const isCompleted = completedModuleIds.includes(module.id);
          // First module is always unlocked, others unlock when previous is completed
          const previousCompleted = index === 0 || completedModuleIds.includes(course.modules[index - 1].id);

          return {
            ...module,
            completed: isCompleted,
            locked: !previousCompleted && !isCompleted,
          };
        });

        updatedCoursesProgress[course.id] = updatedModules;
      });

      setCoursesProgress(updatedCoursesProgress);
    } catch (error: any) {
      console.error("Error loading progress:", error);
      toast.error("Failed to load your progress");
      // Initialize with default on error
      const defaultProgress: Record<string, Module[]> = {};
      courses.forEach(course => {
        defaultProgress[course.id] = course.modules;
      });
      setCoursesProgress(defaultProgress);
    } finally {
      setLoading(false);
    }
  };

  const saveProgress = async (courseId: string, moduleId: number, quizScore?: number) => {
    if (!userId) return;

    try {
      const { error } = await (supabase as any).from("user_progress").upsert({
        user_id: userId,
        course_id: courseId,
        module_id: moduleId,
        completed: true,
        completed_at: new Date().toISOString(),
        quiz_score: quizScore,
        quiz_attempts: 1,
      });

      if (error) throw error;

      // Update local state
      const currentCourseModules = coursesProgress[courseId] || [];
      const updatedModules = currentCourseModules.map((module) => {
        if (module.id === moduleId) {
          return { ...module, completed: true };
        }
        if (module.id === moduleId + 1) {
          return { ...module, locked: false };
        }
        return module;
      });

      setCoursesProgress({
        ...coursesProgress,
        [courseId]: updatedModules,
      });
    } catch (error: any) {
      console.error("Error saving progress:", error);
      toast.error("Failed to save your progress");
    }
  };

  const getCourseModules = (courseId: string): Module[] => {
    if (coursesProgress[courseId]) {
      return coursesProgress[courseId];
    }
    // Return default modules if not loaded yet
    const course = courses.find(c => c.id === courseId);
    return course?.modules || [];
  };

  const getCourseProgress = (courseId: string) => {
    const modules = getCourseModules(courseId);
    return {
      completed: modules.filter(m => m.completed).length,
      total: modules.length,
    };
  };

  return { getCourseModules, getCourseProgress, loading, saveProgress };
};
