import { unescape } from "html-escaper";
export const formatText = (text: string) => {
  return unescape(text.replace(/&#039;/g, "'"));
};
