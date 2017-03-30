import React from 'react';
import { connect } from "react-redux";

import {
  Container,
  Content,
  Header,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Title
} from 'native-base';

import { Text, View, StyleSheet } from 'react-native';
import {
  NativeRouter,
  Route,
  Link,
  Switch,
} from 'react-router-native';

import { Provider } from 'react-redux'
import store, { history } from '../store';

// Components
import HeaderBody from '../components/HeaderBody';
import AddressForm from '../components/AddressForm';
import RepIndex from '../components/RepIndex';
import Rep from '../components/Rep';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Container>
            <HeaderBody />
            <Content padder>
              <View>
                <Switch>
                  <Route exact path="/" component={AddressForm}/>
                  <Route exact path="/reps" component={RepIndex}/>
                  <Route path="/reps/:id" component={Rep}/>
                </Switch>
              </View>
            </Content>
          </Container>
        </NativeRouter>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  link: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  }
});

export default App;
