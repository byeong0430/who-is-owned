import React, { Component } from 'react';
import { ScrollView, Linking } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import * as mainStyle from '../../utils/stylesheets/main';
import * as openSecret from '../../utils/api/openSecret';
import ProfileHeader from '../profile/ProfileHeader';
import ProfileMain from '../profile/ProfileMain';
import SocialIconBtns from '../profile/SocialIconBtns';

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
            iconSize={17}
            onPress={() => { console.log('test') }}
          />
        );
      }
    })
  }

  renderFields = items => {
    if (items) {
      return items.map((item, index) => {
        if (index === 0 || index === 1) {
          return (
            <Card
              key={`view_${index}`}
              containerStyle={{ padding: 0 }}
            >
              <ProfileHeader attributes={item['@attributes']} />
              {/*
              <ListItem
                hideChevron
                leftIcon={{
                  name: 'home'
                }}
                underlayColor='lightgrey'
                title='http://lamalfa.house.gov'
                onPress={() => Linking.openURL('http://lamalfa.house.gov')}
              />
              <ListItem
                hideChevron
                containerStyle={{ borderBottomWidth: 0 }}
                title='First Year Elected'
                subtitle='2012'
              />
              <ListItem
                hideChevron
                containerStyle={{ borderBottomWidth: 0 }}
                title='Born'
                subtitle='1970-07-02 (age 58 years)'
              />
              <ListItem
                hideChevron
                containerStyle={{ margin: 0, borderBottomWidth: 0 }}
                title='Congress Office'
                subtitle='322 Cannon House Office Building'
              /> */}
            </Card>
          );
        }
      });
    }
  }

  render() {
    return (
      <ScrollView style={mainStyle.mainContainer}>
        {this.renderFields(this.state.legiSummary)}
        <Card containerStyle={{ padding: 0 }}>
          <ListItem
            hideChevron
            avatar={
              <Avatar
                small
                rounded
                title='R'
                overlayContainerStyle={{ backgroundColor: 'red' }}
              />
            }
            title='Doug LaMalfa'
            subtitle='First elected in 2012'
          />
          <ListItem
            hideChevron
            leftIcon={{
              name: 'home'
            }}
            underlayColor='lightgrey'
            title='http://lamalfa.house.gov'
            onPress={() => Linking.openURL('http://lamalfa.house.gov')}
          />
          <ListItem
            hideChevron
            containerStyle={{ borderBottomWidth: 0 }}
            title='First Year Elected'
            subtitle='2012'
          />
          <ListItem
            hideChevron
            containerStyle={{ borderBottomWidth: 0 }}
            title='Born'
            subtitle='1970-07-02 (age 58 years)'
          />
          <ListItem
            hideChevron
            containerStyle={{ margin: 0, borderBottomWidth: 0 }}
            title='Congress Office'
            subtitle='322 Cannon House Office Building'
          />
        </Card>
      </ScrollView >
    )
  }
}
