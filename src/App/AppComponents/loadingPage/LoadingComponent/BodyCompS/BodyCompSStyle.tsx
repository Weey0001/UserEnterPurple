import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const BodyCompSStyle = StyleSheet.create({
  container: {
    alignItems: "center"
  }
});
export default BodyCompSStyle;

export const BodyInpSActionStyle: Function = (state: string) => {
  if (state === "isSpinning") {
    return {
      width,
      height: 0
    };
  } else if (state === "isSignUp" || state === "isSignIn") {
    return {
      width,
      height: height * (2 / 3)
    };
  }
};
