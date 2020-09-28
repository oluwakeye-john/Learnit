import { Toast } from "native-base";

const CustomToast = () => {
  Toast.show({
    text: "hello -world",
    type: "danger",
  });
};

export default CustomToast;
