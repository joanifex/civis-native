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
import Home from '../components/Home';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Container>
            <Header>
              <Left>
                <Button transparent>
                  <Icon name="menu" />
                </Button>
              </Left>
              <Body>
                <Title>Civis</Title>
              </Body>
              <Right />
            </Header>
            <Content padder>
              <Body>
                <Home />
              </Body>
              <View>
                <Switch>
                </Switch>
              </View>
            </Content>

            <Footer>
              <FooterTab>
              </FooterTab>
            </Footer>
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
