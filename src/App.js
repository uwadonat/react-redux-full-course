import React, { Component } from "react";

import Container1 from "./container/container";
import Component2 from "./components/Component2";
import Component4 from "./components/Component4";
class App extends Component {
  name = "Donat";

  state = {
    count: 0,
  };
  increment() {
    this.setState({ count: 5 });
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ count: 2 });
    }, 1000);
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

        <Container1 Nickname="Paradis" />
        <Component2 />
        <Component4 />
      </div>
    );
  }
}

const newclass = new App();

console.log(newclass);

export default App;
