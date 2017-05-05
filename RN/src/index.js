/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import { MainScreen, ProfileScreen } from "./containers";
import Title from "./Screen/components/title/index";

class RN extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <Title timeline="7分钟" />
      </View>
    );
  }
}

export default function native(platform) {
  // const RN = StackNavigator({
  //   Home: { screen: MainScreen },
  //   Profile: { screen: ProfileScreen }
  // });
  AppRegistry.registerComponent("RN", () => RN);
}
