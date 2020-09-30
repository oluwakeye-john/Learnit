import { Dispatch } from "redux";
import { action } from "typesafe-actions";
import {
  CategoryType,
  OptionsType,
  Question,
  SessionType,
  StartQuizPayload,
} from "../types/session";
import { getQuestionsCall } from "../../services/request";
import CustomToast from "../../utils/showToast";

export const updateSelectedCategory = (payload: CategoryType) => {
  return action(SessionType.UPDATE_SELECTED_CATEGORY, payload);
};

export const updateOptions = (payload: OptionsType) => {
  return action(SessionType.UPDATE_OPTIONS, payload);
};

export const startQuiz = (payload: StartQuizPayload, onSuccess?: Function) => {
  console.log("here1");
  return async (dispatch: Dispatch) => {
    console.log("here2");
    dispatch(updateQuestionsAction([]));
    try {
      const response = await getQuestionsCall(payload);
      dispatch(updateQuestionsAction(response.data.results));
      onSuccess && onSuccess();
    } catch (error) {
      console.log(error);
      CustomToast("An error occured");
    }
  };
};

export const updateQuestionsAction = (questions: Question | []) => {
  return action(SessionType.UPDATE_QUESTIONS, questions);
};

export const startQuizSuccess = (questions: any) => {
  return action(SessionType.UPDATE_QUESTIONS, questions);
};

export const setCurrentQuestion = (number: number) => {
  return action(SessionType.UPDATE_CURRENT_QUESTION, number);
};

export const updateAnswers = (answers: any) => {
  return action(SessionType.UPDATE_ANSWERS, answers);
};
