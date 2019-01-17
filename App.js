import { Font } from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk'; // Middleware handler
import rootReducer from './redux/reducers/';
import LoadingBackground from './Screens/LoadingBackground';

// Navigation config
import { RootStack } from './utils/navigation/RootStack';

// Create a store
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

// You can have an option to add a loading page
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      'RobotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
      'RobotoSlab': require('./assets/fonts/RobotoSlab-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Provider store={store}>
        {
          this.state.fontLoaded
            ? <RootStack />
            : <LoadingBackground />
        }
      </Provider>
    );
  }
}