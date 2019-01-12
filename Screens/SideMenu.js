import React, { Component } from 'react';
import {
  ScrollView, View, Text, TextInput, TouchableOpacity
} from 'react-native';
import * as sidemenuStyle from '../utils/stylesheets/sidemenu';
import * as strFunc from '../utils/functions/strFunctions';
import HeaderLeftIcon from '../components/SideMenu/HeaderLeftIcon';
import AlgoliaPlace from '../utils/api/AlgoliaPlace';

// algolia places api: https://community.algolia.com/places/api-clients.html
const ap = new AlgoliaPlace();

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      hits: null
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (<Text>Back</Text>),
      headerLeft: (<HeaderLeftIcon navigation={navigation} />)
    };
  };

  handleChangeQuery = query => {
    this.setState({ query });
    this.loadPlaces(query);
  }

  loadPlaces = async query => {
    const { gps } = this.props.screenProps;
    let hits = await ap.getPlaces({
      query,
      aroundLatLng: gps
        ? `${gps.latitude},${gps.longitude}`
        : undefined
    });

    this.setState({ hits });
  }

  handleUpdateAndOpenHome = (lat, lng) => {
    // Update location
    this.props.screenProps.updateLoc(lat, lng);
    this.props.navigation.navigate('Home');
  }

  renderPlaces = () => {
    if (this.state.hits) {
      return this.state.hits.map((item, index) => {
        const { lat, lng } = item._geoloc;
        const { locale_names, city, county, country } = item;
        const address = strFunc.joinArrayStr(
          [locale_names, city, county, country], ', '
        );

        return (
          <TouchableOpacity
            onPress={() => this.handleUpdateAndOpenHome(lat, lng)}
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
          onChangeText={query => this.handleChangeQuery(query)}
          value={this.state.query}
        />
        <ScrollView>
          {this.renderPlaces()}
        </ScrollView>
      </View>
    );
  }
}
