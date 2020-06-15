import React from "react";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";
import { connect } from "react-redux";
import EventListContainer from "./EventListContainer";
import { Link } from "react-router-dom";
import "./AuthPage.scss";

class AuthPage extends React.Component {
  render() {
    if (!this.props.user) {
      return (
        <div className="authPage">
          <div className="titleBox">
            <h2 className="title">Welcome to TicketLand</h2>
            <h3 className="subtitle">Wanna buy or sell tickets? We gotcha.</h3>
          </div>
          <div className="authBox">
            <LoginFormContainer />
            <SignupFormContainer />
            <p className="browse">
              <Link to="/event">☞ Or click here to browse around.</Link>
            </p>
          </div>
        </div>
      );
    } else {
      return <EventListContainer />;
    }
  }
}

function mapStateToProps(state) {
  return { user: state.user, events: state.events };
}

export default connect(mapStateToProps)(AuthPage);
