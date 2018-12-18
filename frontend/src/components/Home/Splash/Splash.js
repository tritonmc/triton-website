import React, { Component } from "react";
import styles from "./Splash.scss";
import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";
import { Button, ButtonIcon } from "@rmwc/button";
import "@material/button/dist/mdc.button.css";

class Splash extends Component {
  render() {
    return (
      <div className={styles.splash}>
        <Typography use="headline1">Triton</Typography>
        <br />
        <Typography use="headline4">Translate Your Server</Typography>
        <div className={styles.callToAction}>
          <Button raised>Learn More</Button>
          <Button outlined>Buy Now</Button>
        </div>
      </div>
    );
  }
}

export default Splash;
