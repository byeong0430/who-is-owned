import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as theme from '../utils/theme';
import { Icon } from 'react-native-elements';

export default class Header extends Component {
  render() {
    return (
      <View style={theme.headerContainer}>
        <View style={theme.headerLeft}>
          <Icon name='my-location' />
          <Text style={theme.headerLeftText}>Change Location</Text>
        </View>
        <View style={theme.headerRight}>
          <Text>1106 Pacific St.</Text>
        </View>
      </View>
    )
  }
}
