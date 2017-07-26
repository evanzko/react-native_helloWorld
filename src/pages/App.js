import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';

import Login from './Login'
import FancyLogin from './FancyLogin'
import LandingPage from './LandingPage'
import Fetch from './Fetch'
import ForgotPass from './ForgotPass'
import ScrollView from './ScrollView'




class helloWorld extends Component {

  render(){
    const { navigation } = this.props;
    return (
      <FancyLogin />
    );
  }
}

const SimpleApp = DrawerNavigator({
  Home: { screen: FancyLogin },
  // Login: { screen: FancyLogin },
  ForgotPass: { screen: ForgotPass },
  Info: { screen: Fetch },
});

AppRegistry.registerComponent('helloWorld', () => SimpleApp);
