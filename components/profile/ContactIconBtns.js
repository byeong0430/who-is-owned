import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';
import {Icon} from 'react-native-elements';
import * as ContactIconBtnStyle from '../../utils/stylesheets/contacticonbtns';

export default class ContactIconBtns extends Component {
  render() {
    const { attributes } = this.props;
    return (
      <>
        <View style={ContactIconBtnStyle.iconBox}>
          <Icon
            name='phone-in-talk'
            style={ContactIconBtnStyle.footerIcon}
            iconStyle={{ margin: 9.5 }}
            color='grey'
            onPress={() => (
              // Assume US (+1) for now
              Linking.openURL(`tel:1 ${attributes.phone}`)
            )}
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
            onPress={() => Linking.openURL(website)}
          />
          <Text style={ContactIconBtnStyle.iconTitle}>
            Homepage
          </Text>
        </View>
      </>
    );
  }
}