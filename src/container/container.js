import React, { Component } from "react";
import Component1 from "../components/component";

class Container1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "mum",
      age: "34",
    };
  }

  //wrong
  //   changeState = () => {
  //     this.state.age = "200";
  //   };

  //correct
  changeState = () => {
    this.setState({ age: "200", name: this.state.name + "m" });
  };
  render() {
    return (
      <div>
        <button onClick={() => this.changeState()}>Change state</button>
        <div>{this.state.age}</div>
        <div>{this.state.name}</div>
        <Component1 prop1={this.state.name} />
      </div>
    );
  }
}

export default Container1;
