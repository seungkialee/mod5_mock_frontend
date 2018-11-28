import React, {Component} from "react";
import "../stylesheets/Login.css";
import {connect} from "react-redux";
import {withRouter, Route} from "react-router-dom";
import Main from "./Main";
import {login} from "../Redux/actioncreator";

class LoginContainer extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.login(this.state)
    if (this.props.currentUser === null) {
      this.props.history.push("/login")
    } else {
      this.props.history.push("/main")
    }
  };

  render() {
    return (<div id="login">
      <form onSubmit={this.submitHandler}>
        <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
        <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
        <input type="submit" value="Login"/>
      </form>
    </div>)
  }
}
const mapStateToProps = state => {
  console.log("currentUser", state);
  return {currentUser: state.currentUser};
};

export default connect(mapStateToProps, {login})(LoginContainer);
