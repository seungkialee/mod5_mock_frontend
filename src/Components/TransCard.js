import React, {Component} from "react";
import "../stylesheets/Transaction.css";

const TransCard = props => {
  console.log("hi", props.trans);
  // if (props.trans.account_id === event.target.dataset.id)
  return (
    <div>
      {props.trans.detail} - ${props.trans.amount}
    </div>
  );
};

export default TransCard;
