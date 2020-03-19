import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/login">Click here to create an account or log in.</Link>
        </div>
        <div>
          <Link to="/event">
            Click here to browse around and check our events.
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}
export default connect(mapStateToProps)(LandingPage);
