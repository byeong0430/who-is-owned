import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import * as mainStyle from '../utils/stylesheets/main';
import * as openSecret from '../utils/api/openSecret';
import ProfileHeader from './ProfileHeader';
import SocialIconBtns from './SocialIconBtns';

const examples = {
  'legislator': [
    {
      "@attributes": {
        "bioguide_id": "L000578",
        "birthdate": "1960-07-02",
        "cid": "N00033987",
        "comments": "",
        "congress_office": "322 Cannon House Office Building",
        "exit_code": "0",
        "facebook_id": "RepLaMalfa",
        "fax": "530-534-7800",
        "feccandid": "H2CA02142",
        "first_elected": "2012",
        "firstlast": "Doug LaMalfa",
        "gender": "M",
        "lastname": "LAMALFA",
        "office": "CA01",
        "party": "R",
        "phone": "202-225-3076",
        "twitter_id": "RepLaMalfa",
        "votesmart_id": "29713",
        "webform": "https://lamalfa.house.gov/contact/email-me",
        "website": "http://lamalfa.house.gov",
        "youtube_url": "https://youtube.com/RepLaMalfa"
      }
    },
    {
      "@attributes": {
        "bioguide_id": "H001068",
        "birthdate": "1964-02-18",
        "cid": "N00033030",
        "comments": "",
        "congress_office": "1406 Longworth House Office Building",
        "exit_code": "0",
        "facebook_id": "RepHuffman",
        "fax": "202-225-5163",
        "feccandid": "H2CA06259",
        "first_elected": "2012",
        "firstlast": "Jared Huffman",
        "gender": "M",
        "lastname": "HUFFMAN",
        "office": "CA02",
        "party": "D",
        "phone": "202-225-5161",
        "twitter_id": "RepHuffman",
        "votesmart_id": "59849",
        "webform": "https://huffman.house.gov/contact/email-me",
        "website": "http://huffman.house.gov",
        "youtube_url": "https://youtube.com/rephuffman"
      }
    }
  ]
};

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResults: null
    };
  }

  componentDidUpdate = async prevProps => {
    const { method, location } = this.props;
    if (location &&
      (this.props.location !== prevProps.location) ||
      (this.props.method !== prevProps.method)) {
      const apiResults = await openSecret.fetchData({
        verb: 'GET',
        method,
        id: location.regionCode
      });
      this.setState({ apiResults });
    }
  }

  renderSocialIconBtns = item => {
    const socialMedias = ['facebook_id', 'twitter_id', 'youtube_url'];

    return socialMedias.map(socialMedia => {
      const socialMediaType = socialMedia.split('_')[0];
      if (item[socialMedia]) {
        return (
          <SocialIcon
            key={socialMediaType}
            raised={true}
            type={socialMediaType}
            style={mainStyle.socialIcon}
            onPress={() => { console.log('test') }}
          />
        );
      }
    })
  }

  renderFields = (key, items) => {
    if (items) {
      return items[key].map((item, index) => {
        if (index === 0 || index === 1) {
          console.log(item['@attributes']);
          return (
            <View key={`view_${index}`} style={mainStyle.profileContainer}>
              {/* Header */}
              <ProfileHeader attributes={item['@attributes']} />
              {/* Main */}
              <View>
                <Text>test1</Text>
              </View>
              {/* Footer */}
              <SocialIconBtns attributes={item['@attributes']} />
            </View>
          );
        }
      });
    }
  }

  render() {
    return (
      <ScrollView style={mainStyle.mainContainer}>
        {/* {this.renderFields('legislator', this.state.apiResults)} */}
        {this.renderFields('legislator', examples)}
      </ScrollView>
    )
  }
}
