import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2> Welcome to StatsDash</h2>
          <p>
            Provides in-depth player statistics for all your favorite sports,
            players, team and real-time player stats and custom stats.{" "}
          </p>
        </Jumbotron>
        <Link to="/dashboard">
          <Button>StatsDash</Button>
        </Link>
      </Container>
    );
  }
}

export default Home;
