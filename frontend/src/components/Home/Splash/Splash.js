import React, { Component } from "react";
import styles from "./Splash.scss";
import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";
import { Button } from "@rmwc/button";
import "@material/button/dist/mdc.button.css";

class Splash extends Component {
  onLearnMoreClick() {
    document
      .querySelector("#about")
      .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  render() {
    return (
      <div className={styles.splash} id="top">
        <Typography use="headline1">Triton</Typography>
        <br />
        <Typography use="headline4">Translate Your Server</Typography>
        <div className={styles.callToAction}>
          <Button raised onClick={this.onLearnMoreClick}>
            Learn More
          </Button>
          <Button tag="a" outlined href="https://www.spigotmc.org/resources/triton.30331/">
            Buy Now
          </Button>
        </div>
      </div>
    );
  }
}

export default Splash;
