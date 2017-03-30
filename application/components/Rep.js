import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';


class Rep extends React.Component {
  render() {
    return(
      <Text>{this.props.rep.full_name}</Text>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { rep: state.reps.find( r => r.id == props.match.params.id )}
}

export default connect(mapStateToProps)(Rep);
