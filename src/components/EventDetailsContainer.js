import React from "react";
import EventDetails from "./EventDetails";
import { connect } from "react-redux";
import { getSingleEvent } from "../actions/eventActions";
import CreateTicketFormContainer from "./CreateTicketFormContainer";
import TicketListContainer from "./TicketListContainer";
import "./style/EventDetailsContainer.css";

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    const { eventId } = this.props.match.params;

    this.props.getSingleEvent(eventId);
  }

  render() {
    return (
      <div>
        <div className="main-box">
          <EventDetails singleEvent={this.props.singleEvent} />
          <CreateTicketFormContainer />
        </div>
        <div>
          <TicketListContainer eventId={this.props.match.params.eventId} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { singleEvent: state.singleEvent };
}

const mapDispatchToProps = { getSingleEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailsContainer);
