import React from 'react';
import { connect } from 'react-redux';
import { updateReps } from '../actions/reps'
import AddressForm from './AddressForm';
import RepIndex from './RepIndex';
import { Text } from 'react-native';


class HomeCard extends React.Component {
  state = { loading: true, showingReps: false };

  componentDidMount = () => {
    debugger
    if ( this.hasLoaded() )
      this.setNotLoading();
    if ( this.hasReps() )
      this.setShowingReps();
  }

  componentDidUpdate = () => {
    if ( this.state.loading && this.hasLoaded() )
      this.setNotLoading();
    if ( !this.state.showingReps && this.hasReps() )
      this.setShowingReps();
    if ( this.state.showingReps && !this.hasReps() )
      this.setNotShowingReps();
  }

  hasLoaded = () => {
    return this.props.reps[0] === 'loading' ? false : true;
  }

  hasReps = () => {
    if ( this.hasLoaded() && this.props.reps.length !== 0 )
      return true;
    return false;
  }

  setNotLoading = () => {
    this.setState({ loading: false });
  }

  setShowingReps = () => {
    this.setState({ showingReps: true });
  }

  setNotShowingReps = () => {
    this.setState({ showingReps: false });
  }

  displayLoading = () => {
    return( <Text>Loading</Text> );
  }

  displayContent = () => {
    if (this.state.showingReps)
      return <RepIndex reps={this.props.reps}/>;
    else
      return <AddressForm addressEntered={this.setShowingReps}/>;
  }

  render() {
    let { loading } = this.state;
    if (loading)
      return this.displayLoading()
    else
      return this.displayContent();
  }
}

const mapStateToProps = (state) => {
  return { reps: state.reps };
}

export default connect(mapStateToProps)(HomeCard);
