import * as vars from './vars';

// Header
export const headerContainer = {
  borderTopWidth: 0,
  borderBottomWidth: 5,
  borderColor: vars.lightGreyColor,
  marginTop: 0,
  paddingLeft: 3
};

// Reference
// https://react-native-training.github.io/react-native-elements/docs/0.19.1/lists.html#lefticon
export const headerIcon = {
  name: 'location-city',
  type: 'material',
  style: {
    fontSize: vars.bigIconSize,
    color: vars.blueColor,
    marginLeft: 9
  }
}

export const title = {
  fontFamily: vars.mainFont,
  color: vars.darkGreyColor,
  fontSize: vars.bigFontSize
};

export const subTitle = {
  fontFamily: vars.mainFont,
  color: vars.greyColor,
  fontSize: vars.smallFontSize
};