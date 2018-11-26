import React, {Component} from "react";
import LoginContainer from "./Components/LoginContainer";
import {fetchUser} from './Redux/actioncreator'
import Main from "./Components/Main"
import {connect} from 'react-redux'
import {withRouter, Route} from 'react-router-dom'
import './App.css'

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.fetchUser(localStorage.token)
    }
  }
  render() {
    return (<div className="App">
      <Route path="/main" component={Main}/>
      <Route path='/login' component={LoginContainer}/>
    </div>);
  }
} // console.log(mapStateToProps)

const mapStateToProps = (state) => {
  // console.log("mappedState", state)
  return {loggedIn: state.loggedIn, currentUser: state.currentUser}

}
export default connect(mapStateToProps, {fetchUser})(App);
