import React from 'react';
import { connect } from 'react-redux';
import { Image, Text, ScrollView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Right, Body } from 'native-base';


class Rep extends React.Component {

  displayArticles() {
    const { articles } = this.props.rep;
    return articles.map( (article, i) => {
      const { headline, snippet } = article;
      return(
        <Card key={i}>
          <CardItem>
            <Text>{headline}</Text>
          </CardItem>
          <CardItem>
            <Text>...{snippet}...</Text>
          </CardItem>
       </Card>
      );
    });
  }

  render() {
    const { rep } = this.props;
    const profile_url = rep.profile_large_url.replace("http", "https")
    return(
      <ScrollView>
        <Card >
          <CardItem>
            <Left>
              <Body>
                <Text>{rep.full_name}</Text>
                <Text note>{`U.S. ${rep.title} of ${rep.state}`}</Text>
                <Text>Next Election: {rep.next_election}</Text>
              </Body>
            </Left>
            <Right>
              <Thumbnail source={{uri: profile_url}}/>
            </Right>
          </CardItem>
          <CardItem>
            <Button iconLeft>
              <Icon active name="call"/>
              <Text>{rep.phone}</Text>
            </Button>
          </CardItem>
        </Card>
        {/* TODO: Twitter, website, contact ? */}
        {/* TODO: Bio? */}
        {/* <Card>
          <CardItem content>
            <Text>{rep.bio}</Text>
          </CardItem>
        </Card> */}
        { this.displayArticles() }
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { rep: state.reps.find( r => r.id == props.match.params.id )}
}

export default connect(mapStateToProps)(Rep);
