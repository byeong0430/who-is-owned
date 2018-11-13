import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as theme from '../utils/theme';
import { Icon } from 'react-native-elements';

export default class Header extends Component {
  makeAddr(loc) {
    let addr = 'Getting your address..';
    if (loc) {
      const { name, street, city, regionCode, country } = loc;
      addr = `${name} ${street}, ${city}, ${regionCode}, ${country}`;
    }
    return addr;
  }

  render() {
    return (
      <View style={theme.headerContainer}>
        <View style={theme.headerLeft}>
          <Icon name='my-location' />
          <Text style={theme.headerLeftText}>Change Location</Text>
        </View>
        <View style={theme.headerRight}>
          <Text>{this.makeAddr(this.props.location)}</Text>
        </View>
      </View>
    )
  }
}
