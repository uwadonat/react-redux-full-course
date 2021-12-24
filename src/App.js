import React, { Component } from "react";

class App extends Component {
  name = "Donat";
  render() {
    return (
      <div>
        <h1>Hello {this.name}</h1>
        <button>Hover me</button>
      </div>
    );
  }
}

const newclass = new App();

console.log(newclass);

export default App;
