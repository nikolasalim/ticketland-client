import React from "react";
import EventDetails from "./EventDetails";
import { connect } from "react-redux";
import { getSingleEvent } from "../actions/eventActions";
import CreateTicketFormContainer from "./CreateTicketFormContainer";
import TicketListContainer from "./TicketListContainer";

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    const { eventId } = this.props.match.params;

    this.props.getSingleEvent(eventId);
  }

  render() {
    return (
      <div>
        <EventDetails singleEvent={this.props.singleEvent} />
        <CreateTicketFormContainer />
        <TicketListContainer eventId={this.props.match.params.eventId} />
      </div>
    );
  }
}

// create another reducer for this event, including its respective tickets
// retrieve the all events reducer and then filter by id on front end

function mapStateToProps(state) {
  return { singleEvent: state.singleEvent };
}

const mapDispatchToProps = { getSingleEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailsContainer);
