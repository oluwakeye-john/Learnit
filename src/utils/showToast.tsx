import { Toast } from "native-base";

enum ToastType {
  DANGER = "danger",
  SUCCESS = "success",
  WARNING = "warning",
}
const CustomToast = (
  text: string,
  type: ToastType = ToastType.DANGER,
  duration: number = 4000
) => {
  Toast.show({
    text,
    type,
    duration,
  });
};

export default CustomToast;
