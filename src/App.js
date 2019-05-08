import React, { Component } from "react";
import LoginContainer from "./Components/LoginContainer";
import Main from "./Components/Main";
import { connect } from "react-redux";
import { withRouter, Route, Redirect } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={() => <Redirect to="/login" />} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/main" component={Main} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn, currentUser: state.currentUser };
};
export default withRouter(connect(mapStateToProps)(App));
