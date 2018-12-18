import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Header.scss";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarTitle,
} from "@rmwc/top-app-bar";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import { toggleDrawer } from "../../../actions/navigationActions";

class Header extends Component {
  render() {
    return (
      <TopAppBar short>
        <TopAppBarRow>
          <TopAppBarSection>
            <TopAppBarNavigationIcon icon="menu" onClick={this.props.toggleDrawer} />
            <TopAppBarTitle>
              Triton
              <span className={styles.brandTagline}>Translate Your Server</span>
            </TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: () => dispatch(toggleDrawer()),
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
