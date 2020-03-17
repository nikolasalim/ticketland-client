import React from "react";
import { getTickets } from "../actions/ticketActions";
import { connect } from "react-redux";
import TicketList from "./TicketList";

class TicketListContainer extends React.Component {
  componentDidMount() {
    // const { eventId } = this.props.match.params;
    // console.log("event ID inside TicketListContainer is:", this.props.eventId);
    this.props.getTickets(/* this.props.eventId */);
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
  }; //do I need to access user and events store?
}

const mapDispatchToProps = {
  getTickets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketListContainer);
