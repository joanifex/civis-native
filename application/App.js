import React from 'react';

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

class App extends React.Component {
  render() {
    return (
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
              <H1>Civis App</H1>
            </Body>
            <View>
              <Switch>
                <Route exact path="/" compnent={ZipcodeForm} />
              </Switch>
            </View>
          </Content>

          <Footer>
            <FooterTab>
            </FooterTab>
            <FooterTab>
            </FooterTab>
          </Footer>
        </Container>
      </NativeRouter>
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
