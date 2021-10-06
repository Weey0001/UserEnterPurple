import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const ButtonCompSDetailsStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  containerTxt: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ffffff30",
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    alignText: "center",
    padding: 5,
    fontSize: 20,
    color: "white",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20
  }
});
export default ButtonCompSDetailsStyle;
