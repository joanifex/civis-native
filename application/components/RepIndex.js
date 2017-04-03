import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-native';
import { Text, View } from 'react-native';
import { Content, Left, Body, Right, List, ListItem, Thumbnail, Icon, Card, CardItem } from 'native-base';
import { Redirect } from 'react-router-native';

class RepIndex extends React.Component {

  linkToRep = (id) => {
    this.props.history.push(`/reps/${id}`);
  }

  displayReps = () => {
    const { reps } = this.props
    return reps.map( rep => {
      return(
        <ListItem
          avatar key={rep.id}
          onPress={ () => this.linkToRep(rep.id) }
        >
          <Thumbnail source={{uri: rep.profile_large_url}} />
          <Body>
            <Text>{rep.full_name}</Text>
            <Text note>{`U.S. ${rep.title} of ${rep.state}`}</Text>
          </Body>
        </ListItem>
      );
    });
  }

  render(){
    return(
      <List>
        { this.displayReps() }
      </List>
    );
  }
}

const mapStateToProps = (state) => {
  return { reps: state.reps }
}

export default withRouter(connect(mapStateToProps)(RepIndex));
