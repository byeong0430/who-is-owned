import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SearchPlace from './SearchPlace';
import { connect } from 'react-redux';

class SearchPlaceList extends Component {
  renderPlaces = () => {
    if (this.props.sideMenu.hits) {
      const { hits } = this.props.sideMenu;
      return hits.map((item, key) => {
        if (key < 5) {
          <SearchPlace
            navigation={this.props.navigation}
            key={key}
            item={item}
          />
        }
      });
    }
  }

  render() {
    return (
      <ScrollView>
        {this.renderPlaces()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({ sideMenu: state.sideMenu });

export default connect(mapStateToProps)(SearchPlaceList);