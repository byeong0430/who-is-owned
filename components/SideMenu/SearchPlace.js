import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as strFunc from '../../utils/functions/strFunctions';
import { handleGetLocation } from '../../utils/functions/locFunctions';
import appReducer from '../../reducers/reducer';
import { updateLocation } from '../../actions';
import { createStore } from 'redux';
import * as sidemenuStyle from '../../utils/stylesheets/sidemenu';

const store = createStore(appReducer);

export default class SearchPlace extends Component {
  handleUpdateAndOpenHome = async (longitude, latitude) => {
    // Update location
    const location = await handleGetLocation(longitude, latitude);
    store.dispatch(updateLocation(location));

    this.props.navigation.navigate('Home');
  }

  render() {
    const { item } = this.props;
    const { locale_names, city, county, country } = item;
    const { lat, lng } = item._geoloc;
    const address = strFunc.joinArrayStr(
      [locale_names, city, county, country], ', '
    );

    return (
      <TouchableOpacity
        onPress={() => this.handleUpdateAndOpenHome(lng, lat)}
        style={sidemenuStyle.sideMenuResult}
        underlayColor='white'
      >
        <Text>{address}</Text>
      </TouchableOpacity>
    );
  }
}