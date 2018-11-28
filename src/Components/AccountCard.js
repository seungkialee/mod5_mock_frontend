import React, {Component} from "react";
import "../stylesheets/Cards.css";

const AccountCard = props => {
  return (
    <div className="account">
      {props.accObj.account_type}
      {props.accObj.balance}
    </div>
  );
};
export default AccountCard;
