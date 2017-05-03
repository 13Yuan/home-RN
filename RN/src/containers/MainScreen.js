import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class MainScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Ryan</Text>
        <Button
          title="Go to Ryan's profile"
          onPress={() => {
            navigate("Profile", { name: "Ryan" });
          }}
        />
      </View>
    );
  }
}
export default MainScreen;
