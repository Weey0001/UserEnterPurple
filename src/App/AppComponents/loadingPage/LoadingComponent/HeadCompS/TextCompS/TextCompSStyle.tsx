import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const TextCompSStyle = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default TextCompSStyle;

export const TextCompSActionTextLogo: Function = (state: string) => {
  if (state === "isSpinning") {
    return {
      width: width * (3 / 4),
      height: width > height ? height / 5 : width / 5
    };
  } else if (state === "isSignUp" || state === "isSignIn") {
    return {
      width: width / 2,
      height: width > height ? height / 10 : width / 10
    };
  }
};
