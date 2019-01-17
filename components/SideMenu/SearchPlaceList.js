import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-elements';
import SearchPlace from './SearchPlace';
import { connect } from 'react-redux';
import * as sidemenuStyle from '../../utils/stylesheets/sidemenu';

class SearchPlaceList extends Component {
  renderPlaces = () => {
    if (this.props.sideMenu.hits) {
      const { hits } = this.props.sideMenu;

      return hits.map((item, key) => (
        <SearchPlace
          navigation={this.props.navigation}
          key={key}
          item={item}
        />
      ));
    }
  }

  render() {
    return (
      <ScrollView style={sidemenuStyle.sideMenuScrollView}>
        <List containerStyle={sidemenuStyle.sideMenuList}>
          {this.renderPlaces()}
        </List>
      </ ScrollView>
    );
  }
}

const mapStateToProps = ({ sideMenu }) => ({ sideMenu });

export default connect(mapStateToProps)(SearchPlaceList);