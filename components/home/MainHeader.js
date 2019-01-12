import React, { Component } from 'react';
import { View } from 'react-native';
import * as headerStyle from '../../utils/stylesheets/mainheader';
import { List, ListItem } from 'react-native-elements';

export default class MainHeader extends Component {
  handleOpenSideMenu = () => this.props.navigation.navigate('SideMenu')

  renderMainAddr = loc => {
    const addr = loc
      ? this.joinAddrStr([loc.name, loc.street], ' ')
      : 'Getting your address..';

    return addr.toUpperCase();
  }

  renderSubAddr = loc => loc
    && this.joinAddrStr([loc.city, loc.regionCode, loc.country], ', ').toUpperCase()

  joinAddrStr = (array, joiner) => {
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
            title={this.renderMainAddr(this.props.location)}
            subtitle={this.renderSubAddr(this.props.location)}
            titleStyle={headerStyle.title}
            subtitleStyle={headerStyle.subTitle}
            onPressRightIcon={this.handleOpenSideMenu}
          />
        </List>
      </View>
    )
  }
}
