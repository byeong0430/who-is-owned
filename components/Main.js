import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as theme from '../utils/theme';
import * as opS from '../utils/api/openSecret';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    let result = '';

    if (this.props.location) {
      result = await opS.getLegislators(this.props.location.regionCode);
      alert(result);
    }
    this.setState({ result });
  }

  render() {

    return (
      <View style={theme.mainContainer}>
        <Text>result: {this.state.result}</Text>
      </View>
    )
  }
}
