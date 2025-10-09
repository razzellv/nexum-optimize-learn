export interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  objective: string;
  completed: boolean;
  locked: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  type: 'multiple-choice' | 'short-answer';
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
}

export interface ModuleContent {
  id: number;
  title: string;
  objective: string;
  duration: string;
  narrationScript: string[];
  scenario: {
    title: string;
    description: string;
    situation: string;
  };
  standards: {
    title: string;
    items: string[];
  };
  quiz: QuizQuestion[];
  reflectionPrompt: string;
  keyTakeaways: string[];
}
