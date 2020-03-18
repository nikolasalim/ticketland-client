import React from "react";
import TicketDetails from "./TicketDetails";
import { connect } from "react-redux";
// import singleTicket from "../reducers/singleTicket";
import { getSingleTicket } from "../actions/ticketActions";
import CommentContainer from "./CommentContainer";
import riskAlgorithm from "../riskAlgorithm";

class TicketDetailsContainer extends React.Component {
  componentDidMount() {
    const { ticketId } = this.props.match.params;

    this.props.getSingleTicket(ticketId);
  }

  algorithm = () => {
    let risk = 5;

    // if the ticket is the only ticket of the author, add 10%:
    let ticketCount = 0;
    this.props.tickets.map(ticket => {
      if (ticket.userId === this.props.singleTicket.userId) {
        ticketCount++;
      }
    });
    if (ticketCount > 1) {
      risk += 10;
    }

    console.log("STEP 1: risk is:", risk);

    // if the ticket price is lower than the average ticket price for that event, that's a risk:

    const eventTickets = this.props.tickets.filter(
      ticket => ticket.eventId === this.props.singleTicket.eventId
    );

    const pricesArr = eventTickets.map(ticket => ticket.price);
    const pricesSum = pricesArr.reduce((acc, curr) => acc + curr, 0);
    const averagePrice = pricesSum / eventTickets.length;

    const limitValue = (value, max) => (value > max ? max : value);

    // if a ticket is X% cheaper than the average price, add X% to the risk:
    if (this.props.singleTicket.price < averagePrice) {
      const percentage =
        ((averagePrice - this.props.singleTicket.price) / averagePrice) * 100;
      const percentageLimited = limitValue(percentage, 10);
      risk += percentageLimited;
    } else {
      // if a ticket is X% more expensive than the average price, deduct X% from the risk, with a maximum of 10% deduction

      const percentage =
        ((this.props.singleTicket.price - averagePrice) / averagePrice) * 100;
      const percentageLimited = limitValue(percentage, 10);
      risk -= percentageLimited;
    }
    console.log("STEP 2: risk is:", risk);

    return risk;
  };

  render() {
    const { ticketId } = this.props.match.params;
    // console.log("algorithm is:", this.algorithm());
    this.algorithm();

    return (
      <div>
        <TicketDetails singleTicket={this.props.singleTicket} />
        <CommentContainer ticketId={ticketId} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    singleTicket: state.singleTicket,
    // moar stuff:
    tickets: state.tickets
  };
}

const mapDispatchToProps = {
  getSingleTicket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetailsContainer);

{
  /* <EventDetails singleEvent={this.props.singleEvent} />
        <CreateTicketFormContainer />
        <TicketListContainer eventId={this.props.match.params.eventId} /> */
}

// create another reducer for this event, including its respective tickets
// retrieve the all events reducer and then filter by id on front end

// user: state.user,
// events: state.events,
// tickets: state.tickets,
