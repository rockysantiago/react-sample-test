import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  class ComposedComponent extends Component {
    componentDidMount() {
      this.checkIfUserIsNotLoggedIn();
    }

    componentDidUpdate() {
      this.checkIfUserIsNotLoggedIn();
    }

    checkIfUserIsNotLoggedIn() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  return connect(mapStateToProps)(ComposedComponent);
};
