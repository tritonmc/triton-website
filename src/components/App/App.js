import React, { Component } from "react";
import { ThemeProvider } from "@rmwc/theme";
import "@material/theme/dist/mdc.theme.css";
import "@material/typography/dist/mdc.typography.css";
import Header from "./Header/Header";
import Home from "../Home/Home";
import Documentation from "../Documentation/Documentation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider
          options={{
            primary: "#008ff8",
            secondary: "#d84315",
          }}>
          <Header />
          <Switch>
            <Route path="/docs/:page?" component={Documentation} />
            <Route component={Home} />
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
