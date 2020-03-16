import React from "react";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <LoginFormContainer />
        <SignupFormContainer />
      </div>
    );
  }
}

export default LoginForm;
