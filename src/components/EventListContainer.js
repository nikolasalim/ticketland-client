import React from "react";
import { getEvents } from "../actions/eventActions";
import { connect } from "react-redux";
import EventList from "./EventList";
import AuthPage from "./AuthPage";
import CreateEventFormContainer from "./CreateEventFormContainer";

class EventListContainer extends React.Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    if (!this.props.user) {
      return <AuthPage />;
    } else {
      if (this.props.events.list.length === 0) {
        return (
          <div>
            <h2>Check out the events:</h2>
            <p>
              Sorry, there are currently no events available. Create yours right
              now:
            </p>
            <CreateEventFormContainer />
          </div>
        );
      }
      return (
        <div>
          <CreateEventFormContainer />
          <EventList events={this.props.events} />
        </div>
      );
    }
    // return <EventList images={this.props.images} user={this.props.user} />;
  }
}

function mapStateToProps(state) {
  return { user: state.user, events: state.events };
}

const mapDispatchToProps = { getEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);
