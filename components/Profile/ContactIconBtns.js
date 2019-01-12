import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import * as ContactIconBtnStyle from '../../utils/stylesheets/contacticonbtns';

export default class ContactIconBtns extends Component {
  handleOpenCall = () => Linking.openURL(`tel:1 ${this.props.attributes.phone}`);

  handleOpenHomepage = () => Linking.openURL(this.props.attributes.website);

  render() {
    return (
      <>
        <View style={ContactIconBtnStyle.iconBox}>
          <Icon
            name='phone-in-talk'
            style={ContactIconBtnStyle.footerIcon}
            iconStyle={{ margin: 9.5 }}
            color='grey'
            // Assume US (+1) for now
            onPress={this.handleOpenCall}
          />
          <Text style={ContactIconBtnStyle.iconTitle}>
            Call
          </Text>
        </View>

        <View style={ContactIconBtnStyle.iconBox}>
          <Icon
            name='home'
            style={ContactIconBtnStyle.footerIcon}
            iconStyle={{ margin: 9.5 }}
            color='grey'
            onPress={this.handleOpenHomepage}
          />
          <Text style={ContactIconBtnStyle.iconTitle}>
            Homepage
          </Text>
        </View>
      </>
    );
  }
}