import React, { Component } from 'react';
// Navigation config
import { RootStack } from './utils/navigation/RootStack';

// You can have an option to add a loading page
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}