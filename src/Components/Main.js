import React, {Component} from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {logOut} from "../Redux/actioncreator";
import "../stylesheets/NewAccount.css";
// import NewAccount from "./NewAccount";

class Main extends Component {
  handleLogOut = event => {
    this.props.logOut();
  };

  state = {
    showAccountOpener: false
  };

  openAccountHandler = event => {
    this.setState({showAccountOpener: true});
  };

  render() {
    if (this.state.showAccountOpener === true) {
      return (
        <div>
          <div className="modal">
            <div className="modal-content">"inside the new account modal"</div>
          </div>
          <div>
            <div>
              <Link to="/login" onClick={this.handleLogOut}>
                Log Out
              </Link>
            </div>
            <button onClick={this.openAccountHandler}>Open Account</button>
          </div>
        </div>
      );
    } else {
      console.log("afterLogin State", this.props.currentUser);
      return (
        <div>
          <div>
            <Link to="/login" onClick={this.handleLogOut}>
              Log Out
            </Link>
          </div>
          <button onClick={this.openAccountHandler}>Open Account</button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser};
};
export default connect(
  mapStateToProps,
  {logOut}
)(Main);
