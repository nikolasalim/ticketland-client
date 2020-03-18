import React from "react";

class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          name="username"
          value={this.props.values.username}
          onChange={this.props.onChange}
          placeholder="username:"
        ></input>
        <input
          value={this.props.values.password}
          name="password"
          onChange={this.props.onChange}
          placeholder="password:"
        ></input>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
