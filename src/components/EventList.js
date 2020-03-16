import React from "react";

class EventList extends React.Component {
  render() {
    return this.props.events.list.map(event => {
      return (
        <div>
          <h2>{event.name}</h2>
          <img src={event.image}></img>
          <p>{event.description}</p>
          <p>start: {event.start_date}</p>
          <p>end: {event.end_date}</p>
        </div>
      );
    });
  }
}

export default EventList;
