import { GET_CATEGORIES } from "./api";
import { api } from "./config";

export const getCategoriesCall = () => {
  return api.get(GET_CATEGORIES);
};
