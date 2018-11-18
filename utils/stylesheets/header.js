import * as vars from './vars';

// Header
export const headerContainer = {
  borderTopWidth: 0,
  marginTop: 0,
  marginBottom: 10,
  paddingLeft: 3,
  backgroundColor: vars.themeColors[0]
};

// Reference
// https://react-native-training.github.io/react-native-elements/docs/0.19.1/lists.html#lefticon
export const headerIcon = {
  name: 'location-on',
  type: 'material',
  style: {
    fontSize: vars.bigIconSize,
    borderColor: 'transparent',
    color: 'white',
    marginLeft: 5
  }
}

export const title = {
  fontFamily: vars.mainFont,
  color: 'white',
  fontSize: vars.bigFontSize
};

export const subTitle = {
  fontFamily: vars.mainFont,
  color: 'white',
  fontSize: vars.smallFontSize
};