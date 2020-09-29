import { Toast } from "native-base";

const CustomToast = (text: string, type: any = "danger") => {
  Toast.show({
    text,
    type,
  });
};

export default CustomToast;
