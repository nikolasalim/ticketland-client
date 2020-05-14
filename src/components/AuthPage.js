import React from "react";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";
import { connect } from "react-redux";
import EventListContainer from "./EventListContainer";
import { Link } from "react-router-dom";
import "./style/AuthPage.css";

class AuthPage extends React.Component {
  render() {
    if (!this.props.user) {
      return (
        <div className="main-box">
          <h2>Welcome to TicketSwag</h2>
          <LoginFormContainer />
          <SignupFormContainer />
          <p>
            <Link to="/event">☞ Or click here to browse around.</Link>
          </p>
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
