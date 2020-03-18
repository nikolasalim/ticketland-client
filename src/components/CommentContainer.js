import React from "react";
import { connect } from "react-redux";
import { addComment } from "../actions/commentActions";
import CommentForm from "./CommentForm";
import CommentSection from "./CommentSection";

class CommentContainer extends React.Component {
  state = { comment: "", ticketId: null };

  onSubmit = event => {
    event.preventDefault();
    this.state.ticketId = this.props.ticketId;
    this.props.addComment(this.state);
    this.setState({ comment: "", ticketId: null });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h4>Comment Section:</h4>
        <CommentForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          comment={this.state.comment}
        />
        {/* <CommentSection /> */}
        <CommentSection ticketId={this.props.ticketId} />
      </div>
    );
  }
}

export default connect(null, {
  addComment
})(CommentContainer);
