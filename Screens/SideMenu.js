import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import HeaderLeftIcon from '../components/SideMenu/HeaderLeftIcon';
import SearchPlaceList from '../components/SideMenu/SearchPlaceList';
import AlgoliaPlace from '../utils/api/AlgoliaPlace';
import { connect } from 'react-redux';
import * as sidemenuStyle from '../utils/stylesheets/sidemenu';

// algolia places api: https://community.algolia.com/places/api-clients.html
const ap = new AlgoliaPlace();

class SideMenu extends Component {
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
    this.handleLoadPlaces(query);
  }

  handleLoadPlaces = async query => {
    const { gps } = this.props.app;
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
          navigation={this.props.navigation}
          hits={this.state.hits}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({ app: state.app });

export default connect(mapStateToProps)(SideMenu);