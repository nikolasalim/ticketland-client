import React from "react";
import moment from "moment";

class EventDetailsContainer extends React.Component {
  render() {
    const {
      title,
      image,
      description,
      start_date,
      end_date
    } = this.props.singleEvent;

    return (
      <div>
        <h3>Event Details:</h3>
        <h4>{title}</h4>
        <img src={image} style={{ maxWidth: "200px" }}></img>
        <p>{description}</p>
        <p>Start date: {moment(start_date).format("LL")}</p>
        <p>End date: {moment(end_date).format("LL")}</p>
      </div>
    );
  }
}

export default EventDetailsContainer;
