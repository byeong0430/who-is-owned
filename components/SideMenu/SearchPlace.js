import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as strFunc from '../../utils/functions/strFunctions';
import { handleGpsLocUpdateAndHome } from '../../redux/thunks';
import { connect } from 'react-redux';
import * as sidemenuStyle from '../../utils/stylesheets/sidemenu';

class SearchPlace extends Component {
  render() {
    const { item, navigation } = this.props;
    const { locale_names, city, county, country } = item;
    const { lat, lng } = item._geoloc;
    const address = strFunc.joinArrayStr(
      [locale_names, city, county, country], ', '
    );

    return (
      <TouchableOpacity
        onPress={() => this.props.handleUpdateAndOpenHome(lng, lat, navigation)}
        style={sidemenuStyle.sideMenuResult}
        underlayColor='white'
      >
        <Text>{address}</Text>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleUpdateAndOpenHome: (longitude, latitude, navigation) => {
    dispatch(handleGpsLocUpdateAndHome(longitude, latitude, navigation));
  }
})

export default connect(null, mapDispatchToProps)(SearchPlace);