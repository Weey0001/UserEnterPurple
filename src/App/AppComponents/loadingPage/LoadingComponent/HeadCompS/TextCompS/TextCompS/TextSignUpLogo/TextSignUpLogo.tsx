import React from "react";
import * as Animatable from "react-native-animatable";
import TextSignUpLogoStyle from "./TextSignUpLogoStyle";

const TextSignUpLogo: React.FC<any> = ({ inText }) => (
  <Animatable.Text
    style={[TextSignUpLogoStyle.txt]}
    animation="bounceIn"
    duration={1000}
  >
    {inText}
  </Animatable.Text>
);

export default TextSignUpLogo;
