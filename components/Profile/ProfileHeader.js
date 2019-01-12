import React, { Component } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import * as vars from '../../utils/stylesheets/vars';

export default class ProfileHeader extends Component {
  render() {
    const { firstlast, party, first_elected } = this.props.attributes;
    let partyColor = '';
    if (party === 'R') {
      partyColor = vars.redColor;
    } else if (party === 'D') {
      partyColor = vars.darkBlueColor;
    } else {
      partyColor = vars.darkGreyColor;
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
        onPressRightIcon={
          () => this.props.navigation.navigate('Detail')
        }
      />
    );
  }
}