import React, { Component } from "react";
import { ThemeProvider } from "@rmwc/theme";
import "@material/theme/dist/mdc.theme.css";
import "@material/typography/dist/mdc.typography.css";
import Header from "./Header/Header";
import NavigationDrawer from "./NavigationDrawer/NavigationDrawer";
import Home from "../Home/Home";

class App extends Component {
  render() {
    return (
      <ThemeProvider
        options={{
          primary: "#008ff8",
          secondary: "#ffa000",
        }}>
        <Header />
        <NavigationDrawer />
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
