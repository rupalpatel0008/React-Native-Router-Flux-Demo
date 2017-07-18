import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Page1Style } from './Page1Style';

export default class Page1 extends Component {
  constructor(props) {
    super(props);
  }

  renderGroup1() {
    return (
      <View style={Page1Style.group1}>
        <Text style={Page1Style.text}>This is group1</Text>
      </View>
    );
  }

  renderGroup2() {
    return (
      <View style={Page1Style.group2}>
        <Text style={Page1Style.text}>This is group2</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={Page1Style.container}>
        {this.renderGroup1()}
        {this.renderGroup2()}
      </View>
    );
  }
}
