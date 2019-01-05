import React, { Component } from 'react';
import { View } from 'react-native';

import * as homeStyle from '../utils/stylesheets/home';
import MainHeader from '../components/home/MainHeader';
import Main from '../components/home/Main';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { method: 'getLegislators' }
  }

  render() {
    return (
      <View style={homeStyle.mainScreen}>
        <MainHeader
          location={this.props.screenProps.location}
          navigation={this.props.navigation}
        />
        <Main
          method={this.state.method}
          location={this.props.screenProps.location}
        />
      </View>
    );
  }
}
