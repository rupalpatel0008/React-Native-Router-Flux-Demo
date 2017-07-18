import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { HomeStyle } from './HomeStyle';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  goToPage1() {
    Actions.Page1();
  }

  goToPage2() {
    Actions.Page2();
  }

  renderGroup1() {
    return (
      <View style={HomeStyle.group1}>
        <Text
          style={HomeStyle.text}
          onPress={() => {this.goToPage1()}}
        >
          Go To Page 1
        </Text>
      </View>
    );
  }

  renderGroup2() {
    return (
      <View style={HomeStyle.group2}>
        <Text
          style={HomeStyle.text}
          onPress={() => {this.goToPage2()}}
        >
          Go To Page 2
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={HomeStyle.container}>
        {this.renderGroup1()}
        {this.renderGroup2()}
      </View>
    );
  }
}
