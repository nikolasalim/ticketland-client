import React from "react";
import { getEvents } from "../actions/eventActions";
import { connect } from "react-redux";
import EventList from "./EventList";
import AuthPage from "./AuthPage";
import CreateEventFormContainer from "./CreateEventFormContainer";

let eventsCounter = 0;

class EventListContainer extends React.Component {
  componentDidMount() {
    this.props.getEvents();
  }

  nextHandler = () => {
    if (eventsCounter + 9 < this.props.events.total) {
      const limit = 9;
      eventsCounter += limit;

      const offset = eventsCounter;
      this.props.getEvents(`limit=${limit}`, `offset=${offset}`);
    } else {
      alert("You've seen all the events");
    }
  };

  previousHandler = () => {
    if (eventsCounter <= 0) {
      return;
    } else {
      const limit = 9;
      eventsCounter -= limit;
      const offset = eventsCounter;
      this.props.getEvents(`limit=${limit}`, `offset=${offset}`);
    }
  };

  render() {
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
        <button onClick={this.previousHandler}>PREVIOUS</button>
        <button onClick={this.nextHandler}>NEXT</button>
      </div>
    );

    // if (!this.props.user) {
    //   return <AuthPage />;
    // } else {
    //   if (this.props.events.list.length === 0) {
    //     return (
    //       <div>
    //         <h2>Check out the events:</h2>
    //         <p>
    //           Sorry, there are currently no events available. Create yours right
    //           now:
    //         </p>
    //         <CreateEventFormContainer />
    //       </div>
    //     );
    //   }
    //   return (
    //     <div>
    //       <CreateEventFormContainer />
    //       <EventList events={this.props.events} />
    //       <button onClick={this.previousHandler}>PREVIOUS</button>
    //       <button onClick={this.nextHandler}>NEXT</button>
    //     </div>
    //   );
    // }
  }
}

function mapStateToProps(state) {
  return { user: state.user, events: state.events };
}

const mapDispatchToProps = { getEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);
