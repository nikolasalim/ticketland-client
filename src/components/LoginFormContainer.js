import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions/userActions";
import { Redirect } from "react-router-dom";

class LoginFormContainer extends React.Component {
  state = { username: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
    // this.setRedirect();
    if (2 + 2 === 4) return <Redirect to="/event">a</Redirect>;
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(null, { login })(LoginFormContainer);
