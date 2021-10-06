import React from "react";
import * as Animatable from "react-native-animatable";
import TextLoadingLogoStyle from "./TextLoadingLogoStyle";

const TextLoadingLogo: React.FC<any> = ({ inText }) => (
  <Animatable.Text
    style={[TextLoadingLogoStyle.txt]}
    animation="bounceIn"
    duration={1000}
  >
    {inText}
  </Animatable.Text>
);

export default TextLoadingLogo;
