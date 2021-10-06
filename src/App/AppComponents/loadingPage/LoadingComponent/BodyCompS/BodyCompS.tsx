import React from "react";
import * as Animatable from "react-native-animatable";
import { compose } from "recompose";
import BodyCompSHoc from "./BodyCompSHoc";
import BodyCompSStyle, { BodyInpSActionStyle } from "./BodyCompSStyle";
import ButtonComps from "./BodyInCompS/ButtonComps/ButtonComps";
import InpSCompS from "./BodyInCompS/InpsCompS/inpsCompS";

const BodyCompS: React.FC<any> = (props: any) => (
  <Animatable.View
    transition={["height"]}
    style={[BodyCompSStyle.container, BodyInpSActionStyle(props.actionLoad)]}
  >
    <InpSCompS {...props} />
    <ButtonComps {...props} />
  </Animatable.View>
);

export default compose(BodyCompSHoc)(BodyCompS);
