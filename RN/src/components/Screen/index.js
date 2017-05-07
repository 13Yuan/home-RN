import React, { Component } from "react";
import { View } from "react-native";
import Outline from "./components/Outline";

class Screen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          //flex-start, center, flex-end, space-around, and space-between
          alignItems: "flex-start",
          //flex-start, center, flex-end, and stretch.
          alignSelf: "center"
        }}
      >
        <Outline timeline="6H 1M"/>
      </View>
    );
  }
}
export default Screen;