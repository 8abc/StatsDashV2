import React from "react";
import { Card, CardTitle, Row, Col } from "react-materialize";

class RosterCard extends Component {
  render() {
    return (
      <Row>
        <Col m={6} s={12}>
          <Card header={<CardTitle />} title="Card Title" reveal={<p />}>
            <p>
              <a href="#">This is a link</a>
            </p>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default RosterCard;
