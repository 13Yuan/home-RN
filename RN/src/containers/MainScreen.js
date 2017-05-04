import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import FadeInView from "../components/FadeInView";
class MainScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <FadeInView
        style={{ width: 250, height: 50, backgroundColor: "powderblue" }}
      >
        <TouchableHighlight
          title="Go to Ryan's profile"
          onPress={() => {
            navigate("Profile", { name: "Ryan" });
          }}
        >
          <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>
            Hello Ryan
          </Text>
        </TouchableHighlight>
      </FadeInView>
    );
  }
}
export default MainScreen;
