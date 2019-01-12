import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as strFunc from '../../utils/functions/strFunctions';
import * as sidemenuStyle from '../../utils/stylesheets/sidemenu';

export default class SearchPlace extends Component {
  handleUpdateAndOpenHome = (lat, lng) => {
    // Update location
    this.props.updateLoc(lat, lng);
    this.props.navigation.navigate('Home');
  }

  render() {
    const {
      locale_names, city, county, country,
      _geoloc: { lat, lng }
    } = this.props.item;
    const address = strFunc.joinArrayStr(
      [locale_names, city, county, country], ', '
    );

    return (
      <TouchableOpacity
        onPress={() => this.handleUpdateAndOpenHome(lat, lng)}
        style={sidemenuStyle.sideMenuResult}
        underlayColor='white'
      >
        <Text>{address}</Text>
      </TouchableOpacity>
    );
  }
}