import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Module } from "@/types/course";
import { toast } from "sonner";

interface UserProgress {
  id: string;
  user_id: string;
  module_id: number;
  completed: boolean;
  completed_at: string | null;
  quiz_score: number | null;
  quiz_attempts: number;
  created_at: string;
  updated_at: string;
}

export const useUserProgress = (userId: string | undefined, initialModules: Module[]) => {
  const [modules, setModules] = useState<Module[]>(initialModules);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
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
      const updatedModules = initialModules.map((module) => {
        const progress = progressData?.find((p) => p.module_id === module.id);
        if (progress?.completed) {
          return { ...module, completed: true, locked: false };
        }
        // Unlock next module if previous is completed
        const prevModule = initialModules[module.id - 2];
        const prevProgress = progressData?.find((p) => p.module_id === prevModule?.id);
        if (module.id === 1 || prevProgress?.completed) {
          return { ...module, locked: false };
        }
        return module;
      });

      setModules(updatedModules);
    } catch (error: any) {
      console.error("Error loading progress:", error);
      toast.error("Failed to load your progress");
    } finally {
      setLoading(false);
    }
  };

  const saveProgress = async (moduleId: number, quizScore?: number) => {
    if (!userId) return modules;

    try {
      const { error } = await (supabase as any).from("user_progress").upsert({
        user_id: userId,
        module_id: moduleId,
        completed: true,
        completed_at: new Date().toISOString(),
        quiz_score: quizScore,
        quiz_attempts: 1,
      });

      if (error) throw error;

      // Update local state
      const updatedModules = modules.map((module) => {
        if (module.id === moduleId) {
          return { ...module, completed: true };
        }
        if (module.id === moduleId + 1) {
          return { ...module, locked: false };
        }
        return module;
      });

      setModules(updatedModules);
      return updatedModules;
    } catch (error: any) {
      console.error("Error saving progress:", error);
      toast.error("Failed to save your progress");
      return modules;
    }
  };

  return { modules, loading, saveProgress };
};
