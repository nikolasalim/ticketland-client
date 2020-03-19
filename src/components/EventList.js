import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./style/EventList.css";

class EventList extends React.Component {
  render() {
    return (
      <div className="main-box">
        <div className="title-box">
          <h2>Check out the events:</h2>
        </div>
        <div className="events-box">
          {this.props.events.list.map(event => {
            return (
              <Link to={`/event/${event.id}`} key={event.id}>
                <div className="single-event">
                  <h3>{event.title}</h3>
                  <img src={event.image} style={{ maxWidth: "200px" }}></img>
                  <p>
                    From {moment(event.start_date).format("L")} to{" "}
                    {moment(event.end_date).format("L")}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default EventList;
