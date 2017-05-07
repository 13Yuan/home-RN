/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, View, Text } from "react-native";
import Screen from './components/Screen';

class RN extends Component {
  render() {
    return (
        <Screen />
    );
  }
}

export default function native(platform) {
  AppRegistry.registerComponent("RN", () => RN);
}
