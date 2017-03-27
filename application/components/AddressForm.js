import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { updateReps } from '../actions/reps';
import { Text } from 'react-native';

class AddressForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let address = this.address.value
    this.findReps({address})
  }

  geolocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( position => {
        let coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.findReps({coords})
      });
    } else {
    }
  }

  findReps = ({ address = "", coords = "" }) => {
    $.ajax({
      type: 'GET',
      url: `/api/reps`,
      dataType: 'JSON',
      data: { address, coords }
    }).done(data => {
      this.props.dispatch(updateReps(data.reps));
      // TODO: refactor this
      if (this.props.addressEntered)
        this.props.addressEntered();
      else
        browserHistory.push('/');
    }).fail( data => {
    });
  }

  render(){
    return(
      <Text>Address Form</Text>
    );
  }
}

export default connect()(AddressForm);
