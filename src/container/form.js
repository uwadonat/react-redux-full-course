import React, { Component } from "react";

class Form extends Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.value);
  };

  render() {
    return (
      <div>
        {this.state.value}
        <form onSubmit={this.handleSubmit}>
          <label name="name">my name:</label>
          <input id="name" onChange={this.handleChange} type="text" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
