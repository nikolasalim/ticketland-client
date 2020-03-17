import React from "react";
import EditTicketForm from "./EditTicketForm";
import { editTicket } from "../actions/ticketActions";
import { connect } from "react-redux";

class EditTicketFormContainer extends React.Component {
  state = {
    image: "",
    price: "",
    description: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.editTicket(this.props.ticketId, this.state);
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
    // if (!this.props.userId || !this.props.user.userId) {
    //   return <h1>Loading...</h1>;
    // }
    if (this.props.userId === this.props.user.userId) {
      console.log("this.props.userId is:", this.props.userId);
      console.log("this.props.user.userId is:", this.props.user.userId);
      return (
        <div>
          <EditTicketForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return { user: state.user, events: state.events, tickets: state.tickets };
}
const mapDispatchToProps = { editTicket };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTicketFormContainer);
