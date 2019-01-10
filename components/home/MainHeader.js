import React, { Component } from 'react';
import { View } from 'react-native';
import * as headerStyle from '../../utils/stylesheets/mainheader';
import { List, ListItem } from 'react-native-elements';

export default class MainHeader extends Component {
  makeAddr = loc => {
    let addr1 = 'Getting your address..';
    let addr2 = null;

    if (loc) {
      const { name, street, city, regionCode, country } = loc;
      addr1 = this.constructAddr([name, street], ' ');
      addr2 = this.constructAddr([city, regionCode, country], ', ');
    }

    return { addr1, addr2 };
  }

  constructAddr = (array, joiner) => {
    const fullStr = array.filter(item => item !== null && item !== undefined);
    return fullStr.join(joiner);
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
            onPressRightIcon={
              () => this.props.navigation.navigate('SideMenu')
            }
          />
        </List>
      </View>
    )
  }
}
