import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import * as theme from '../utils/theme';

import Header from '../components/Header';
import Main from '../components/Main';


export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      location: null,
      errorMessage: null
    }
  }

  render() {
    return (
      <View style={theme.mainScreen}>
        <Header />
        <Main />
      </View>
    );
  }
}