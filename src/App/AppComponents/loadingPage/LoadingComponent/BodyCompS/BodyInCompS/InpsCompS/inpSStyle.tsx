import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const InpSStyle = StyleSheet.create({
  container: {
    height: height / 3,
    width,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default InpSStyle;
