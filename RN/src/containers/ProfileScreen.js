import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile"
  };
  render() {
    const name = this.props.navigation.state.params["name"];
    return (
      <View>
        <Text>
            {name}'s profile
        </Text>
      </View>
    );
  }
}
export default ProfileScreen;
