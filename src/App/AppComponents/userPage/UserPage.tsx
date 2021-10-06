import React from "react";
import { View, Text } from "react-native";
import UserPageStyle from "./UserPageStyle/UserPageStyle";

const UserPage: React.FC = (props: any) => (
  <View style={UserPageStyle.container}>
    <Text> UserPage </Text>
  </View>
);

export default UserPage;
