import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {logOut, fetchUser} from "../Redux/actioncreator";
import AccountContainer from './AccountContainer';
import TransferPage from './TransferPage';
import '../stylesheets/Main.css';

class Main extends Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.fetchUser(localStorage.token)
    }
  }

  state = {
    showTransferPage: false
  }

  handleLogOut = event => {
    this.props.logOut();
  };

  openTransferPage = (event) => {
    if (event.target.className === "transfer-btn") {
      this.setState({showTransferPage: true})
    }
  }

  closePage = event => {
    if (event.target.className === "modal") {
      this.setState({showTransferPage: false})
    }
  };

  render() {
    console.log("this.props.currentUser", this.props.currentUser);
    console.log("receiveAcc", this.props.receiveAcc)
    if (this.state.showTransferPage === false) {
      return (<div>
        <div className="top-nav">
          <Link to="/login" onClick={this.handleLogOut} className="log-out">
            Log Out
          </Link>
          <div className="transfer-btn" onClick={this.openTransferPage}>
            Transfer
          </div>

        </div>
        <AccountContainer/>
      </div>)
    } else {
      return (<div>
        <div className="top-nav">
          <Link to="/login" onClick={this.handleLogOut} className="log-out">
            Log Out
          </Link>
          <div className="transfer-btn" onClick={this.openTransferPage}>
            Transfer
          </div>
        </div>
        <AccountContainer/>
        <TransferPage closePage={this.closePage}/>
      </div>)
    }
  }
}
const mapStateToProps = state => {
  return {currentUser: state.currentUser, receiveAcc: state.receiveAcc}
};
export default connect(mapStateToProps, {logOut, fetchUser})(Main);
