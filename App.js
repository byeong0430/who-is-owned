import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Constants, Location, Permissions, Font } from 'expo';
const usStateCode = require('./utils/data/usStateCode.json');

// Navigation config
import { RootStack } from './utils/navigation/RootStack';

// You can have an option to add a loading page
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      gps: null,
      location: null,
      errorMessage: null
    };
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

    // Parse longitude and latitude and get current address
    let { longitude, latitude } = gps.coords;

    this.setState({ gps: { latitude, longitude } });

    // Debugging with initial location set to L.A.
    longitude = -118.2437;
    latitude = 34.0522;

    this.updateLoc(latitude, longitude);
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      'fjallaRegular': require('./assets/fonts/FjallaOne-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  updateLoc = async (latitude, longitude) => {
    let location = await Location.reverseGeocodeAsync({ longitude, latitude });

    // Select the first array item
    location = location[0];

    if (location.country === 'United States') {
      location.regionCode = this.getUsRegionCode(location.region, usStateCode);
    }

    this.setState({
      ...this.state,
      gps: { latitude, longitude },
      location
    })
  }

  getUsRegionCode = (state, stateCodeJson) => stateCodeJson[state];

  render() {
    return (
      this.state.fontLoaded ? <RootStack screenProps={{
        gps: this.state.gps,
        updateLoc: this.updateLoc,
        location: this.state.location
      }} /> : null
    );
  }
}