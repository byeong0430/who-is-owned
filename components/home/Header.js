import React, { Component } from 'react';
import { View } from 'react-native';
import * as headerStyle from '../../utils/stylesheets/header';
import { List, ListItem } from 'react-native-elements';

export default class MainHeader extends Component {
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
        <List containerStyle={headerStyle.headerContainer}>
          <ListItem
            containerStyle={{ borderBottomWidth: 0 }}
            leftIcon={headerStyle.headerIcon}
            leftIconUnderlayColor='transparent'
            title={this.makeAddr(this.props.location).addr1}
            subtitle={this.makeAddr(this.props.location).addr2}
            titleStyle={headerStyle.title}
            subtitleStyle={headerStyle.subTitle}
            chevronColor='white'
            onPressRightIcon={
              () => this.props.navigation.navigate('SideMenu')
            }
          />
        </List>
      </View>
    )
  }
}
