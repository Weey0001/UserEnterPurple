import React from "react";
import * as Animatable from "react-native-animatable";
import InpSDetailComps from "./InpSDetailComps/inpSDetailComps";
import InpSStyle from "./inpSStyle";
import { Text } from "react-native";

const InpSCompS: React.FC<any> = (props: any) => (
  <Animatable.View style={InpSStyle.container}>
    <InpSDetailComps
      val={props.name}
      plH="name"
      onCh={props.AddName}
      ky="default"
      ind={0}
    />
    <InpSDetailComps
      val={props.mail}
      plH="mail"
      onCh={props.AddMail}
      ky="decimal"
      ind={1}
    />
    <Text>{props.name}</Text>
    <Text>{props.mail}</Text>
  </Animatable.View>
);

export default InpSCompS;
