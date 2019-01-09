import React, { Component } from 'react';
import {
  ScrollView, View, Text, TextInput, TouchableOpacity
} from 'react-native';
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
    const { gps } = this.props.screenProps;
    this.setState({ query });

    let result = await axios.post(
      'https://places-dsn.algolia.net/1/places/query',
      {
        query,
        language: 'en',
        hitsPerPage: 10,
        aroundLatLng: gps
          ? `${gps.latitude},${gps.longitude}`
          : undefined
      }
    );
    result = result.data.hits;
    this.setState({ result });
  }

  updateAndReturnToHome = (lat, lng) => {
    // Update location
    this.props.screenProps.updateLoc(lat, lng);
    this.props.navigation.navigate('Home');
  }

  renderPlaces = () => {
    if (this.state.result) {
      return this.state.result.map((item, index) => {
        const { lat, lng } = item._geoloc;
        const streetName = (item.locale_names) ? item.locale_names[0] : null;
        const city = (item.city) ? item.city[0] : null;
        const county = (item.county) ? item.county[0] : null;
        const country = (item.country) ? item.country : null;
        const address = [streetName, city, county, country].filter(item => item !== null).join(', ');
        return (
          <TouchableOpacity
            onPress={() => { this.updateAndReturnToHome(lat, lng) }}
            style={sidemenuStyle.sideMenuResult}
            key={`test_${index}`}
            underlayColor='white'
          >
            <Text>{`${address}`}</Text>
          </TouchableOpacity>
        );
      })
    }
  }

  render() {
    return (
      <View style={sidemenuStyle.sideMenuContainer}>
        <TextInput
          style={sidemenuStyle.sideMenuInput}
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
