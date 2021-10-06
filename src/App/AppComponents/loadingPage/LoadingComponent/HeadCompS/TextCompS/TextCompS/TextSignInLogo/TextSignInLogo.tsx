import React from "react";
import * as Animatable from "react-native-animatable";
import TextSignInLogoStyle from "./TextSignInLogStyle";

const TextSignInLogo: React.FC<any> = ({ inText }) => (
  <Animatable.Text
    style={[TextSignInLogoStyle.txt]}
    animation="bounceIn"
    duration={1000}
  >
    {inText}
  </Animatable.Text>
);

export default TextSignInLogo;
