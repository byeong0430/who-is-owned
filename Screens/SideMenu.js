import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import * as sidemenuStyle from '../utils/stylesheets/sidemenu';
import axios from 'axios';

// algolia places api: https://community.algolia.com/places/api-clients.html

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      result: null
    };
  }

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

  loadPlaces = async query => {
    this.setState({ query });
    let result = await axios.post(
      'https://places-dsn.algolia.net/1/places/query',
      {
        query,
        language: 'en',
        hitsPerPage: 10
      }
    );
    result = result.data.hits;
    this.setState({ result });
  }

  renderPlaces = () => {
    if (this.state.result) {
      return this.state.result.map((item, index) => {
        const streetName = (item.locale_names) ? item.locale_names[0] : null;
        const city = (item.city) ? item.city[0] : null;
        const county = (item.county) ? item.county[0] : null;
        const country = (item.country) ? item.country : null;
        const address = [streetName, city, county, country].filter(item => item !== null).join(', ');
        return (
          <Text key={`test_${index}`}>{`${address}`}</Text>
        );
      })
    }
  }

  render() {
    return (
      <View style={sidemenuStyle.sideMenuContainer}>
        <TextInput
          style={{ width: 60, height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={query => this.loadPlaces(query)}
          value={this.state.query}
        />
        <ScrollView>
          {this.renderPlaces()}
        </ScrollView>
      </View>
    );
  }
}
