import validate from "validate.js";
import { OptionsType } from "../redux/types/session";

let constraints = {
  numberOfQuestions: {
    presence: {
      allowEmpty: false,
    },
    numericality: {
      greaterThan: 0,
    },
  },
  difficulty: {
    presence: {
      allowEmpty: false,
    },
  },
  questionType: {
    presence: {
      allowEmpty: false,
    },
  },
};

export const validateOptions = (input: any) => {
  console.log("here", input);
  const error = validate(input, constraints);
  console.log("here");
  if (error) {
    console.log("error");
    return getFirstError(error);
  } else {
    return false;
  }
};

const getFirstError = (error: any) => {
  try {
    if (error) {
      const errKeys = Object.keys(error);
      if (errKeys) {
        const firstErrorKey = errKeys[0];
        return error[firstErrorKey];
      }
      return "Invalid input";
    }
  } catch {
    return "Invalid input";
  }
};
