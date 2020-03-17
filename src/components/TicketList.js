import React from "react";
// import { Link } from "react-router-dom";

class TicketList extends React.Component {
  render() {
    return this.props.tickets.map(ticket => {
      if (ticket.eventId === parseInt(this.props.eventId)) {
        return (
          <div key={ticket.id}>
            <img src={ticket.image} style={{ maxWidth: "200px" }}></img>
            <h4> Price: ${ticket.price}</h4>
            <p> Description: {ticket.description}</p>
          </div>
        );
      }
    });
  }
}

export default TicketList;
