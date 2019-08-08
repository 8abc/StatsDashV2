import React from "react";
import { Navbar, Button, Icon } from "react-materialize";

const Nav = props => {
  const { brand } = props;
  return (
    <Navbar brand={brand} alignLinks="right">
      <Button node="/">button</Button>
      <Button node="/">
        button
        <Icon right>cloud</Icon>
      </Button>
      <Button node="/" large>
        large button
      </Button>
    </Navbar>
  );
};

export default Nav;
