import React, {Component} from "react";
import TransactionDetail from "./TransactionDetail";

class AccountCard extends Component {
  state = {
    showAccountOpener: false
  };

  closeDetailHandler = event => {
    if (event.target.className === "modal") {
      this.setState({showAccountOpener: false});
    }
  };

  clickHandler = event => {
    this.setState({showAccountOpener: true});
  };

  render() {
    if (this.state.showAccountOpener === true) {
      return (<div>
        <TransactionDetail close={this.closeDetailHandler} accId={this.props.accObj.id}/>
        <div onClick={this.clickHandler}>
          <div>{this.props.accObj.account_type}</div>
          <div>{this.props.accObj.balance}</div>
        </div>
      </div>);
    } else {
      return (<div onClick={this.clickHandler}>
        <div>{this.props.accObj.account_type}</div>
        <div>{this.props.accObj.balance}</div>
      </div>);
    }
  }
}
export default AccountCard;
