import React, { Component } from 'react';
import { View } from 'react-native';

import * as homeStyle from '../utils/stylesheets/home';
import MainHeader from '../components/Home/MainHeader';
import Main from '../components/Home/Main';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={homeStyle.mainScreen}>
        <MainHeader
          navigation={this.props.navigation}
        />
        <Main
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
