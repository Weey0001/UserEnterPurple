import React from "react";
import { ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";
import { compose } from "recompose";
import LoadingPage from "./App/AppComponents/loadingPage/LoadingPage";
import UserPage from "./App/AppComponents/userPage/UserPage";
import AppHoc from "./App/AppHoc/AppHoc";
import AppStyle from "./App/AppStyle/AppStyle";

const App: React.FC = (props: any) => (
  <ImageBackground
    source={{
      uri:
        "https://image.winudf.com/v2/image/Y29tLnBwcG9lLkdyZWVuRm9yZXN0MTFXYWxscGFwZXJfc2NyZWVuc2hvdHNfMV9hNmM2ZjFkOA/screen-1.jpg?fakeurl=1&type=.jpg"
    }}
  >
    <Animatable.View
      transition={["backgroundColor"]}
      style={[AppStyle.container]}
      duration={2000}
    >
      {props.isLoading ? <LoadingPage {...props} /> : <UserPage {...props} />}
    </Animatable.View>
  </ImageBackground>
);

export default compose(AppHoc)(App);
