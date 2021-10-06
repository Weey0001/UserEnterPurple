import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");
const ButtonCompsStyle = StyleSheet.create({
  container: {
    width: "80%",
    height: height / 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default ButtonCompsStyle;
