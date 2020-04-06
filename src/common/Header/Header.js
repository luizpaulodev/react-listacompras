import React from "react";
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Link to="/">
        <div className="header">
          <p className="title title-left">Lista de Compras</p>
        </div>
      </Link>
    </AppBar>
  );
}

export default Header;
