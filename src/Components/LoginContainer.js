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
    // if (this.props.currentUser.hasOwnProperty("error")) {
    //   this.props.history.push("/login")
    // } else {
    this.props.history.push("/main")
    // }
  };

  render() {
    return (<form autoComplete="off" className="login" onSubmit={this.submitHandler}>
      <div className="text-box">
        <i className="fa fa-user"></i>
        <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
      </div>
      <div className="text-box">
        <i className="fa fa-lock"></i>
        <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
      </div>
      <input className="login-button" type="submit" value="Login"/>
    </form>)
  }
}
const mapStateToProps = state => {
  console.log("currentUser", state);
  return {currentUser: state.currentUser};
};
export default connect(mapStateToProps, {login})(LoginContainer);
