import React, { Component } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Slider
} from "react-native";

const AnimatedSlider = Animated.createAnimatedComponent(Slider);

class Tester extends Component {
  constructor(props) {
    super(props);
    this.current = 0;
    this.state = {
      native: new Animated.Value(0),
      js: new Animated.Value(0)
    };
  }
  onPress = () => {
    const animConifg = this.current && this.props.reverseConfig
      ? this.props.reverseConfig
      : this.props.config;
    this.current = this.current ? 0 : 1;
    const config = {
      ...animConifg,
      toValue: this.current
    };
    Animated[this.props.type](this.state.native, {
      ...config,
      useNativeDriver: true
    }).start();
    Animated[this.props.type](this.state.js, {
      ...config,
      useNativeDriver: false
    }).start();
  };
  render() {
    return (
      <TouchableWithoutFeedback>
        <View>
          <View>
            <Text>Native:</Text>
          </View>
          <View style={style.row}>
            {this.props.children(this.state.native)}
          </View>
          <View style={styles.row}>
            {this.props.children(this.state.js)}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
