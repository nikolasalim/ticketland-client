import React from "react";
import { connect } from "react-redux";
import EditTicketFormContainer from "./EditTicketFormContainer";

class TicketList extends React.Component {
  render() {
    return (
      <div>
        {this.props.tickets.map(ticket => {
          console.log("ticket.userId is", ticket.userId);
          if (ticket.eventId === parseInt(this.props.eventId)) {
            return (
              <div>
                <div key={ticket.id}>
                  <img src={ticket.image} style={{ maxWidth: "200px" }}></img>
                  <h4> Price: ${ticket.price}</h4>
                  <p> Description: {ticket.description}</p>
                </div>
                <EditTicketFormContainer
                  ticketId={ticket.id}
                  eventId={ticket.eventId}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }
}

// export default TicketList;

function mapStateToProps(state) {
  return { user: state.user, events: state.events, tickets: state.tickets };
}

export default connect(mapStateToProps)(TicketList);
