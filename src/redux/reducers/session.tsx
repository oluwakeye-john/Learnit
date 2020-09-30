import {
  DIFFICULTY,
  QUESTION_TYPE,
  Session,
  SessionType,
} from "../types/session";

const initialState = {
  info: {
    numberOfQuestions: 0,
    difficulty: DIFFICULTY.easy,
    questionType: QUESTION_TYPE.MIXED,
  },
  questions: [],
  answers: {},
  score: 0,
  category: {
    id: 0,
    name: "",
  },
  allCategories: [],
  currentQuestion: 0,
};

export const sessionReducer = (state: Session = initialState, action: any) => {
  switch (action.type) {
    case SessionType.UPDATE_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
      };
    case SessionType.UPDATE_SELECTED_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SessionType.UPDATE_OPTIONS:
      return {
        ...state,
        info: action.payload,
      };
    case SessionType.UPDATE_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case SessionType.UPDATE_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
      };
    case SessionType.UPDATE_ANSWERS:
      return {
        ...state,
        answers: action.payload,
      };
    default:
      return state;
  }
};
