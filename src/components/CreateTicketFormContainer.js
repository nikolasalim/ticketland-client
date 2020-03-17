import React from "react";
import CreateTicketForm from "./CreateTicketForm";
import { addTicket } from "../actions/ticketActions";
import { connect } from "react-redux";

class CreateTicketFormContainer extends React.Component {
  state = {
    image: "",
    price: "",
    description: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addTicket(this.state);
    this.setState({
      image: "",
      price: "",
      description: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h3>Sell your ticket:</h3>
        <CreateTicketForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(null, { addTicket })(CreateTicketFormContainer);
