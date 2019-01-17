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
import { getLegislatorSummary } from '../../redux/thunks';

class Main extends Component {
  componentDidUpdate = async prevProps => {
    const { locDetail, getLegislatorSummary } = this.props;

    if (locDetail.location &&
      (locDetail.location !== prevProps.location)) {
      getLegislatorSummary(locDetail.location.regionCode);
    }
  }

  renderFields = items => {
    if (items) {
      return items.map((item, index) => {
        if (index < 4) {
          const attributes = item['@attributes'];

          return (
            <Card
              key={`card_${index}`}
              containerStyle={mainStyle.card}
            >
              <ProfileHeader
                attributes={attributes}
                navigation={this.props.navigation}
              />
              <ProfileMain attributes={attributes} />
              <SocialIconBtns attributes={attributes} />
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

const mapStateToProps = ({ locDetail, openSecret }) => ({
  locDetail,
  openSecret
});

const mapDispatchToProps = { getLegislatorSummary };

export default connect(mapStateToProps, mapDispatchToProps)(Main);