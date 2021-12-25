import React, { Component } from "react";
import Component1 from "./components/component";
import Container1 from "./container/container";
class App extends Component {
  name = "Donat";

  state = {
    count: 0,
  };
  increment() {
    this.setState({ count: 5 });
  }

  display() {
    return 7;
  }
  render() {
    const styles = {
      border: "solid",
      width: "200px",
    };
    const names = {
      name1: "donat",
    };

    return (
      <div>
        <div style={styles}>hi</div>
        <h1>Hello {this.name}</h1>
        <button onClick={() => this.increment()}>Hover me</button>

        <div>count is: {this.state.count}</div>
        <div>{names.name1}</div>
        <Component1 name="Evodie" age="25" />
        <Container1 Nickname="Paradis" />
      </div>
    );
  }
}

const newclass = new App();

console.log(newclass);

export default App;
