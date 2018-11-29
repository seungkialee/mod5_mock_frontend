import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {logOut, fetchUser} from "../Redux/actioncreator";
import AccountContainer from './AccountContainer'
// import NewAccount from "./NewAccount";
import '../stylesheets/Main.css'

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
      <div className="top-nav">
        <Link to="/login" onClick={this.handleLogOut} className="log-out">
          Log Out
        </Link>
      </div>
      <AccountContainer/>
    </div>)
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
};
export default connect(mapStateToProps, {logOut, fetchUser})(Main);
