import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

// Stylesheet
import * as mainStyle from '../../utils/stylesheets/main';
// Components
import ProfileHeader from '../Profile/ProfileHeader';
import ProfileMain from '../Profile/ProfileMain';
import SocialIconBtns from '../Profile/SocialIconBtns';
import { handleGetLegislators } from '../../redux/thunks';

class Main extends Component {
  componentDidUpdate = async prevProps => {
    const { location } = this.props.locDetail;

    if (location && (location !== prevProps.location)) {
      this.props.getLegislatorSummary(location.regionCode);
    }
  }

  renderFields = items => {
    if (items) {
      return items.map((item, index) => {
        if (index < 4) {
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
        }
      });
    }
  }

  render() {
    return (
      <ScrollView>
        {this.renderFields(this.props.openSecret.legislatorSummary)}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  locDetail: state.locDetail,
  openSecret: state.openSecret
});

const mapDispatchToProps = dispatch => ({
  getLegislatorSummary: regionCode => { dispatch(handleGetLegislators(regionCode)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);