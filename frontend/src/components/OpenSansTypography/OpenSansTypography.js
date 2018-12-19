import React, { Component } from "react";
import styles from "./OpenSansTypography.scss";
import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";

class OpenSansTypography extends Component {
  render() {
    return <Typography className={styles.openSansTypography} {...this.props} />;
  }
}

export default OpenSansTypography;
