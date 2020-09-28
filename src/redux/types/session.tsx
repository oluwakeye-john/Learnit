export interface Session {
  category: CategoryType;
  numberOfQuestions: number;
  questions: any[];
  answers: any;
  score: number;
  difficulty: "easy" | "medium" | "hard";
  allCategories: CategoryType[];
}

export enum DIFFICULTY {
  easy = "easy",
  medium = "medium",
  hard = "hard",
}

export interface CategoryType {
  id: number;
  name: string;
}

export enum SessionType {
  UPDATE_ALL_CATEGORIES = "UPDATE_ALL_CATEGORIES",
}
