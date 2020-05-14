import React from "react";
import TicketDetails from "./TicketDetails";
import { connect } from "react-redux";
import moment from "moment";
import { getSingleTicket } from "../actions/ticketActions";
import CommentContainer from "./CommentContainer";

class TicketDetailsContainer extends React.Component {
  componentDidMount() {
    const { ticketId } = this.props.match.params;
    this.props.getSingleTicket(ticketId);
  }

  componentDidUpdate(prevProps) {
    const { ticketId } = this.props.match.params;

    if (this.props.comments !== prevProps.comments) {
      this.props.getSingleTicket(ticketId);
    }
  }

  riskColor = () => {
    const { risk } = this.props.singleTicket;

    if (risk >= 5 && risk < 31) {
      return <h3 style={{ color: "green" }}>Risk of fraud: {risk}%</h3>;
    } else if (risk >= 30 && risk < 51) {
      return <h3 style={{ color: "yellow" }}>Risk of fraud: {risk}%</h3>;
    } else {
      return <h3 style={{ color: "red" }}>Risk of fraud: {risk}%</h3>;
    }
  };

  render() {
    const { ticketId } = this.props.match.params;

    return (
      <div>
        {this.riskColor()}
        <TicketDetails singleTicket={this.props.singleTicket} />
        <CommentContainer ticketId={ticketId} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    singleTicket: state.singleTicket,
    tickets: state.tickets,
    comments: state.comments,
  };
}

const mapDispatchToProps = {
  getSingleTicket,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetailsContainer);
