import React from "react";

class EventList extends React.Component {
  render() {
    return (
      <div>
        <h2>Check out the events:</h2>
        {this.props.events.list.map(event => {
          return (
            <div key={event.id}>
              <h3>{event.title}</h3>
              <img src={event.image} style={{ maxWidth: "200px" }}></img>
              <p>{event.description}</p>
              <p>start: {event.start_date}</p>
              <p>end: {event.end_date}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EventList;
