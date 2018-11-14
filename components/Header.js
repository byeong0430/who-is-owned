import React, { Component } from 'react';
import { View } from 'react-native';
import * as theme from '../utils/theme';
import { List, ListItem } from 'react-native-elements';

export default class Header extends Component {
  makeAddr = loc => {
    let addr1 = 'Getting your address..';
    let addr2 = null;

    if (loc) {
      const { name, street, city, regionCode, country } = loc;
      addr1 = `${name} ${street}`;
      addr2 = `${city}, ${regionCode}, ${country}`;
    }

    return { addr1, addr2 };
  }

  render() {
    return (
      <View>
        <List style={theme.headerContainer}>
          <ListItem
            leftIcon={theme.headerIcon}
            title={this.makeAddr(this.props.location).addr1}
            subtitle={this.makeAddr(this.props.location).addr2}
            leftIconOnPress={() => { console.log('test') }}
            hideChevron
          />
        </List>
      </View>
    )
  }
}
