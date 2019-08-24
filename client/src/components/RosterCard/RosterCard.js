import React, { Component } from "react";
import { Card, CardTitle, Row, Col } from "react-materialize";
import "./style.css";

class RosterCard extends Component {
  render() {
    console.log("rostercard props: ", this.props);
    const playerData = () => (
      <div>
        <ul>
          <p>Team: {this.props.playerInfo.team}</p>
          <p>2-Points Made: {this.props.playerInfo.two_points_made}</p>
          <p>3-Points Made: {this.props.playerInfo.three_points_made}</p>
          <p>Free Throws Made: {this.props.playerInfo.free_throws_made}</p>
          <p>Rebounds: {this.props.playerInfo.rebounds}</p>
          <p>Assist: {this.props.playerInfo.assists}</p>
          <p>Blocks: {this.props.playerInfo.blocks}</p>
        </ul>
      </div>
    );
    return (
      <Row>
        <Col s={3}>
          <Card
            className="grey darken-4"
            id="rosterCard"
            header={<CardTitle />}
            title={this.props.playerInfo.fullname}
            reveal={<p>{playerData()}</p>}
          >
            <p>
              <i className="material-icons left waves-effect waves-light btn-x small">
                close
              </i>
            </p>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default RosterCard;
