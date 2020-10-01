import { AxiosError } from "axios";
import CustomToast from "./showToast";

export const ErrorHandler = (error: AxiosError, onError?: Function) => {
  console.log(error);
  onError && onError();
  if (error.response) {
    console.log(error.response.data);
    return CustomToast("An error occured.");
  }
  if (error.request) {
    console.log("---", error.request);
    return CustomToast("Check your internet connection");
  }
  console.log("...", error);
  return CustomToast("An error occured.");
};
