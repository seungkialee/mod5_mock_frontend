import React, {Component} from "react";
import LoginContainer from "./Components/LoginContainer";
import Main from "./Components/Main"
import {connect} from 'react-redux'
import {withRouter, Route} from 'react-router-dom'
import './App.css'

class App extends Component {
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
export default connect(mapStateToProps)(App);
