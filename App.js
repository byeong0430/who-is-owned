import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './Screens/Home';
import SideMenu from './Screens/SideMenu';

const RootStack = createStackNavigator(
  {
    Home: Home,
    SideMenu: SideMenu,
  },
  {
    cardStyle: {
      backgroundColor: 'transparent',
      elevation: 0,
      shadowOpacity: 0
    },
    initialRouteName: 'Home',
    navigationOptions: {
      gesturesEnabled: false,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
      headerTransparent: true
    },
    transitionConfig: () => {
      return {
        transitionSpec: {
          duration: 100,
        },
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps

          const thisSceneIndex = scene.index
          const width = layout.initWidth

          // position => [fromIndex, toIndex]
          const translateX = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [width, 0],
          })

          return {
            transform: [{ translateX }]
          }
        },
      }
    }
  }
);

// You can have an option to add a loading page
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}