import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const InpSDetailCompsStyle = StyleSheet.create({
  container: {
    width: "80%",
    marginBottom: 10
  },
  inps: {
    backgroundColor: "white",
    fontSize: height / 20,
    textAlign: "center",
    borderRadius: 10
  }
});

export default InpSDetailCompsStyle;

export const AnimInp = {
  0: {
    opacity: 0,
    width: "0%"
  },
  1: {
    opacity: 1,
    width: "80%"
  }
};
