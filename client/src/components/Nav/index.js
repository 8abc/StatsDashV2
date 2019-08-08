import React from "react";
import { Navbar, NavItem } from "react-materialize";

const Nav = props => {
  const { brand } = props;
  return (
    <Navbar brand={brand} alignLinks="right">
      <NavItem href="/">Getting started</NavItem>
      <NavItem href="/register">Components</NavItem>
    </Navbar>
  );
};

export default Nav;
