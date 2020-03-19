import React from "react";
import EditTicketFormContainer from "./EditTicketFormContainer";

class TicketDetails extends React.Component {
  render() {
    const {
      id,
      image,
      price,
      description,
      userId,
      author
    } = this.props.singleTicket;

    const title =
      this.props.singleTicket && this.props.singleTicket.event
        ? this.props.singleTicket.event.title
        : null;

    return (
      <div>
        <div key={id}>
          <h4>Event: {title}</h4>
          <h4>Seller: {author}</h4>
          <img src={image} style={{ maxWidth: "200px" }}></img>
          <h4> Price: ${price}</h4>
          <p> Description: {description}</p>
        </div>
        <EditTicketFormContainer ticketId={id} userId={userId} />
      </div>
    );
  }
}

export default TicketDetails;
