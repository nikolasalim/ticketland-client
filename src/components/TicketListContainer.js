import React from "react";
import { getTickets } from "../actions/ticketActions";
import { connect } from "react-redux";
import TicketList from "./TicketList";
import "./style/TicketListContainer.css";

class TicketListContainer extends React.Component {
  componentDidMount() {
    this.props.getTickets();
  }

  render() {
    if (
      this.props.tickets.filter(
        ticket => ticket.eventId === parseInt(this.props.eventId)
      ).length === 0
    ) {
      return <p>No tickets available at the moment.</p>;
    } else {
      return (
        <div className="tickets-box">
          <h3>Tickets for sell:</h3>
          <div className="tickets-box">
            <TicketList
              tickets={this.props.tickets}
              eventId={this.props.eventId}
            />
          </div>
        </div>
      );
    }
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
