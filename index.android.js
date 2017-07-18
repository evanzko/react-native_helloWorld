import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import App from './src/pages/App'
import Login from './src/pages/Login'
import FancyLogin from './src/pages/FancyLogin'
import LandingPage from './src/pages/LandingPage'
import Fetch from './src/pages/Fetch'
import ForgotPass from './src/pages/ForgotPass'
import ScrollView from './src/pages/ScrollView'



class helloWorld extends Component {

  render(){
    const { navigation } = this.props;
    return (
      // <Fetch />
      <FancyLogin />
    );
  }
}

const SimpleApp = DrawerNavigator({
  Home: { screen: ScrollView },
  // Login: { screen: FancyLogin },
  ForgotPass: { screen: ForgotPass },
  Info: { screen: Fetch },
});

AppRegistry.registerComponent('helloWorld', () => SimpleApp);
// AppRegistry.registerComponent('helloWorld', () => helloWorld);
