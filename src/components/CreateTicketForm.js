import React from "react";

class CreateTicketForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          name="image"
          value={this.props.values.image}
          onChange={this.props.onChange}
          placeholder="image:"
        ></input>
        <input
          value={this.props.values.price}
          name="price"
          onChange={this.props.onChange}
          placeholder="price:"
        ></input>
        <input
          value={this.props.values.description}
          name="description"
          onChange={this.props.onChange}
          placeholder="description:"
        ></input>
        <button type="submit">Create Ticket</button>
      </form>
    );
  }
}

export default CreateTicketForm;
