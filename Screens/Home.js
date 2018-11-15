import React, { Component } from 'react';
import { Platform, View }
  from 'react-native';
import { Constants, Location, Permissions }
  from 'expo';
import * as theme from '../utils/theme';
import Header from '../components/Header';
import Main from '../components/Main';

const usStateCode = require('../utils/json/usStateCode.json');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gps: null,
      location: null,
      errorMessage: null,
      method: 'getLegislators'
    }
  }

  componentWillMount() {
    // Constants.isDevice === true if you're using an emulator
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'This will not work on Sketch in an Android emulator. Try it on your device!'
      })
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    // Ask for location permission
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied!'
      })
    }

    // Get GPS info
    const gps = await Location.getCurrentPositionAsync({});
    this.setState({ gps });

    // Parse longitude and latitude and get current address
    const { longitude, latitude } = gps.coords;
    // Debugging with L.A.
    let location = await Location.reverseGeocodeAsync({
      longitude: -118.2437,
      latitude: 34.0522
    })
    // Select the first array item
    location = location[0];
    if (location.country == 'United States') {
      location.regionCode = this.getUsRegionCode(location.region, usStateCode);
    }
    this.setState({ location });
  }

  getUsRegionCode = (state, stateCodeJson) => stateCodeJson[state];

  makeAddr = loc => {
    let addr1 = 'Getting your address..';
    let addr2 = null;

    if (loc) {
      const { name, street, city, regionCode, country } = loc;
      addr1 = `${name} ${street}`;
      addr2 = `${city}, ${regionCode}, ${country}`;
    }

    return { addr1, addr2 };
  }

  render() {
    return (
      <View style={theme.mainScreen}>
        <Header
          location={this.state.location}
          navigation={this.props.navigation}
        />
        <Main
          method={this.state.method}
          location={this.state.location}
        />
      </View>
    );
  }
}
