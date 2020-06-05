import React from "react";
import moment from "moment";
// import "./style/EventDetails.css";

class EventDetailsContainer extends React.Component {
  render() {
    const {
      title,
      image,
      description,
      start_date,
      end_date,
    } = this.props.singleEvent;

    return (
      <div className="main-box">
        <h3>Event: {title}</h3>
        <div>
          <img src={image} style={{ maxWidth: "200px" }}></img>
        </div>
        <div className="info-box">
          <p>{description}</p>
          <div>
            <p>Start date: {moment(start_date).format("LL")}</p>
            <p>End date: {moment(end_date).format("LL")}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetailsContainer;
