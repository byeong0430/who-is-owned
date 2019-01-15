import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SearchPlace from './SearchPlace';

export default class SearchPlaceList extends Component {
  renderPlaces = () => {
    if (this.props.hits) {
      return this.props.hits.map((item, key) => (
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
      <ScrollView>
        {this.renderPlaces()}
      </ScrollView>
    );
  }
}