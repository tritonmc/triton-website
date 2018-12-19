import React, { Component } from "react";
//import styles from "./WhyTriton.scss";
import OpenSansTypography from "../../OpenSansTypography/OpenSansTypography";
import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";
import "@material/button/dist/mdc.button.css";
import Container from "../../Container/Container";

class WhyTriton extends Component {
  render() {
    return (
      <Container id="about">
        <OpenSansTypography use="headline4">Why Triton?</OpenSansTypography>
        <p>
          Do you own an international Minecraft server? Would you like to send each player, messages
          in their own language?
          <br />
          Well, look no further! Triton offers this among a whole host of other awesome features!
          This plugin uses a placeholder which will be replaced (dynamically, per player) with a
          message defined in the language file.
        </p>
        <p>
          Triton works with any plugin
          <sup>1</sup> that allows customization of messages.
        </p>
        <Typography use="caption">
          <sup>1 </sup>
          We don't promise it to work with literally all plugins, but most of them should work.
        </Typography>
      </Container>
    );
  }
}

export default WhyTriton;
