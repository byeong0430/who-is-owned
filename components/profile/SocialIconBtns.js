import React, { Component } from 'react';
import { Text, View, ScrollView, Linking } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import ContactIconBtns from './ContactIconBtns';
import * as socialIconBtnStyle from '../../utils/stylesheets/socialiconbtns';


export default class ProfileHeader extends Component {
  makeSocialMediaUrl = (smItems, smType) => {
    const socialMediaType = smType.split('_')[0];
    let url = '';

    switch (smType) {
      case 'youtube_url':
        url = smItems[smType];
        break;
      default:
        url = `https://www.${socialMediaType}.com/${smItems[smType]}`
    }

    return url;
  }

  renderSocialIconBtns = item => {
    const socialMedias = ['facebook_id', 'twitter_id', 'youtube_url'];

    return socialMedias.map(socialMedia => {
      const socialMediaType = socialMedia.split('_')[0];
      if (item[socialMedia]) {
        return (
          <View style={socialIconBtnStyle.iconBox}>
            <SocialIcon
              key={socialMediaType}
              raised={true}
              type={socialMediaType}
              style={socialIconBtnStyle.footerIcon}
              iconSize={socialIconBtnStyle.iconSize}
              onPress={() => (
                Linking.openURL(this.makeSocialMediaUrl(item, socialMedia))
              )}
            />
            <Text style={socialIconBtnStyle.iconTitle}>
              {socialMediaType.replace(/^[a-z]/, str => str.toUpperCase())}
            </Text>
          </View>
        );
      }
    })
  }

  render() {
    const { attributes } = this.props;

    return (
      <View style={socialIconBtnStyle.profileFooter}>
        <Text>CONNECT</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {this.renderSocialIconBtns(attributes)}
          <ContactIconBtns attributes={attributes} />
        </ScrollView>
      </View>
    );
  }
}