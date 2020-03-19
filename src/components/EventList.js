import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

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
                <p>start: {moment(event.start_date).format("LL")}</p>
                <p>end: {moment(event.end_date).format("LL")}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default EventList;
