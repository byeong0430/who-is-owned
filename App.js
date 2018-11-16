import React, { Component } from 'react';
import { Font } from 'expo';

// Navigation config
import { RootStack } from './utils/navigation/RootStack';

// You can have an option to add a loading page
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      'slabo': require('./assets/fonts/Merriweather-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      this.state.fontLoaded ? <RootStack /> : null
    );
  }
}