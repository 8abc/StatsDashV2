import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import RosterCard from "./components/RosterCard/RosterCard";
// import Footer from "./components/Footer/Footer";
import {
  Row,
  Col,
  SideNav,
  SideNavItem,
  Button,
  Navbar,
  NavItem,
  Icon,
  Modal,
  Select,
  RadioGroup,
  onChange,
  Card,
  CardTitle
} from "react-materialize";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <SideNav
          trigger={
            <Button
              className="blue accent-3"
              waves="light"
              id="navButton2"
              node="a"
            >
              Dashboard
              <Icon right>dashboard</Icon>
            </Button>
          }
          options={{ closeOnClick: true }}
          className="dashboardButton"
        >
          <SideNavItem
            userView
            user={{
              background: "https://placeimg.com/640/480/tech",
              image:
                "https://st2.depositphotos.com/thumbs/4398873/vector/7554/75546059/api_thumb_450.jpg"
            }}
          />
          <SideNavItem href="#!icon" icon="person">
            <b>Hey there,</b> {user.name.split(" ")[0]}
          </SideNavItem>

          <SideNavItem href="#!second">
            <Modal
              header="Search"
              trigger={
                <button
                  className="btn waves-effect waves-light blue accent-3"
                  type="submit"
                  name="action"
                  id="search-button"
                >
                  Search
                  <i class="material-icons right">search</i>
                </button>
              }
            >
              <p>
                <Select multiple value={[""]}>
                  <option value="" disabled>
                    Select what you want to
                  </option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </Select>
              </p>
            </Modal>
          </SideNavItem>
          <SideNavItem divider />
          <SideNavItem className="logout" waves href="#!third">
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </SideNavItem>
        </SideNav>
        {/* <RosterCard /> */}
        <div className="roster-area">
          <div className="align-center">
            <h4 className="text-bold">My Roster</h4>
          </div>
          <Row>
            <Col s={3}>
              <Card
                className="grey darken-4"
                header={<CardTitle />}
                title="Player Name"
                reveal={"jdjkvsjdn sweej3e93"}
              >
                <p>
                  <a class="waves-effect waves-light btn-x small">
                    <i class="material-icons left">close</i>
                  </a>
                </p>
              </Card>
            </Col>
            <Col s={3}>
              <Card
                className="grey darken-4"
                header={<CardTitle />}
                title="Player Name"
                reveal={"jdjkvsjdn sweej3e93"}
              >
                <p>
                  <a class="waves-effect waves-light btn-x small">
                    <i class="material-icons left">close</i>
                  </a>
                </p>
              </Card>
            </Col>
            <Col s={3}>
              <Card
                className="grey darken-4"
                header={<CardTitle />}
                title="Player Name"
                reveal={"jdjkvsjdn sweej3e93"}
              >
                <p>
                  <a class="waves-effect waves-light btn-x small">
                    <i class="material-icons left">close</i>
                  </a>
                </p>
              </Card>
            </Col>
            <Col s={3}>
              <Card
                className="grey darken-4"
                header={<CardTitle />}
                title="Player Name"
                reveal={"jdjkvsjdn sweej3e93"}
              >
                <p>
                  <a class="waves-effect waves-light btn-x small">
                    <i class="material-icons left">close</i>
                  </a>
                </p>
              </Card>
            </Col>
          </Row>
        </div>
        {/* <Row>
          <Col s={4} className="light grey white-text">
            Compare Cards
          </Col>
          <Col s={4} className="light grey white-text">
            Compare Cards
          </Col>
          <Col s={4} className="light grey white-text">
            Compare Cards
          </Col>
        </Row> */}
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
