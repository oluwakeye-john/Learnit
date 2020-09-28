import { Dispatch } from "redux";
import { getCategoriesCall } from "../../services/request";
import { action } from "typesafe-actions";
import { SessionType } from "../types/session";

export const getCategoriesAction = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await getCategoriesCall();
      dispatch(getCategoriesActionSuccess(response.data.trivia_categories));
    } catch (error) {
      console.error(error.response || error.message);
    }
  };
};

const getCategoriesActionSuccess = (payload: any) => {
  return action(SessionType.UPDATE_ALL_CATEGORIES, payload);
};
