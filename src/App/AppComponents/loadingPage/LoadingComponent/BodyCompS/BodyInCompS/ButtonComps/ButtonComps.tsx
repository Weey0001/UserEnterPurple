import React from "react";
import { View } from "react-native";
import ButtonCompSDetails from "./ButtonCompSDetails/ButtonCompSDetails";
import ButtonCompsStyle from "./ButtonCompsStyle";

const ButtonComps: React.FC = (props: any) => (
  <View style={ButtonCompsStyle.container}>
    {props.actionLoad === "isSignIn" ? (
      <ButtonCompSDetails
        txt="SignUp"
        actionBtn={props.IsSignUp}
        bckcolr="#1c689e"
      />
    ) : props.actionLoad === "isSignUp" ? (
      <ButtonCompSDetails
        txt="SignIn"
        actionBtn={props.IsSignIn}
        bckcolr="#8638a8"
      />
    ) : null}
    {/* <ButtonCompSDetails
      txt="Connect"
      actionBtn={props.AddUserData}
      bckcolr="#38a861"
    /> */}
  </View>
);

export default ButtonComps;
