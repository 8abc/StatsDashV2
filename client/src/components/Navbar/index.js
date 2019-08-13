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
      <NavItem href="/">
        <Button waves="light" id="navButton" node="a">
          Home
          <Icon right>home</Icon>
        </Button>
      </NavItem>
      <NavItem href="/dashboard">
        <Button waves="light" id="navButton" node="a">
          Dashboard
          <Icon right>dashboard</Icon>
        </Button>
      </NavItem>
      <NavItem href="/login">
        <Button waves="light" id="authButton" node="a">
          Login
          <Icon right>person</Icon>
        </Button>
      </NavItem>
      <NavItem href="/register">
        <Button waves="light" id="authButton" node="a">
          Register
          <Icon right>person_add</Icon>
        </Button>
      </NavItem>
    </Navbar>
  );
};
export default NavBar;
