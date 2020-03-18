import React from "react";
import { connect } from "react-redux";
import { /* getUsers, */ getAllComments } from "../actions/commentActions";

class CommentSection extends React.Component {
  componentDidMount() {
    // this.props.getUsers();
    this.props.getAllComments();
  }

  render() {
    return (
      <div>
        {this.props.comments.map(comment => {
          // return (
          //   <p>
          //     {comment.whoCommented} says: {comment.comment}
          //   </p>
          // );

          if (comment.ticketId === parseInt(this.props.ticketId)) {
            return (
              <div key={comment.id}>
                {comment.whoCommented} says: {comment.comment}
              </div>
            );
          }
        })}
      </div>
    );
  }
}

const mapDispatchToProps = { /* getUsers, */ getAllComments };

function mapStateToProps(state) {
  return { comments: state.comments /* , usersList: state.usersList */ };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
