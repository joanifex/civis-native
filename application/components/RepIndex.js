import React from 'react';
import { Link } from 'react-router';

import { Text, View } from 'react-native';
import { Content, Left, Body, Right, ListItem, Thumbnail, Icon } from 'native-base'

const RepIndex = ({reps}) => {

  let displayReps = () => {
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

  return(
    <View>
      <Text>RepIndex</Text>
      { displayReps() }
    </View>
  );
}

export default RepIndex;
