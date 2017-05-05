import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "green",
    fontSize: 50
  }
});

class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { timeline } = this.props;
    return (
      <View>
        <View style={{ marginTop: 200 }}>
          <Text style={styles.title}>
            {timeline || ""}
          </Text>
          <Text style={{ marginTop: 10 }}>
            今天使用时长
          </Text>
          {/*<TouchableHighlight onPress={this.onPress}>*/}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
            <Text>今天</Text>
            <Text>7分钟</Text>
            </View>
          {/*</TouchableHighlight>*/}
      </View>
      </View>
    );
  }
}
export default Title;
