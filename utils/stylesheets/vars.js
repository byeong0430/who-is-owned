import { Constants } from 'expo';
import { Platform } from 'react-native';

// 5 levels of blue colours from lightest to darkest
// Reference: http://paletton.com/#uid=13F0u0kvJEBjEKwpjGCE2tqFFmS
export const themeColors = ['#5D8CD2','#3872C8','#135AC2','#0A449B','#073578'];
export const redColor = '#C02F1D';
export const mainFont = 'fjallaRegular';
export const bigIconSize = 40;
export const mediumIconSize = 30;
export const smallIconSize = 22;
export const bigFontSize = 22;
export const mediumFontSize = 18;
export const smallFontSize = 13;

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