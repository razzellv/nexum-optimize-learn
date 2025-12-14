import { useState } from "react";
import { Module } from "@/types/course";
import { courses } from "@/data/courses";

export const useUserProgress = () => {
  // Initialize with default modules (session-based, no persistence)
  const [coursesProgress, setCoursesProgress] = useState<Record<string, Module[]>>(() => {
    const defaultProgress: Record<string, Module[]> = {};
    courses.forEach(course => {
      defaultProgress[course.id] = course.modules;
    });
    return defaultProgress;
  });

  const saveProgress = (courseId: string, moduleId: number, quizScore?: number) => {
    // Update local state only (session-based)
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

  return { getCourseModules, getCourseProgress, loading: false, saveProgress };
};
