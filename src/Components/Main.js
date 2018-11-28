import React, {Component} from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {logOut} from "../Redux/actioncreator";
import AccountContainer from './AccountContainer'
import "../stylesheets/NewAccount.css";
// import NewAccount from "./NewAccount";

class Main extends Component {
  state = {
    showAccountOpener: false
  };

  handleLogOut = event => {
    this.props.logOut();
  };

  openAccountHandler = event => {
    this.setState({showAccountOpener: true});
  };

  closeAccountHandler = event => {
    if (event.target.className === "modal") {
      this.setState({showAccountOpener: false});
    }
  };
  render() {
    console.log("afterLogin State", this.props.currentUser[0]);
    return (<div>
      <Link to="/login" onClick={this.handleLogOut}>
        Log Out
      </Link>
      <AccountContainer/>
    </div>)
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
};
export default connect(mapStateToProps, {logOut})(Main);
