import React from "react";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <LoginFormContainer />
        <SignupFormContainer />
        <Link to="/event">Or click here to browse around.</Link>
      </div>
    );
  }
}

export default LoginForm;
