import React from "react";
import { MuiThemeProvider, AppBar, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E91E63",
    },
    secondary: {
      main: "#00B0FF",
    },
  },
});

function Header() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <div className="header">
          <p className="title">Lista de Compras</p>
        </div>
      </AppBar>
    </MuiThemeProvider>
  );
}

export default Header;
