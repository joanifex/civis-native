import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './application/App';

export default class civisNative extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('civisNative', () => civisNative);
