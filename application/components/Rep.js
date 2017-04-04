import React from 'react';
import { connect } from 'react-redux';
import { Image, ScrollView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Right, Body, Text } from 'native-base';


class Rep extends React.Component {

  displayArticles() {
    const { articles } = this.props.rep;
    return articles.map( (article, i) => {
      const { headline, snippet, web_url: webURL } = article;
      return(
        <Card key={i} >
          <CardItem header onPress={() => this.externalNYT(webURL)}>
            <Icon name="paper" />
            <Text>{headline}</Text>
          </CardItem>
          <CardItem>
            <Text>...{snippet}...</Text>
          </CardItem>
        </Card>
      );
    });
  }

  externalPhone(phone) {
    console.log(phone)
  }

  externalTwitter(url) {
    console.log(url)
  }

  externalNYT(url) {
    console.log(url)
  }

  render() {
    const { rep } = this.props;
    return(
      <ScrollView>
        <Card >
          <CardItem>
            <Left>
              <Body>
                <Text>{rep.full_name}</Text>
                <Text note>{`U.S. ${rep.title} of ${rep.state}`}</Text>
                <Text note>Next Election: {rep.next_election}</Text>
              </Body>
            </Left>
            <Right>
              <Thumbnail source={{uri: rep.profile_large_url}}/>
            </Right>
          </CardItem>
          <CardItem>
            <Button iconLeft light onPress={() => this.externalPhone(rep.phone)}>
              <Icon name="call"/>
              <Text>{rep.phone}</Text>
            </Button>
          </CardItem>
          <CardItem>
            <Button iconLeft light onPress={() => this.externalTwitter(rep.twitter_account)}>
              <Icon name="logo-twitter"/>
              <Text>Twitter</Text>
            </Button>
          </CardItem>
        </Card>
        { this.displayArticles() }
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { rep: state.reps.find( r => r.id == props.match.params.id )}
}

export default connect(mapStateToProps)(Rep);
