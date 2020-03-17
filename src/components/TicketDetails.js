import React from "react";
import EditTicketFormContainer from "./EditTicketFormContainer";

class TicketDetails extends React.Component {
  render() {
    const { id, image, price, description, userId } = this.props.singleTicket;
    // console.log("TicketDetails: id is:", id);
    // console.log("TicketDetails: userId is:", userId);

    return (
      <div>
        <div key={id}>
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
