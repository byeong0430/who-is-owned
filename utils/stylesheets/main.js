import * as vars from './vars';

// Main
export const mainContainer = {
  ...vars.debugBorder
}

export const profileHeader = {
  ...vars.debugBorder,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap'
}

export const profileHeaderLeft = {
  ...vars.debugBorder,
  flex: 1
}

export const profileHeaderRight = {
  ...vars.debugBorder,
  flex: 4
}

export const profileHederRightText = {
  fontSize: 15,
  fontFamily: vars.paraFont
}


export const profileFooter = {
  ...vars.debugBorder,
  flexDirection: 'row'
}

export const socialIcon = {
  width: 27,
  height: 27
}