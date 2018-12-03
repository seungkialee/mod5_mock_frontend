import React, {Component} from "react";
import TransactionDetail from "./TransactionDetail";
import '../stylesheets/Account.css'

class AccountCard extends Component {
  state = {
    showAccountOpener: false
  };

  closeDetailHandler = event => {
    this.setState({showAccountOpener: false});
  };

  clickHandler = event => {
    this.setState({showAccountOpener: true});
  };

  render() {
    if (this.state.showAccountOpener === true) {
      return (<div>
        <TransactionDetail close={this.closeDetailHandler} accId={this.props.accObj.id}/>
        <div className="account" onClick={this.clickHandler}>
          <h1 className="account-type">{this.props.accObj.account_type}</h1>
          <h1 className="balance">Current Balance: ${this.props.accObj.balance}</h1>
          <button className="button">Transfer</button>
        </div>
      </div>);
    } else {
      return (<div onClick={this.clickHandler}>
        <div className="account">
          <h1 className="account-type">{this.props.accObj.account_type}</h1>
          <h1 className="balance">Current Balance: ${this.props.accObj.balance}</h1>
          <button className="button">Transfer</button>
        </div>
      </div>);
    }
  }
}
export default AccountCard;
