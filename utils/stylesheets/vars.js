import { Constants } from 'expo';
import { Platform } from 'react-native';

export const paraFont = 'slabo';

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