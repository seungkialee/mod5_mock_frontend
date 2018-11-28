import React, {Component} from "react";
import "../stylesheets/Transaction.css";
import TransCard from "./TransCard";
import {connect} from "react-redux";

const TransactionDetail = props => {
  console.log("insidedetail", props.accId);
  console.log(props.currentUser.transactions);
  let accTransactions = props.currentUser.transactions.filter(transObj => {
    return transObj.account_id === props.accId;
  });
  let transMap = accTransactions.map(transObj => (
    <TransCard trans={transObj} />
  ));
  return (
    <div onClick={props.close} className="modal">
      <div className="modal-content">{transMap}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {currentUser: state.currentUser};
};

export default connect(mapStateToProps)(TransactionDetail);
