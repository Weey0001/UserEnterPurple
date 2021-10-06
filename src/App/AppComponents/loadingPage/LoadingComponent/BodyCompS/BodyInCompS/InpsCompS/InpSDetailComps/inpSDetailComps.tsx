import React from "react";
import * as Animatable from "react-native-animatable";
import { TextInput } from "react-native";
import InpSDetailCompsStyle, { AnimInp } from "./InpSDetailCompsStyle";

interface inpInt {
  val: string;
  plH: string;
  onCh: (_: string) => void;
  ky: string;
  ind: number;
}
const InpSDetailComps: React.FC<inpInt> = ({ val, plH, onCh, ky, ind }) => (
  <Animatable.View
    style={[InpSDetailCompsStyle.container]}
    animation={AnimInp}
    duration={500}
    delay={ind * 100 + 2000}
  >
    <TextInput
      value={val}
      placeholder={plH}
      onChangeText={onCh}
      keyboardType={ky}
      style={InpSDetailCompsStyle.inps}
    />
  </Animatable.View>
);

export default InpSDetailComps;
