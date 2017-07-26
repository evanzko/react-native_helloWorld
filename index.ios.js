import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './src/pages/App';

export default class helloWorld extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('helloWorld', () => helloWorld);
