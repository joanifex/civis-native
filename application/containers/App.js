import React from 'react';
import { connect } from "react-redux";

import {
  Container,
  Content,
  Header,
  Footer,
  FooterTab,
  Title,
  H1,
  Button,
  Left,
  Right,
  Body,
  Icon
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
import AddressForm from '../components/AddressForm';
import RepIndex from '../components/RepIndex';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Container>
            <Header>
              <Left>
              </Left>
              <Body>
                <Title>CIVIS</Title>
              </Body>
              <Right />
            </Header>
            <Content padder>
              <View>
                <Switch>
                  <Route exact path="/" component={AddressForm}/>
                  <Route exact path="reps" component={RepIndex}/>
                  {/* <Route exact path="reps/:id" component={Rep}/> */}
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
