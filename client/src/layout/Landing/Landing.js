import React, { Component } from "react";
// import { Parallax, Background } from "react-parallax";
import { Parallax, Row, Col } from "react-materialize";
import "./style.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <Parallax className="parallax-image" image={<img />} />
        <div className="section white">
          <div className="row container">
            <div className="align-center">
              <h4 className="text-bold">About</h4>
              <p className="black-text">
                We provide in-depth player statistics for all your favorite
                sports, players, and custom stats.
              </p>
            </div>
            <div className="align-center">
              <h4 className="text-bold">Services</h4>
              <p className="black-text">
                A statistic dashboard that allows you to compare players in the
                NBA roster for strategic creation of fantasy league teams.
              </p>
            </div>
          </div>
        </div>

        <Parallax className="parallax-image2" image={<img />} />
        <div className="section white">
          <div className="row container">
            <h4 className="text-bold">Our Team</h4>
            <h5 className="grey-text text-darken-3 lighten-3">
              <Col s={4} className="black-text">
                Anadelaine Catalla
              </Col>
              <Col s={4} className="black-text">
                Beccy Valentine
              </Col>
              <Col s={4} className="black-text">
                Alexander Sigala
              </Col>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
