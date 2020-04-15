import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";

import Header from "./common/Header";
import Home from "./pages/Home";
import CreateList from "./pages/CreateList";

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

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/lista/:action" component={CreateList} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
