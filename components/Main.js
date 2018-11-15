import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import * as theme from '../utils/theme';
import * as openSecret from '../utils/api/openSecret';
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

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
      const apiResults = await openSecret.fetchData({
        verb: 'GET',
        method,
        id: location.regionCode
      });
      this.setState({ apiResults });
    }
  }

  renderFields = (key, items) => {
    if (items) {
      return items[key].map((item, index) => {
        if (index === 0) {
          const { firstlast, party, first_elected } = item['@attributes'];
          console.log(item['@attributes']);
          const profileHeader = `${firstlast} (${party}) - first elected in ${first_elected}`;
          return (
            <View key={`view_${index}`} style={theme.profileContainer}>
              {/* Header */}
              <View style={theme.profileHeader}>
                <View style={theme.profileHeaderLeft}>
                  <Icon name='tag-faces' />
                </View>
                <View style={theme.profileHeaderRight}>
                  <Text>{profileHeader}</Text>
                </View>
              </View>
              {/* Main */}
              <View>
                <Text>test1</Text>
              </View>
              {/* Footer */}
              <View style={theme.profileFooter}>
                <Ionicons
                  name="logo-facebook"
                  size={32} color="blue"
                />
                <Ionicons
                  name="logo-twitter"
                  size={32} color="blue"
                />
                <Ionicons
                  name="logo-youtube"
                  size={32} color='red'
                />
              </View>
            </View>
          );
        }
      });
    }
  }

  render() {
    return (
      <ScrollView style={theme.mainContainer}>
        {this.renderFields('legislator', this.state.apiResults)}
      </ScrollView>
    )
  }
}
