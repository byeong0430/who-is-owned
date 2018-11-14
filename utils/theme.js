import { Constants } from 'expo';
import { Platform } from 'react-native';

export const debugBorder = {
  borderColor: 'blue',
  borderWidth: 1
}

export const modal = Platform.select({
  android: {
    // The modal goes up until the status bar on Android devices
    marginTop: -Constants.statusBarHeight
  }
});

// Main screen
export const mainScreen = {
  ...debugBorder,
  margin: 15,
  // Extra margin on top
  marginTop: 24,
  // Fill up the whole screen
  flex: 1,
  flexDirection: 'column'
};

// Header
export const headerContainer = {
  ...debugBorder,
  // Shrink to fit content
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap'
};
export const headerLeft = {
  ...debugBorder,
  flex: 1,
  flexDirection: 'column'
}

export const headerLeftText = {
  textAlign: 'center'
}

export const headerRight = {
  ...debugBorder,
  flex: 4
}

// Main
export const mainContainer = {
  ...debugBorder
}