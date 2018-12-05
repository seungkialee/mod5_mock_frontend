import React, {Component} from "react";
import "../stylesheets/NewTransactionPage.css";
import {connect} from "react-redux";
import {getReceiveAcc} from '../Redux/actioncreator'

class TransferPage extends Component {
  state = {
    receiving_id: null,
    amount: null,
    detail: null,
    origin_account: null
  };

  handleChange = event => {
    // console.log(event.target.name)
    // debugger
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  };

  // handleSelect = event => {
  //   this.setState({origin_account: })
  // }

  sendTransfer = event => {
    event.preventDefault();
    this.props.getReceiveAcc(this.state.receiving_id, parseInt(this.state.amount), this.state.detail, this.state.origin_account)
  };

  render() {
    const option = this.props.currentUser.accounts.map(account => <option value={account.id}>{account.account_type}</option>)

    return (<div className="modal" onClick={this.props.closePage}>
      <form autoComplete="off" className="modal-content" onSubmit={this.sendTransfer}>
        <ul>
          <li>
            <select name="origin_account" value={this.state.origin_account} onChange={this.handleChange} className="input-form">
              <option value=""></option>
              {option}
            </select>
          </li>
          <li>
            <input onChange={this.handleChange} name="receiving_id" placeholder="Receiving Account ID" type="number" className="input-form"/>
          </li>
          <li>
            <input onChange={this.handleChange} name="amount" placeholder="Amount" type="number" className="input-form"/>
          </li>
          <li>
            <textarea onChange={this.handleChange} name="detail" placeholder="Notes/Comments" className="input-form"/>
          </li>
          <input type="submit" className="submit-btn"/>
        </ul>
      </form>
    </div>);
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser, receiveAcc: state.receiveAcc};
};
// :detail, :amount, :account_id, :receiving_id, :transaction_type

export default connect(mapStateToProps, {getReceiveAcc})(TransferPage);
