import React from "react";
import TicketDetails from "./TicketDetails";
import { connect } from "react-redux";
// import singleTicket from "../reducers/singleTicket";
import { getSingleTicket } from "../actions/ticketActions";
import CommentContainer from "./CommentContainer";

class TicketDetailsContainer extends React.Component {
  componentDidMount() {
    const { ticketId } = this.props.match.params;

    this.props.getSingleTicket(ticketId);
  }

  render() {
    return (
      <div>
        <TicketDetails singleTicket={this.props.singleTicket} />
        <CommentContainer ticketId={this.props.match.params.ticketId} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    singleTicket: state.singleTicket
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
