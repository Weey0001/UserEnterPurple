import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const HeadCompSStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HeadCompSStyle;

export const HeadActionContainerLogo: Function = (state: string) => {
  if (state === "isSpinning") {
    return {
      width,
      height
    };
  } else if (state === "isSignUp" || state === "isSignIn") {
    return {
      width,
      height: height / 3
    };
  }
};
