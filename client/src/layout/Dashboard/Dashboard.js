import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import RosterCard from "../../components/RosterCard/RosterCard";
import { Klay, Jordan } from "./Klay";
// import Footer from "./components/Footer/Footer";
import {
  Row,
  Col,
  SideNav,
  SideNavItem,
  Button,
  Icon,
  Modal,
  Card,
  CardTitle,
  TextInput
} from "react-materialize";

class Dashboard extends Component {
  state = {
    playerSearch: "",
    statSearch: "",
    players: [Klay]
  };

  componentDidMount = () => {
    //get all the players that have been save
    // add it to the state
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  searchPlayer = e => {
    e.preventDefault();
    console.log("player: ", this.state.playerSearch);
    const { players } = this.state;
    players.push(Jordan);
    this.setState({
      players
    });
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
              <i class="material-icons right">dashboard</i>
              Click Dashboard
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
              header="Search for a Player OR Stat"
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
                <TextInput
                  name="playerSearch"
                  onChange={this.handleChange}
                  icon="search"
                  placeholder="Enter exact player name"
                />
                <Button
                  type="submit"
                  className="btn waves-effect waves-light blue accent-3"
                  id="playerName"
                  waves="light"
                  onClick={this.searchPlayer}
                >
                  Submit
                  <Icon right>send</Icon>
                </Button>

                <TextInput
                  name="statSearch"
                  onChange={this.handleChange}
                  icon="search"
                  placeholder="Enter type of stat"
                />
                <Button
                  type="submit"
                  className="btn waves-effect waves-light blue accent-3"
                  id="stat"
                  waves="light"
                >
                  Submit
                  <Icon right>send</Icon>
                </Button>
              </p>
            </Modal>
          </SideNavItem>
          <SideNavItem divider />
          <SideNavItem className="logout" waves href="#!third">
            <button
              onClick={this.onLogoutClick}
              className="btn waves-effect waves-light blue accent-3"
              type="submit"
              name="action"
              id="search-button"
            >
              Logout
              <i class="material-icons right">logout</i>
            </button>
          </SideNavItem>
        </SideNav>
        {this.state.players.map((myPlayer, i) => {
          return <RosterCard playerInfo={myPlayer} key={i} />;
        })}
        {/* <RosterCard playerInfo={Klay} /> */}
        {/* <div className="roster-area">
          <div className="align-center">
            <h4 className="text-bold">My Roster</h4>
          </div>
          <Row>
            <Col s={3}>
              <Card
                className="grey darken-4"
                header={<CardTitle />}
                title="Player Name"
                reveal={["Full name: ", ]}
              >
                <p>
                  <a class="waves-effect waves-light btn-x small">
                    <i class="material-icons left">close</i>
                  </a>
                </p>
              </Card>
            </Col>
          </Row>
        </div> */}
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
