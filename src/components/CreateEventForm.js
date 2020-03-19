import React from "react";

class CreateEventForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          name="title"
          value={this.props.values.title}
          onChange={this.props.onChange}
          placeholder="title:"
        ></input>
        <input
          value={this.props.values.description}
          name="description"
          onChange={this.props.onChange}
          placeholder="description:"
        ></input>
        <input
          value={this.props.values.image}
          name="image"
          onChange={this.props.onChange}
          placeholder="image:"
        ></input>
        <label>
          {" "}
          Start date:
          <input
            type="date"
            value={this.props.values.start_date}
            name="start_date"
            onChange={this.props.onChange}
            placeholder="start_date:"
          ></input>
        </label>
        <label>
          End date:
          <input
            type="date"
            value={this.props.values.end_date}
            name="end_date"
            onChange={this.props.onChange}
            placeholder="end_date:"
          ></input>
        </label>

        <button type="submit">Create Event</button>
      </form>
    );
  }
}

export default CreateEventForm;
