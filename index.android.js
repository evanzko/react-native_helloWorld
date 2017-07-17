import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import App from './src/pages/App'
import Login from './src/pages/Login'
import Fetch from './src/pages/Fetch'
import ForgotPass from './src/pages/ForgotPass'



class helloWorld extends Component {

  render(){
    const { navigation } = this.props;
    return (
      // <Fetch />
      <App />
    );
  }
}

const SimpleApp = DrawerNavigator({
  App: { screen: App },
  Login: { screen: Login },
  ForgotPass: { screen: ForgotPass },
  Info: { screen: Fetch },
});

AppRegistry.registerComponent('helloWorld', () => SimpleApp);
// AppRegistry.registerComponent('helloWorld', () => helloWorld);
