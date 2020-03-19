import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TicketList extends React.Component {
  render() {
    return (
      <div>
        {this.props.tickets.map(ticket => {
          if (ticket.eventId === parseInt(this.props.eventId)) {
            return (
              <Link to={`/ticket/${ticket.id}`} key={ticket.id}>
                <div>
                  <div>
                    <img src={ticket.image} style={{ maxWidth: "200px" }}></img>
                    <h4> Price: ${ticket.price}</h4>
                    <p> Description: {ticket.description}</p>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tickets: state.tickets };
}

export default connect(mapStateToProps)(TicketList);
