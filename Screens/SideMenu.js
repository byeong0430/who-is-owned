import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import * as sidemenuStyle from '../utils/stylesheets/sidemenu';
// algolia places api: https://community.algolia.com/places/api-clients.html

export default class SideMenu extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (<Text>Back</Text>),
      headerLeft: (
        <Icon
          iconStyle={sidemenuStyle.sideMenuBackBtn}
          name='keyboard-arrow-left'
          onPress={() => navigation.navigate('Home')}
        />
      )
    };
  };

  render() {
    return (
      <View style={sidemenuStyle.sideMenuContainer}>

      </View>
    );
  }
}
