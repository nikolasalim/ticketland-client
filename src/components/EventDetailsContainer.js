import React from "react";
import EventDetails from "./EventDetails";
import { getSingleEvent } from "../actions/eventActions";
import { connect } from "react-redux";

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    const { eventId } = this.props.match.params;

    this.props.getSingleEvent(eventId);
  }

  render() {
    return (
      <div>
        <EventDetails singleEvent={this.props.singleEvent} />
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

// export default EventDetailsContainer;
