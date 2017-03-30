import React from 'react';
import { connect } from 'react-redux';

import { Text, View } from 'react-native';
import { Content, Left, Body, Right, ListItem, Thumbnail, Icon } from 'native-base'

const displayReps = (reps) => {
  return reps.map( (rep) => {
    return(
      <ListItem avatar key={rep.id}>
        <Left>
            <Icon active name='ios-person' />
        </Left>
        <Body>
            <Text>{rep.full_name}</Text>
            <Text note>{`${rep.title} of ${rep.state}`}</Text>
        </Body>
    </ListItem>
    );
  });
}

const RepIndex = ({reps}) => (
  <View>
    <Text>RepIndex</Text>
    { displayReps(reps) }
  </View>
)

const mapStateToProps = (state) => {
  return { reps: state.reps }
}

export default connect(mapStateToProps)(RepIndex);
