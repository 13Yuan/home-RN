import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from './style';

export default class Outline extends Component {
  render() {
    return (
      (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 150
            }}
          >
            <Text
              style={{
                color: "brown",
                fontSize: 80
              }}
            >
              {this.props.timeline}
            </Text>
            <Text
              style={{
                fontSize: 20
              }}
            >
              on your phone today
            </Text>
          </View>
      )
    );
  }
}
