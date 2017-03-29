import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { updateReps } from '../actions/reps';
import { Text, View } from 'react-native';
import { Form, Item, Input, Button } from 'native-base';

class AddressForm extends React.Component {
  state = { address: "" }

  handleSubmit = () => {
    let { address } = this.state;
    this.findReps({ address });
  }

  geolocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( position => {
        let coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.findReps({ coords })
      });
    } else {
    }
  }

  findReps = ({ address = "", coords = {} }) => {
    fetch(`http://localhost:3000/api/reps?address=${address}&coords=${coords}`)
      .then( res => res.json() )
      .then( data => {
        this.props.dispatch(updateReps(data.reps));
        this.props.history.push('reps')
      })
      .catch( err => {
        let message = "Could not find address. Try another one."
        console.log(message);
      })
  }

  handleChange = (e) => {
    let { target: { value } } = e;
    this.setState({ address: value });
  }

  render(){
    return(
      <View>
        <Text>Address Form</Text>
        <Form>
          <Item>
              <Input
                style={ {height: 40} }
                placeholder="Address or Zip Code"
                autoFocus={true}
                value={this.state.address}
                onChangeText={ address => this.setState({ address }) }
                onSubmitEditing={ this.handleSubmit }
                blurOnSubmit={false}
              />
          </Item>
        </Form>
        {/* TODO: Geolocation */}
        {/* <Button><Text>Geolocate</Text></Button> */}
      </View>
    );
  }
}

export default connect()(AddressForm);
