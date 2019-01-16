import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

// Stylesheet
import * as mainStyle from '../../utils/stylesheets/main';
// API
import OpenSecret from '../../utils/api/OpenSecret';
// Components
import ProfileHeader from '../Profile/ProfileHeader';
import ProfileMain from '../Profile/ProfileMain';
import SocialIconBtns from '../Profile/SocialIconBtns';

// Initiate OpenSecret class (API)
const openSecret = new OpenSecret();

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      legiSummary: null
    };
  }

  getLegiSummary = async () => {
    const { regionCode } = this.props.locDetail.location;
    const legiSummary = await openSecret.getLegislators({
      id: regionCode
    });

    this.setState({ legiSummary });
  }

  componentDidUpdate = async prevProps => {
    const { location } = this.props.locDetail;
    if (location && (location !== prevProps.location) ||
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
      <ScrollView>
        {this.renderFields(this.state.legiSummary)}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({ locDetail: state.locDetail });

export default connect(mapStateToProps)(Main);