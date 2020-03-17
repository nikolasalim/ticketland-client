import React from "react";
import { Link } from "react-router-dom";

class EventList extends React.Component {
  render() {
    return (
      <div>
        <h2>Check out the events:</h2>
        {this.props.events.list.map(event => {
          return (
            <Link to={`/event/${event.id}`} key={event.id}>
              <div>
                <h3>{event.title}</h3>
                <img src={event.image} style={{ maxWidth: "200px" }}></img>
                <p>{event.description}</p>
                <p>start: {event.start_date}</p>
                <p>end: {event.end_date}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default EventList;
