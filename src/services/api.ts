import {
  DIFFICULTY,
  QUESTION_TYPE,
  StartQuizPayload,
} from "../redux/types/session";

export const GET_CATEGORIES = "/api_category.php";

export const GET_QUESTIONS = (payload: StartQuizPayload) => {
  let out = `/api.php?amount=${payload.numberOfQuestions}&category=${payload.category.id}&difficulty=${payload.difficulty}`;
  if (
    payload.questionType === QUESTION_TYPE.MULTIPLE ||
    payload.questionType === QUESTION_TYPE.BOOLEAN
  ) {
    out = out + `&type=${payload.questionType}`;
  }
  return out;
};
