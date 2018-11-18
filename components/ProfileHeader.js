import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

import * as profileHeaderStyle from '../utils/stylesheets/profileheader';
import * as vars from '../utils/stylesheets/vars';

export default class ProfileHeader extends Component {
  render() {
    const { firstlast, party, first_elected } = this.props.attributes;
    let partyColor = '';
    if (party === 'R') {
      partyColor = vars.redColor;
    } else if (party === 'D') {
      partyColor = vars.themeColors[2];
    } else {
      partyColor = 'grey';
    }

    return (
      <View style={profileHeaderStyle.profileHeader}>
        <View style={profileHeaderStyle.avatarContainer}>
          <Avatar
            medium
            rounded
            title={party}
            overlayContainerStyle={{ backgroundColor: partyColor }}
          />
        </View>
        <View style={profileHeaderStyle.textContainer}>
          <Text style={profileHeaderStyle.headerRightText}>
            <Text>{firstlast}</Text>
            <Text style={{
              fontStyle: 'italic',
              color: 'grey'
            }}>
              - first elected in {first_elected}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}