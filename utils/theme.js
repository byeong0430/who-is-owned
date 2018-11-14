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
  marginBottom: 20
};

// Reference
// https://react-native-training.github.io/react-native-elements/docs/0.19.1/lists.html#lefticon
export const headerIcon = {
  name: 'edit-location',
  type: 'material',
  style: {
    fontSize: 50
  }
}

// Main
export const mainContainer = {
  ...debugBorder
}

export const profileHeader = {
  ...debugBorder,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap'
}

export const profileHeaderLeft = {
  ...debugBorder,
  flex: 1
}

export const profileHeaderRight = {
  ...debugBorder,
  flex: 4
}

export const profileFooter = {
  ...debugBorder,
  flexDirection: 'row'
}