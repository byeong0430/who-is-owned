import { createStackNavigator } from 'react-navigation';
import Home from '../../Screens/Home';
import SideMenu from '../../Screens/SideMenu';

// Reference: https://medium.com/async-la/custom-transitions-in-react-navigation-2f759408a053

export const RootStack = createStackNavigator(
  {
    Home: Home,
    SideMenu: SideMenu
  },
  {
    initialRouteName: 'Home',
    cardStyle: {
      backgroundColor: 'transparent',
      elevation: 0,
      shadowOpacity: 0
    },
    navigationOptions: {
      gesturesEnabled: false,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
      headerTransparent: true
    },
    // Animated transition between screens
    transitionConfig: () => {
      return {
        transitionSpec: {
          duration: 200,
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
        }
      }
    }
  }
);