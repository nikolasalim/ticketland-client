import React from "react";
import { connect } from "react-redux";
import { getAllComments } from "../actions/commentActions";

class CommentSection extends React.Component {
  componentDidMount() {
    this.props.getAllComments();
  }

  render() {
    return (
      <div>
        {this.props.comments.map(comment => {
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

const mapDispatchToProps = { getAllComments };

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
