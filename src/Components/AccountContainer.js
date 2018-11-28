import React, {Component} from "react";
// import {fetchAccounts} from "../Redux/actioncreator";
import AccountCard from "./AccountCard";
import {connect} from "react-redux";

class AccountContainer extends Component {
  render() {
    let accounts;
    if (this.props.currentUser.hasOwnProperty("accounts")) {
      accounts = this.props.currentUser.accounts.map(accObj => (
        <AccountCard accObj={accObj} />
      ));
    }
    return (
      <div>
        {console.log(accounts)}
        {accounts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser, accounts: state.accounts};
};
export default connect(
  mapStateToProps
  // {fetchAccounts}
)(AccountContainer);
