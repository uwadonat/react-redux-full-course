import React, { Component } from "react";

class App extends Component {
  name = "Donat";
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
        <button>Hover me</button>
        <div>{names.name1}</div>
      </div>
    );
  }
}

const newclass = new App();

console.log(newclass);

export default App;
