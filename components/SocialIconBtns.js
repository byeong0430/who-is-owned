import React, { Component } from 'react';
import { View } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import * as socialIconBtnStyle from '../utils/stylesheets/socialiconbtns';

export default class ProfileHeader extends Component {
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
            style={socialIconBtnStyle.socialIcon}
            iconSize={socialIconBtnStyle.iconSize}
            onPress={() => { console.log('test') }}
          />
        );
      }
    })
  }

  render() {
    return (
      <View style={socialIconBtnStyle.profileFooter}>
        {this.renderSocialIconBtns(this.props.attributes)}
      </View>
    );
  }
}