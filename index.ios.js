import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './application/containers/App';

export default class civisNative extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('civisNative', () => civisNative);
