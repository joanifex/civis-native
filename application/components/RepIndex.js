import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-native';
import { Text, View } from 'react-native';
import { Content, Left, Body, Right, ListItem, Thumbnail, Icon } from 'native-base'


class RepIndex extends React.Component {

  // Add a Header: "Your Reps"
  // Change View Button to be Icon, and / or entire list is clickable
  displayReps = () => {
    const { reps } = this.props
    return reps.map( rep => {
      const profile_url = rep.profile_url.replace("http", "http")
      return(
        <ListItem avatar key={rep.id}>
          <Left>
            <Thumbnail source={{uri: profile_url}} />
          </Left>
          <Body>
            <Text>{rep.full_name}</Text>
            <Text note>{`${rep.title} of ${rep.state}`}</Text>
          </Body>
          <Right>
            <Link to={`/reps/${rep.id}`}>
              <Text>View</Text>
            </Link>
          </Right>
        </ListItem>
      );
    });
  }

  render(){
    return(
      <View>
        { this.displayReps() }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { reps: state.reps }
}

export default connect(mapStateToProps)(RepIndex);
