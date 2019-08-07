import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/CustomNav";
// import { Navbar } from "react-bootstrap";
// import Jumbotron from "../src/components/Jumbotron";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* <Route exact path="/login" component={Login} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
