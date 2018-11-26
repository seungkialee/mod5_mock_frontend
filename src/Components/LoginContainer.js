import React, {Component} from "react";
import "../stylesheets/Login.css";
import {connect} from "react-redux";
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
    this.props.login(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <div id="login">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  {login}
)(LoginContainer);
