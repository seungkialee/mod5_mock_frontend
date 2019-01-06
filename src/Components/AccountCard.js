import React, {Component} from "react";
import TransactionDetail from "./TransactionDetail";
import '../stylesheets/Account.css'

class AccountCard extends Component {
  state = {
    showAccountOpener: false
  };

  closeDetailHandler = event => {
    if (event.target.className === "show-detail") {
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
        <div className="account" onClick={this.clickHandler}>
          <div>
            <h1>{this.props.accObj.account_type}</h1>
          </div>
          <div>
            <h1>Current Balance: ${this.props.accObj.balance}</h1>
          </div>
        </div>
      </div>);
    } else {
      return (<div className="account" onClick={this.clickHandler}>
        <div>
          <h1>{this.props.accObj.account_type}</h1>
        </div>
        <div>
          <h1>Current Balance: ${this.props.accObj.balance}</h1>
        </div>
      </div>);
    }
  }
}
export default AccountCard;
