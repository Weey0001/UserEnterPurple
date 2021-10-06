import React from "react";
import * as Animatable from "react-native-animatable";
import TextCompSStyle, { TextCompSActionTextLogo } from "./TextCompSStyle";
import TextLoadingLogo from "./TextCompS/TextLoadingLogo/TextLoadingLogo";
import TextSignInLogo from "./TextCompS/TextSignInLogo/TextSignInLogo";
import TextSignUpLogo from "./TextCompS/TextSignUpLogo/TextSignUpLogo";

const TextCompS: React.FC<any> = (props) => (
  <Animatable.View
    transition={["height", "width"]}
    style={[
      TextCompSStyle.container,
      TextCompSActionTextLogo(props.actionLoad)
    ]}
  >
    {props.actionLoad === "isSpinning" ? (
      <TextLoadingLogo inText="Spinning" />
    ) : props.actionLoad === "isSignIn" ? (
      <TextSignInLogo inText="SignIn" />
    ) : props.actionLoad === "isSignUp" ? (
      <TextSignUpLogo inText="SignUp" />
    ) : null}
  </Animatable.View>
);

export default TextCompS;
