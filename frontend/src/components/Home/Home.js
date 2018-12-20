import React, { Component } from "react";
//import styles from "./Home.scss";
import NavigationDrawer from "./NavigationDrawer/NavigationDrawer";
import Splash from "./Splash/Splash";
import WhyTriton from "./WhyTriton/WhyTriton";
import Features from "./Features/Features";
import FAQ from "./FAQ/FAQ";
import GetSupport from "./GetSupport/GetSupport";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationDrawer />
        <Splash />
        <WhyTriton />
        <Features />
        <FAQ />
        <GetSupport />
      </React.Fragment>
    );
  }
}

export default Home;
