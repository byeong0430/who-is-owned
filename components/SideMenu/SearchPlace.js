import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as strFunc from '../../utils/functions/strFunctions';
import { handleGpsLocUpdateAndHome } from '../../redux/thunks';
import { connect } from 'react-redux';
import * as sidemenuStyle from '../../utils/stylesheets/sidemenu';

class SearchPlace extends Component {
  render() {
    const { item, navigation } = this.props;
    const { locale_names, county, country } = item;
    const { lat, lng } = item._geoloc;
    const address = strFunc.joinArrayStr([county, country], ', ');

    return (
      <TouchableOpacity
        onPress={() => this.props.handleGpsLocUpdateAndHome(lng, lat, navigation)}
        style={sidemenuStyle.sideMenuResult}
        underlayColor='white'
      >
        <ListItem
          hideChevron
          leftIcon={sidemenuStyle.sideMenuListItemIcon}
          style={sidemenuStyle.sideMenuListItem}
          title={locale_names[0]}
          subtitle={address}
        />
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = { handleGpsLocUpdateAndHome };

export default connect(null, mapDispatchToProps)(SearchPlace);