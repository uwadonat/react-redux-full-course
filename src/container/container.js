import React, { Component } from "react";

class Container1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "34",
    };
  }

  //wrong
  //   changeState = () => {
  //     this.state.age = "200";
  //   };

  //correct
  changeState = () => {
    this.setState({ age: "200" });
  };
  render() {
    return (
      <div>
        <button onClick={() => this.changeState()}>Change state</button>
        <div>{this.state.age}</div>
      </div>
    );
  }
}

export default Container1;
