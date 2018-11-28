import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {logOut, fetchUser} from "../Redux/actioncreator";
import AccountContainer from './AccountContainer'
// import NewAccount from "./NewAccount";

class Main extends Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.fetchUser(localStorage.token)
    }
  }

  handleLogOut = event => {
    this.props.logOut();
  };

  render() {
    console.log("this.props.currentUser", this.props.currentUser);
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
export default connect(mapStateToProps, {logOut, fetchUser})(Main);
