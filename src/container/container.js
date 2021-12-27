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
  list = [
    { id: 1, name: "donat", salary: "$2000" },
    { id: 2, name: "Evodie", salary: "$24300" },
    { id: 3, name: "Paradis", salary: "$2500" },
    { id: 4, name: "Jeff", salary: "$2120" },
  ];

  RenderList = (props) => {
    return (
      <div>
        {props.lst.name}
        <p>{props.lst.salary}</p>
      </div>
    );
  };
  render() {
    return (
      <div>
        <button onClick={() => this.changeState()}>Change state</button>
        <div>{this.state.age}</div>
        <div>{this.state.name}</div>
        {this.list.map((item) => (
          <this.RenderList lst={item} />
        ))}
        <Component1 prop1={this.state.name} />
      </div>
    );
  }
}

export default Container1;
