import React, { Component } from "react";
import styles from "./GetSupport.scss";
import OpenSansTypography from "../../OpenSansTypography/OpenSansTypography";
import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";
import Container from "../../Container/Container";
import "@material/layout-grid/dist/mdc.layout-grid.css";

class GetSupport extends Component {
  render() {
    return (
      <Container id="support">
        <OpenSansTypography use="headline4">Get Support</OpenSansTypography>
        <p>
          <Typography use="body1">
            To get support, you can either{" "}
            <a
              href="https://www.spigotmc.org/members/rexcantor64.165436/"
              target="_blank"
              rel="noopener noreferrer">
              DM me on Spigot
            </a>{" "}
            or email <a href="mailto:me@rexcantor64.com">me@rexcantor64.com</a>.
          </Typography>
        </p>
        <p>
          <Typography use="body1">
            Alternatively, you can get support from the community by joining our Discord server:
          </Typography>
        </p>
        <div className={styles.responsiveWrapper}>
          <iframe
            src="https://discordapp.com/widget?id=395565283047374850&theme=dark"
            allowtransparency="true"
            frameBorder="0"
            title="Discord"
            className={styles.responsiveWidget}
          />
        </div>
      </Container>
    );
  }
}

export default GetSupport;
