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
