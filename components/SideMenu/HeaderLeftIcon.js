import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import * as sidemenuStyle from '../../utils/stylesheets/sidemenu';

export default class HeaderLeft extends Component {
  render() {
    return (
      <Icon
        iconStyle={sidemenuStyle.sideMenuBackBtn}
        name='keyboard-arrow-left'
        onPress={() => this.props.navigation.navigate('Home')}
      />
    );
  }
}