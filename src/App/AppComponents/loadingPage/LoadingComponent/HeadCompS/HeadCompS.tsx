import React from "react";
import * as Animatable from "react-native-animatable";
import HeadCompSStyle, { HeadActionContainerLogo } from "./HeadCompSStyle";
import LogoCompS from "./LogoCompS/LogoCompS";
import TextCompS from "./TextCompS/TextCompS";

const HeadCompS: React.FC<any> = (props) => (
  <Animatable.View
    transition={["height"]}
    style={[
      HeadCompSStyle.container,
      HeadActionContainerLogo(props.actionLoad)
    ]}
  >
    <LogoCompS {...props} />
    <TextCompS {...props} />
  </Animatable.View>
);

export default HeadCompS;
