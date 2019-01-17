import { Constants, Permissions } from 'expo';
import React, { Component } from 'react';
import { Platform, Text } from 'react-native';
import { connect } from 'react-redux';
import { handleIniGpsLocUpdate } from '../redux/thunks';

class LoadingBackground extends Component {
  componentWillMount = async () => {
    // Constants.isDevice === true if you're using an emulator
    if (Platform.OS === 'android' && !Constants.isDevice) {
      throw new Error('This will not work on Sketch in an Android emulator. Try it on your device!');
    }

    // Ask for location permission
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      throw new Error('Permission to access location was denied!');
    }

    this.props.handleIniGpsLocUpdate();
  }

  render() {
    return (<Text>Loading...</Text>);
  }
}


const mapDispatchToProps = { handleIniGpsLocUpdate };

export default connect(null, mapDispatchToProps)(LoadingBackground);