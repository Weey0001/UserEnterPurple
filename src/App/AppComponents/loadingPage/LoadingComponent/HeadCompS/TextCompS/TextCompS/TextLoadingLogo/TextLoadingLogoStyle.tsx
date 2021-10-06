import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const TextLoadingLogoStyle = StyleSheet.create({
  txt: {
    fontSize: width > height ? height / 10 : width / 10,
    fontWeight: 700,
    color: "white",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20
  }
});

export default TextLoadingLogoStyle;
