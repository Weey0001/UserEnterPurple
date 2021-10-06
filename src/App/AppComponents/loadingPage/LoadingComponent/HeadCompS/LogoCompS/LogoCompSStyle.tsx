import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const LogoCompSStyle = StyleSheet.create({
  container: {}
});

export const LogoActionLogo: Function = (state: string) => {
  if (state === "isSpinning") {
    return {
      width: width > height ? height / 2 : width / 2,
      height: width > height ? height / 2 : width / 2,
      right: 0
    };
  } else if (state === "isSignUp" || state === "isSignIn") {
    return {
      width: width > height ? height / 3 : width / 3,
      height: width > height ? height / 3 : width / 3,
      right: width / 4
    };
  }
};

export default LogoCompSStyle;
