import { DIFFICULTY, Session, SessionType } from "../types/session";

const initialState = {
  numberOfQuestions: 0,
  questions: [],
  answers: {},
  score: 0,
  difficulty: DIFFICULTY.easy,
  category: {
    id: 0,
    name: "",
  },
  allCategories: [],
};

export const sessionReducer = (state: Session = initialState, action: any) => {
  switch (action.type) {
    case SessionType.UPDATE_ALL_CATEGORIES:
      console.log(action, ">>>>>>>>>>>>>");
      return {
        ...state,
        allCategories: action.payload,
      };
    default:
      return state;
  }
};
