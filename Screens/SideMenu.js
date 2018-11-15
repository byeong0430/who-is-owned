import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import * as theme from '../utils/theme';

export default class SideMenu extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (<Text>Back</Text>),
      headerLeft: (
        <Icon
          iconStyle={theme.sideMenuBackBtn}
          name='arrow-back'
          onPress={() => navigation.navigate('Home')}
        />
      )
    };
  };

  render() {
    return (
      <View style={theme.sideMenuContainer}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}