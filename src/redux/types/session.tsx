export interface Session {
  info: OptionsType;
  category: CategoryType;
  questions: Question[];
  answers: any;
  score: number;
  allCategories: CategoryType[];
  currentQuestion: number;
}

export enum DIFFICULTY {
  easy = "easy",
  medium = "medium",
  hard = "hard",
  empty = "",
}

export enum QUESTION_TYPE {
  MULTIPLE = "multiple",
  BOOLEAN = "boolean",
  MIXED = "mixed",
  EMPTY = "",
}

export interface CategoryType {
  id: number;
  name: string;
}

export interface OptionsType {
  numberOfQuestions: number;
  difficulty: DIFFICULTY;
  questionType: QUESTION_TYPE;
}

export interface Question {
  category: string;
  correct_answer: string;
  incorrect_answers: any[];
  question: string;
  type: QUESTION_TYPE;
}

export interface Answer {
  value: string;
  isCorrect: boolean;
}

export interface StartQuizPayload {
  numberOfQuestions: number;
  difficulty: DIFFICULTY;
  questionType: QUESTION_TYPE;
  category: CategoryType;
}

export enum SessionType {
  UPDATE_ALL_CATEGORIES = "UPDATE_ALL_CATEGORIES",
  UPDATE_SELECTED_CATEGORY = "UPDATE_SELECTED_CATEGORY",
  UPDATE_OPTIONS = "UPDATE_OPTIONS",
  UPDATE_QUESTIONS = "UPDATE_QUESTIONS",
  UPDATE_CURRENT_QUESTION = "UPDATE_CURRENT_QUESTION",
  UPDATE_ANSWERS = "UPDATE_ANSWERS",
  UPDATE_SCORE = "UPDATE_SCORE",
}
