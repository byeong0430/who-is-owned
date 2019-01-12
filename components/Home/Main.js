import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { Card } from 'react-native-elements';

// Stylesheet
import * as mainStyle from '../../utils/stylesheets/main';
// API
import OpenSecret from '../../utils/api/openSecret';
// Components
import ProfileHeader from '../Profile/ProfileHeader';
import ProfileMain from '../Profile/ProfileMain';
import SocialIconBtns from '../Profile/SocialIconBtns';

// Initiate OpenSecret class (API)
const openSecret = new OpenSecret();

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      legiSummary: null,
      refreshing: false
    };
  }

  getLegiSummary = async () => {
    const legiSummary = await openSecret.getLegislators({
      id: this.props.location.regionCode
    });

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
            key={`card_${index}`}
            containerStyle={mainStyle.card}
          >
            <ProfileHeader
              attributes={item['@attributes']}
              navigation={this.props.navigation}
            />
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
