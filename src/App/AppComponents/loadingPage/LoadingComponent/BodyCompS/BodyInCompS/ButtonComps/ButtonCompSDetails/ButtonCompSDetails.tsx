import React, { useRef } from "react";
import * as Animatable from "react-native-animatable";
import { TouchableWithoutFeedback, Text } from "react-native";
import ButtonCompSDetailsStyle from "./buttonCompSDetailsStyle";

const ButtonCompSDetails = ({
  txt,
  bckcolr,
  actionBtn
}: {
  txt: string;
  bckcolr: string;
  actionBtn: () => void;
}) => {
  let btnRef: React.MutableRefObject<undefined> = useRef();

  let animClick: Function = (): void => {
    btnRef.current.bounceIn();
    actionBtn();
  };

  return (
    <Animatable.View
      animation="bounceIn"
      duration={200}
      style={ButtonCompSDetailsStyle.container}
    >
      <TouchableWithoutFeedback onPress={() => animClick()}>
        <Animatable.View
          style={[
            { backgroundColor: `${bckcolr}99` },
            ButtonCompSDetailsStyle.containerTxt
          ]}
          ref={btnRef}
        >
          <Text style={ButtonCompSDetailsStyle.txt}>{txt}</Text>
        </Animatable.View>
      </TouchableWithoutFeedback>
    </Animatable.View>
  );
};

export default ButtonCompSDetails;
