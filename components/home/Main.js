import React, { Component } from 'react';
import { ScrollView } from 'react-native';
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
      legiSummary: null
    };
  }

  componentDidUpdate = async prevProps => {
    const { method, location } = this.props;
    if (location &&
      (this.props.location !== prevProps.location) ||
      (this.props.method !== prevProps.method)) {

      let legiSummary = await openSecret.fetchData({
        verb: 'GET',
        method,
        id: location.regionCode
      });
      legiSummary = legiSummary.legislator;

      this.setState({ legiSummary });
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
      <ScrollView style={mainStyle.mainContainer}>
        {this.renderFields(this.state.legiSummary)}
      </ScrollView>
    )
  }
}
