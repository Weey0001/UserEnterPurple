import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const UserPageStyle = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default UserPageStyle;
