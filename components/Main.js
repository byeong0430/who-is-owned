import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import * as theme from '../utils/theme';
import * as opS from '../utils/api/openSecret';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResults: null
    };
  }

  componentDidUpdate = async prevProps => {
    const { method, location } = this.props;
    if (location &&
      (this.props.location !== prevProps.location) ||
      (this.props.method !== prevProps.method)) {
      const apiResults = await opS.fetchData({
        verb: 'GET',
        method,
        id: location.regionCode
      });
      this.setState({ apiResults });
    }
  }

  renderFields(items) {
    if (items) {
      return items.legislator.map((item, index) => {
        return(
          <Text key={`item_${index}`}>
            {item['@attributes'].firstlast}
          </Text>
        );
      })
    }
  }

  render() {
    return (
      <View style={theme.mainContainer}>
        <ScrollView>
          {this.renderFields(this.state.apiResults)}
        </ScrollView>
      </View>
    )
  }
}
