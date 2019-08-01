import React from "react";
import "./style.css";

const Jumbotron = props => {
  return (
    <div className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">StatsDash</h1>
        <p className="lead text-muted">
          Provides in-depth player statistics for all your favorite sports,
          players, team and real-time player stats and custom stats.
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
