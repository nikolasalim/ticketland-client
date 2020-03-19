import React from "react";
import { getTickets } from "../actions/ticketActions";
import { connect } from "react-redux";
import TicketList from "./TicketList";

class TicketListContainer extends React.Component {
  componentDidMount() {
    this.props.getTickets();
  }

  render() {
    return (
      <div>
        <h3>Tickets for sell:</h3>
        <TicketList tickets={this.props.tickets} eventId={this.props.eventId} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    events: state.events,
    tickets: state.tickets
  };
}

const mapDispatchToProps = {
  getTickets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketListContainer);
