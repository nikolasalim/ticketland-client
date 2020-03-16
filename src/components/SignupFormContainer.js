import React from "react";
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { signup } from "../actions/userActions";

class SigninFormContainer extends React.Component {
  state = { username: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state.username, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <SignupForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(null, { signup })(SigninFormContainer);
