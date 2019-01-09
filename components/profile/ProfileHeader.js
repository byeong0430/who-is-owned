import React, { Component } from 'react';
import { Linking } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import * as vars from '../../utils/stylesheets/vars';

export default class ProfileHeader extends Component {
  render() {
    const { website, firstlast, party, first_elected } = this.props.attributes;
    let partyColor = '';
    if (party === 'R') {
      partyColor = vars.redColor;
    } else if (party === 'D') {
      partyColor = vars.themeColors[2];
    } else {
      partyColor = 'grey';
    }

    return (
      <ListItem
        avatar={
          <Avatar
            small
            rounded
            title={party}
            overlayContainerStyle={{ backgroundColor: partyColor }}
          />
        }
        title={firstlast}
        subtitle={`First elected in ${first_elected}`}
        rightIcon={
          <Icon
            onPress={() => Linking.openURL(website)}
            name={'home'}
            color='grey'
          />
        }
      />
    );
  }
}