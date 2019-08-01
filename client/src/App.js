import React, { Component } from "react";
import Nav from "../src/components/Nav";
import Jumbotron from "../src/components/Jumbotron";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
