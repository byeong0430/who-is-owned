import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class ProfileMain extends Component {
  formatDate = strDate => {
    const date = new Date(strDate);
    const noDay = date.toDateString().replace(/^[a-zA-Z]+\s/g, '');
    return noDay.replace(/\d+\s\d+/g, numStr => {
      return numStr.replace(' ', ', ');
    })
  }

  calculateAge = (strDate, delimeter) => {
    const y = parseInt(strDate.split(delimeter));
    const now = new Date().getFullYear();
    return now - y;
  }

  render() {
    const { birthdate, congress_office } = this.props.attributes;

    return (
      <View>
        <ListItem
          hideChevron
          leftIcon={{ name: 'person', color: 'grey' }}
          containerStyle={{ borderBottomWidth: 0 }}
          title='BORN'
          subtitle={`${this.formatDate(birthdate)} (${this.calculateAge(birthdate, '-')} years of age)`}
        />
        <ListItem
          hideChevron
          leftIcon={{ name: 'work', color: 'grey' }}
          title='CONGRESS OFFICE'
          subtitle={congress_office}
        />
      </View>
    );
  }
}