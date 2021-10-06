import React from "react";
import * as Animatable from "react-native-animatable";
import LogoCompSStyle, { LogoActionLogo } from "./LogoCompSStyle";

const LogoCompS: React.FC<any> = (props) => (
  <Animatable.Image
    source={{
      uri:
        "https://www.pngall.com/wp-content/uploads/2016/03/Butterfly-PNG-3.png"
    }}
    transition={["width", "height", "right"]}
    style={[LogoCompSStyle.container, LogoActionLogo(props.actionLoad)]}
  />
);

export default LogoCompS;
