import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EditTicketFormContainer from "./EditTicketFormContainer";

class TicketList extends React.Component {
  render() {
    return (
      <div>
        {this.props.tickets.map(ticket => {
          // console.log("ticket.userId is", ticket.userId);
          if (ticket.eventId === parseInt(this.props.eventId)) {
            return (
              <Link to={`/ticket/${ticket.id}`} key={ticket.id}>
                <div>
                  <div>
                    <img src={ticket.image} style={{ maxWidth: "200px" }}></img>
                    <h4> Price: ${ticket.price}</h4>
                    <p> Description: {ticket.description}</p>
                  </div>
                  {/* <EditTicketFormContainer
                    // this will go into the tickets details
                    ticketId={ticket.id}
                    eventId={ticket.eventId}
                  /> */}
                </div>
              </Link>
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
