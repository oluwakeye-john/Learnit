import { StartQuizPayload } from "../redux/types/session";
import { GET_CATEGORIES, GET_QUESTIONS } from "./api";
import { api } from "./config";

export const getCategoriesCall = () => {
  return api.get(GET_CATEGORIES);
};

export const getQuestionsCall = (payload: StartQuizPayload) => {
  console.log(GET_QUESTIONS(payload));
  return api.get(GET_QUESTIONS(payload));
};
