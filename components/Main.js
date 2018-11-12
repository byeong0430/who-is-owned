import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as theme from '../utils/theme';

export default class Main extends Component {
  render() {
    return (
      <View style={theme.mainContainer}>
        <Text>test</Text>
      </View>
    )
  }
}
