import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions/userActions";
import { Redirect } from "react-router-dom";

class LoginFormContainer extends React.Component {
  state = { username: "", password: "", redirect: false };

  onSubmit = event => {
    this.setState({
      redirect: true
    });
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);

    console.log("state now is:", this.state);
  };

  renderRedirect = () => {
    console.log("is renderRedirect running?");
    if (this.state.redirect && this.props.user) {
      return <Redirect to="/event" />;
    }
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { login })(LoginFormContainer);
