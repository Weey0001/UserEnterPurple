import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const LoadingPageStyle = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  testBtn: {
    width: "80%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default LoadingPageStyle;
