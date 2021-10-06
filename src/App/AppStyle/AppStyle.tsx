import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const AppStyle = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AppStyle;
