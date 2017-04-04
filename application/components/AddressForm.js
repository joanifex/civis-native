import React from 'react';
import { connect } from 'react-redux';
import { updateReps } from '../actions/reps';
import { View } from 'react-native';
import {
  Form,
  Item,
  Input,
  Button,
  Card,
  CardItem,
  Body,
  InputGroup,
  Icon,
  Right,
  Spinner,
  Toast,
  Text,
} from 'native-base';

class AddressForm extends React.Component {
  state = { address: "", loading: false }

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
    this.setState({ loading: true });
    let coord_params = ""
    if (typeof coords != "string")
      coord_params = `coords%5Blat%5D=${coords.lat}&coords%5Blng%5D=${coords.lng}`;
    fetch(`https://civis.herokuapp.com/api/reps?address=${address}&${coord_params}`)
    // fetch(`http:/localhost:3000/api/reps?address=${address}&${coord_params}`)
      .then( res => res.json() )
      .then( data => {
        this.props.dispatch(updateReps(data.reps));
        this.props.history.push('/reps')
      })
      .catch( err => {
        this.setState({ loading: false });
        const message = "Could not find address. Try again.";
        Toast.show({
          text: `${message}`,
          position: 'bottom',
          buttonText: 'Okay'
        });
      })
  }

  handleChange = (e) => {
    let { target: { value } } = e;
    this.setState({ address: value });
  }

  displayLoading() {
    return(
      <Spinner color='blue' />
    );
  }

  render(){
    return(
      <View>
        { this.state.loading ? this.displayLoading() :
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
              </Body>
            </CardItem>
            <CardItem>
              <Button iconLeft light onPress={ this.geolocate }>
                <Icon name='navigate' />
                <Text>Find My Location</Text>
              </Button>
            </CardItem>
          </Card>
        }
      </View>
    );
  }
}

export default connect()(AddressForm);
