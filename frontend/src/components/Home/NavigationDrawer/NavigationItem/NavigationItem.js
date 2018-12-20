import React, { Component } from "react";
import styles from "./NavigationItem.scss";
import { connect } from "react-redux";
import "@material/list/dist/mdc.list.css";
import { ListItem, ListItemGraphic } from "@rmwc/list";
import { setDrawerState } from "../../../../actions/navigationActions";
import ScrollIntoView from "react-scroll-into-view";

class NavigationItem extends Component {
  render() {
    return (
      <div onClick={this.props.closeDrawer} className={styles.navItem}>
        <ScrollIntoView selector={this.props.selector} smooth alignToTop>
          <ListItem>
            <ListItemGraphic icon={this.props.icon} />
            {this.props.children}
          </ListItem>
        </ScrollIntoView>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  closeDrawer: () => dispatch(setDrawerState(false)),
});

export default connect(
  null,
  mapDispatchToProps
)(NavigationItem);
