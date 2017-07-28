import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import Login from './pages/Login'
import FancyLogin from './pages/FancyLogin'




export default class helloWorld extends Component {

  render(){
    return (
      <FancyLogin />
    );
  }
}
