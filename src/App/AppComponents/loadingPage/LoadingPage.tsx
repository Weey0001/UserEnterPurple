import React from "react";
import { View, Button } from "react-native";
import { compose } from "recompose";
import LoadingPageHoc from "./LoadingPageHoc/LoadingPageHoc";
import LoadingPageStyle from "./LoadingPageStyle/LoadingPageStyle";
import HeadCompS from "./LoadingComponent/HeadCompS/HeadCompS";
import BodyCompS from "./LoadingComponent/BodyCompS/BodyCompS";

const LoadingPage: React.FC<any> = (props) => (
  <View style={LoadingPageStyle.container}>
    <HeadCompS {...props} />
    <BodyCompS {...props} />
    {/* <TestButton {...props} /> */}
  </View>
);

export default compose(LoadingPageHoc)(LoadingPage);

const TestButton: React.FC<any> = ({ IsSpinning, IsSignUp, IsSignIn }) => (
  <View style={LoadingPageStyle.testBtn}>
    <Button color="yellow" onPress={IsSpinning} title="IsSpinning" />
    <Button color="brown" onPress={IsSignUp} title="IsSignUp" />
    <Button color="orange" onPress={IsSignIn} title="IsSignIn" />
  </View>
);
