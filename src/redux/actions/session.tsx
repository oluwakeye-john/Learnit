import { Dispatch } from "redux";
import { action } from "typesafe-actions";
import { CategoryType, OptionsType, SessionType } from "../types/session";

export const updateSelectedCategory = (payload: CategoryType) => {
  return action(SessionType.UPDATE_SELECTED_CATEGORY, payload);
};

export const updateOptions = (payload: OptionsType) => {
  return action(SessionType.UPDATE_OPTIONS, payload);
};
