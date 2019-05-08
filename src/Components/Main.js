import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut, fetchUser } from "../Redux/actioncreator";
import { withRouter } from "react-router-dom";
import AccountContainer from "./AccountContainer";
import TransferPage from "./TransferPage";
import "../stylesheets/Main.css";

class Main extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.fetchUser(localStorage.token);
    }
  }

  state = {
    showTransferPage: false
  };

  handleLogOut = event => {
    this.props.logOut();
  };

  openTransferPage = event => {
    if (event.target.className === "transfer-btn") {
      this.setState({ showTransferPage: true });
    }
  };

  closePage = event => {
    if (event.target.className === "modal") {
      this.setState({ showTransferPage: false });
    }
  };

  closeModal = event => {
    this.setState({ showTransferPage: false });
  };

  render() {
    if (this.state.showTransferPage === false) {
      return (
        <div>
          <div className="top-nav">
            <Link to="/login" onClick={this.handleLogOut} className="log-out">
              Log Out
            </Link>
            <div className="transfer-btn" onClick={this.openTransferPage}>
              Transfer
            </div>
          </div>
          <AccountContainer />
        </div>
      );
    } else {
      return (
        <div>
          <div className="top-nav">
            <Link to="/login" onClick={this.handleLogOut} className="log-out">
              Log Out
            </Link>
            <div className="transfer-btn" onClick={this.openTransferPage}>
              Transfer
            </div>
          </div>
          <AccountContainer />
          <TransferPage
            closeModal={this.closeModal}
            closePage={this.closePage}
          />
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return { currentUser: state.currentUser, receiveAcc: state.receiveAcc };
};
export default withRouter(
  connect(
    mapStateToProps,
    { logOut, fetchUser }
  )(Main)
);
