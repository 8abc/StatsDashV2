import React from "react";
import { Navbar, Button, Icon, NavItem } from "react-materialize";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = props => {
  return (
    <Navbar
      className="grey darken-4"
      brand={<span className="brand">StatsDash</span>}
      alignLinks="right"
    >
      {props.user.id ? (
        // between ? : will show if true
        <div>
          <NavItem href="/">
            <Button className="blue accent-3" id="navButton" node="a">
              Home
              <Icon right>home</Icon>
            </Button>
          </NavItem>
          <NavItem href="/dashboard">
            <Button className="blue accent-3" id="navButton" node="a">
              Dashboard
              <Icon right>dashboard</Icon>
            </Button>
          </NavItem>
        </div>
      ) : (
        <div>
          <Button
            href="/login"
            className="blue accent-3"
            id="authButton"
            node="a"
          >
            Login
            <Icon right>person</Icon>
          </Button>
          <Button
            href="/register"
            className="blue accent-3"
            id="authButton"
            node="a"
          >
            Register
            <Icon right>person_add</Icon>
          </Button>
        </div>
      )}
    </Navbar>
  );
};
export default NavBar;
