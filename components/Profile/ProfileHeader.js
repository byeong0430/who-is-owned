import React, { Component } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import * as vars from '../../utils/stylesheets/vars';

export default class ProfileHeader extends Component {
  handleOpenDetail = () => this.props.navigation.navigate('Detail')

  render() {
    const { firstlast, party, first_elected } = this.props.attributes;
    let partyColor = '';
    switch (party) {
      case 'R':
        partyColor = vars.redColor;
        break;
      case 'D':
        partyColor = vars.blueColor;
        break;
      default:
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
        onPressRightIcon={this.handleOpenDetail}
      />
    );
  }
}