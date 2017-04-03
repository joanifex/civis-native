import React from 'react';
import { connect } from 'react-redux';
import { updateReps } from '../actions/reps';
import { Text, View } from 'react-native';
import { Form, Item, Input, Button, Card, CardItem, Body, InputGroup, Icon, } from 'native-base';

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

  findReps = ({ address = "", coords = "" }) => {
    fetch(`https://civis.herokuapp.com/api/reps?address=${address}&coords=${coords}`)
      .then( res => res.json() )
      .then( data => {
        this.props.dispatch(updateReps(data.reps));
        this.props.history.push('/reps')
      })
      .catch( err => {
        // TODO: Feedback. Syntax Error?
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
        <Card>
          <CardItem>
            <Body>
              <Text>
                  Find your legislators by zipcode or address
              </Text>
              <InputGroup>
                <Icon name="ios-search" />
                <Input
                  style={ {height: 40} }
                  placeholder="Address or Zip Code"
                  autoFocus={true}
                  value={this.state.address}
                  onChangeText={ address => this.setState({ address }) }
                  onSubmitEditing={ this.handleSubmit }
                  blurOnSubmit={false}
                />
              </InputGroup>
              <Button onPress={ this.handleSubmit }>
                  <Text>Submit</Text>
              </Button>
              <Button transparent onPress={ this.geolocate }>
                <Text>Find My Location</Text>
              </Button>
              {/* TODO: Geolocation */}
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  }
}

export default connect()(AddressForm);
