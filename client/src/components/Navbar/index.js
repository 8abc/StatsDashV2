import React from "react";
import { Navbar, Button, Icon, NavItem } from "react-materialize";
import "./style.css";

const NavBar = props => {
  return (
    <Navbar
      className="grey darken-4"
      brand={<span className="brand">StatsDash</span>}
      alignLinks="right"
    >
      <NavItem href="/">
        <Button className="blue accent-3" waves="light" id="navButton">
          Home
          <Icon right>home</Icon>
        </Button>
      </NavItem>
      <NavItem href="/login">
        <Button className="blue accent-3" waves="light" id="authButton">
          Login
          <Icon right>person</Icon>
        </Button>
      </NavItem>
      <NavItem href="/register">
        <Button className="blue accent-3" waves="light" id="authButton">
          Register
          <Icon right>person_add</Icon>
        </Button>
      </NavItem>
    </Navbar>
  );
};
export default NavBar;
