import React, {Component} from "react";
import "../stylesheets/Transaction.css";

const TransCard = props => {
  console.log("hi", props.trans);
  const clickHandler = (event) => {
    console.log(event.target)
  }
  // if (props.trans.account_id === event.target.dataset.id)
  return (<div className="show-detail">
    <p onClick={clickHandler}>
      <div data-id={props.trans.id}>
        {props.trans.detail}: ${props.trans.amount}
      </div>
    </p>
  </div>);
};

export default TransCard;
