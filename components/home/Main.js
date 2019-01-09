import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { Card } from 'react-native-elements';
import * as mainStyle from '../../utils/stylesheets/main';
import * as openSecret from '../../utils/api/openSecret';
import ProfileHeader from '../profile/ProfileHeader';
import ProfileMain from '../profile/ProfileMain';
import SocialIconBtns from '../profile/SocialIconBtns';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      legiSummary: null,
      refreshing: false
    };
  }

  getLegiSummary = async () => {
    const { location, method } = this.props;
    let legiSummary = await openSecret.fetchData({
      verb: 'GET',
      method,
      id: location.regionCode
    });
    legiSummary = legiSummary.legislator;

    this.setState({ legiSummary });
  }

  _onRefresh = async () => {
    this.setState({ refreshing: true })
    this.getLegiSummary();
    this.setState({ refreshing: false })
  }

  componentDidUpdate = async prevProps => {
    if (this.props.location &&
      (this.props.location !== prevProps.location) ||
      (this.props.method !== prevProps.method)) {
      this.getLegiSummary();
    }
  }

  renderFields = items => {
    if (items) {
      return items.map((item, index) => {
        return (
          <Card
            key={`view_${index}`}
            containerStyle={{ padding: 0 }}
          >
            <ProfileHeader attributes={item['@attributes']} />
            <ProfileMain attributes={item['@attributes']} />
            <SocialIconBtns attributes={item['@attributes']} />
          </Card>
        );
      });
    }
  }

  render() {
    return (
      <ScrollView
        style={mainStyle.mainContainer}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        {this.renderFields(this.state.legiSummary)}
      </ScrollView>
    )
  }
}
