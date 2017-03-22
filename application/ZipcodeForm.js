import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  Form,
  Button,
  Item,
  Label,
  Input,
} from 'native-base';

class ZipcodeForm extends React.Component {
  state = { zipcode = '' }

  render(){
    return(
      <Form>
        <Item fixedlabel>
          <Label>Zipcode</Label>
          <Input
            value={this.state.zipcode}
            onChangeText={ zipcode => this.setState({ zipcode }) }
          />
        </Item>
      </Form>
    );
  }

}

export default ZipcodeForm;
