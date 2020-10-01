import { Dispatch } from "redux";
import { action } from "typesafe-actions";
import {
  Answer,
  CategoryType,
  OptionsType,
  Question,
  SessionType,
  StartQuizPayload,
} from "../types/session";
import { getQuestionsCall } from "../../services/request";
import CustomToast from "../../utils/showToast";
import { ErrorHandler } from "../../utils/errorHandler";

export const updateSelectedCategory = (payload: CategoryType) => {
  return action(SessionType.UPDATE_SELECTED_CATEGORY, payload);
};

export const updateOptions = (payload: OptionsType) => {
  return action(SessionType.UPDATE_OPTIONS, payload);
};

export const startQuiz = (payload: StartQuizPayload, onSuccess?: Function) => {
  console.log("here1");
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateQuestionsAction([]));
      dispatch(setCurrentQuestion(0));
      dispatch(_updateAnswers({}));
      dispatch(updateScore({}));
      dispatch(updateShowResult(false));
      const response = await getQuestionsCall(payload);
      console.log(response.data);
      dispatch(updateQuestionsAction(response.data.results));
      onSuccess && onSuccess();
    } catch (error) {
      ErrorHandler(error);
    }
  };
};

export const finishQuiz = () => {
  return async (dispatch: Dispatch) => {
    dispatch(updateShowResult(true));
  };
};

export const resetQuiz = () => {
  return async (dispatch: Dispatch) => {
    dispatch(updateShowResult(false));
  };
};

export const updateShowResult = (value: boolean) => {
  return action(SessionType.UPDATE_SHOW_RESULT, value);
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

export const updateAnswers = (payload: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(_updateAnswers(payload));
    dispatch(updateScore(payload));
  };
};

export const updateScore = (answers: any) => {
  const answerKeys = Object.keys(answers);
  let score = 0;
  if (answerKeys) {
    answerKeys.map((ans: any) => {
      if (answers[ans].isCorrect) {
        score += 1;
      }
    });
  }
  return action(SessionType.UPDATE_SCORE, score);
};

export const _updateAnswers = (answers: any) => {
  return action(SessionType.UPDATE_ANSWERS, answers);
};
