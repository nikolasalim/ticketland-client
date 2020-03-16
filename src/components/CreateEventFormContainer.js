import React from "react";
import CreateEventForm from "./CreateEventForm";
import { addEvent } from "../actions/eventActions";
import { connect } from "react-redux";

class CreateEventFormContainer extends React.Component {
  state = {
    title: "",
    description: "",
    image: "",
    start_date: "",
    end_date: ""
    // userId: ""
  };

  onSubmit = event => {
    event.preventDefault();
    // this.props.login(this.state.username, this.state.password);
    this.props.addEvent(this.state);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Create your event:</h2>
        <CreateEventForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(null, { addEvent })(CreateEventFormContainer);
