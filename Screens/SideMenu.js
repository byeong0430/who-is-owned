import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import HeaderLeftIcon from '../components/SideMenu/HeaderLeftIcon';
import SearchPlaceList from '../components/SideMenu/SearchPlaceList';
import AlgoliaPlace from '../utils/api/AlgoliaPlace';
import * as sidemenuStyle from '../utils/stylesheets/sidemenu';

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

  render() {
    return (
      <View style={sidemenuStyle.sideMenuContainer}>
        <TextInput
          style={sidemenuStyle.sideMenuInput}
          onChangeText={query => this.handleChangeQuery(query)}
          value={this.state.query}
        />
        <SearchPlaceList
          updateLoc={this.props.screenProps.updateLoc}
          navigation={this.props.navigation}
          hits={this.state.hits}
        />
      </View>
    );
  }
}
