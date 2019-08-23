import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import RosterCard from "../../components/RosterCard/RosterCard";
import { Klay, Jordan } from "./Klay";
// import Footer from "./components/Footer/Footer";
import {
  SideNav,
  SideNavItem,
  Button,
  Icon,
  Modal,
  TextInput,
  Checkbox
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

  // api autocomplete

  // searchPlayer = (searchData) => {
  //   return axios("/api/search", searchData).then(players => {
  //     this.setState({
  //       players: players
  //     });
  //   });
  // };

  // onSubmit = () => {
  //   e.preventDefault();
  //   const searchData = {
  //     player: this.state.playerSearch,
  //     stat: this.state.statSearch
  //   };
  //   this.searchPlayer(searchData);
  // };

  // lodash debounce or throttle
  // onChange = e => {
  // this.setState(
  //   {
  //     [e.target.name]: e.target.value
  //   },
  //   () => {
  //     this.searchPlayer();
  //   }
  // );

  // ========
  //   const { players, ...searchData } = this.state;
  //   searchData[e.target.name] = e.target.value;
  //   this.setState({ [e.target.name]: e.target.value });
  //   this.searchPlayer(searchData);
  // };

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
              header="Search for a Player OR Select a Type of Stat"
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
                <div>
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
                </div>
                <div className="statsCheckbox">
                  <hr />
                  <Checkbox value="Red" label="2-Points Made" />
                  <Checkbox value="Red" label="3-Points Made" />
                  <Checkbox value="Red" label="Free Throws Made" />
                  <Checkbox value="Red" label="Rebounds" />
                  <Checkbox value="Red" label="Assist" />
                  <Checkbox value="Red" label="Blocks" />
                </div>

                {/* <Button
                  type="submit"
                  className="btn waves-effect waves-light blue accent-3"
                  id="stat"
                  waves="light"
                >
                  Submit
                  <Icon right>send</Icon>
                </Button> */}
              </p>
              {/* put all search results here */}
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
