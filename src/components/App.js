import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

function mapStateToProps(state) {
  return { auth: state.auth };
}

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Logout</button>
      );
    }
    return <button onClick={() => this.props.changeAuth(true)}>Login</button>;
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(App);
