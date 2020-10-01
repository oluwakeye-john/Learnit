import { Dispatch } from "redux";
import { getCategoriesCall } from "../../services/request";
import { action } from "typesafe-actions";
import { SessionType } from "../types/session";
import { ErrorHandler } from "../../utils/errorHandler";

export const getCategoriesAction = (
  onSuccess?: Function,
  onError?: Function
) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await getCategoriesCall();
      dispatch(getCategoriesActionSuccess(response.data.trivia_categories));
      onSuccess && onSuccess();
    } catch (error) {
      ErrorHandler(error, onError);
    }
  };
};

const getCategoriesActionSuccess = (payload: any) => {
  return action(SessionType.UPDATE_ALL_CATEGORIES, payload);
};
