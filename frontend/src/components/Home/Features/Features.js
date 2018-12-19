import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Features.scss";
import OpenSansTypography from "../../OpenSansTypography/OpenSansTypography";
import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";
import "@material/button/dist/mdc.button.css";
import Container from "../../Container/Container";
import { List, ListItem, ListItemGraphic } from "@rmwc/list";

class Features extends Component {
  render() {
    return (
      <Container id="features">
        <OpenSansTypography use="headline4">Features</OpenSansTypography>
        <p>
          <strong>IMPORTANT NOTE:</strong> Triton is <strong>not</strong> an automatic/mahine
          translator. <strong>All</strong> messages must be configured manually in the desired
          language.
        </p>
        <List className={styles.featureList}>
          <ListItem>
            <ListItemGraphic icon="check" />
            <span>
              Translate any chat message, action bar, title/subtitle, inventory titles, scoreboards,
              holograms, NPC names, kick/ban messages, tab header/footers, custom tabs, item
              names/lores, signs and bossbars
              <sup>2</sup>.
            </span>
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="check" />
            Unlimited languages
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="check" />
            Dynamic values in translated messages
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="check" />
            BungeeCord support
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="check" />
            Unlimited languages
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="check" />
            API for developers
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="check" />
            Language GUI selector with flags
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="check" />
            <span>
              Edit your messages online with TWIN (<strong>T</strong>
              riton <strong>W</strong>
              eb <strong>IN</strong>
              terface)
            </span>
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="check" />
            Reload your config in-game without restarting your server
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="check" />
            Change how the placeholder looks depending on the type of message (chat, scoreboard,
            item, etc)
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="check" />
            Change another player's language using commands
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="check" />
            Run commands when a player changes their language
          </ListItem>
        </List>
        <Typography use="caption">
          <sup>2 </sup>
          Bossbar translation requires Spigot 1.9+
        </Typography>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ activeSection: state.navigation.get("activeSection", "") });

export default connect(mapStateToProps)(Features);
