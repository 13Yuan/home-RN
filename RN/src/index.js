/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { StackNavigator } from "react-navigation";
import { MainScreen, ProfileScreen } from "./containers";

export default function native(platform) {
  const RN = StackNavigator({
    Home: { screen: MainScreen },
    Profile: { screen: ProfileScreen }
  });
  AppRegistry.registerComponent("RN", () => RN);
}