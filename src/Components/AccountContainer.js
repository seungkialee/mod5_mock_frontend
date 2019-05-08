import React, { Component } from "react";
import AccountCard from "./AccountCard";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class AccountContainer extends Component {
  render() {
    let accounts;
    console.log("Account Container", this.props.currentUser);
    if (this.props.currentUser.hasOwnProperty("accounts")) {
      accounts = this.props.currentUser.accounts.map(accObj => (
        <AccountCard accObj={accObj} />
      ));
    }
    return <div>{accounts}</div>;
  }
}

const mapStateToProps = state => {
  return { currentUser: state.currentUser };
};
export default withRouter(connect(mapStateToProps)(AccountContainer));
