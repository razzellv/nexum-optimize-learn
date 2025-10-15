import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Wrench } from "lucide-react";
import { Course } from "@/types/course";

interface CourseSelectorProps {
  courses: Course[];
  onSelectCourse: (courseId: string) => void;
  courseProgress: Record<string, { completed: number; total: number }>;
}

export const CourseSelector = ({ courses, onSelectCourse, courseProgress }: CourseSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Training Courses</h1>
          <p className="text-muted-foreground text-lg">Select a course to begin your training journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {courses.map((course, index) => {
            const progress = courseProgress[course.id] || { completed: 0, total: course.modules.length };
            const progressPercent = (progress.completed / progress.total) * 100;
            const isCompleted = progress.completed === progress.total;

            return (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2 mb-2">
                        {index === 0 ? <BookOpen className="h-5 w-5" /> : <Wrench className="h-5 w-5" />}
                        {course.title}
                      </CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">
                          {progress.completed}/{progress.total} modules
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>

                    <Button
                      onClick={() => onSelectCourse(course.id)}
                      className="w-full"
                      variant={isCompleted ? "outline" : "default"}
                    >
                      {isCompleted ? "Review Course" : progress.completed > 0 ? "Continue Course" : "Start Course"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-2 border-primary/50">
          <CardHeader>
            <CardTitle className="text-center">Final Comprehensive Exam</CardTitle>
            <CardDescription className="text-center">
              Complete all modules from both courses to unlock the final exam
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-sm text-muted-foreground">
                {Object.values(courseProgress).reduce((sum, p) => sum + p.completed, 0)} /{" "}
                {Object.values(courseProgress).reduce((sum, p) => sum + p.total, 0)} total modules completed
              </div>
              <Button
                disabled={!Object.values(courseProgress).every((p) => p.completed === p.total)}
                size="lg"
                className="w-full max-w-md"
              >
                Take Final Exam
              </Button>
              {!Object.values(courseProgress).every((p) => p.completed === p.total) && (
                <p className="text-sm text-muted-foreground">
                  Complete all modules to unlock the final exam
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
