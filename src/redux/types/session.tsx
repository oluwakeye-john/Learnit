export interface Session {
  info: OptionsType;
  category: CategoryType;
  questions: any[];
  answers: any;
  score: number;
  allCategories: CategoryType[];
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

export enum SessionType {
  UPDATE_ALL_CATEGORIES = "UPDATE_ALL_CATEGORIES",
  UPDATE_SELECTED_CATEGORY = "UPDATE_SELECTED_CATEGORY",
  UPDATE_OPTIONS = "UPDATE_OPTIONS",
}
