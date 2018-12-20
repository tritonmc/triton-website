import React, { Component } from "react";
import styles from "./NavigationItem.scss";
import { connect } from "react-redux";
import "@material/list/dist/mdc.list.css";
import { ListItem, ListItemGraphic } from "@rmwc/list";
import { setDrawerState } from "../../../../actions/navigationActions";
import { Link } from "react-router-dom";

class NavigationItem extends Component {
  render() {
    return (
      <div onClick={this.props.closeDrawer} className={styles.navItem}>
        <Link to={this.props.to}>
          <ListItem>
            {this.props.icon && <ListItemGraphic icon={this.props.icon} />}
            {this.props.children}
          </ListItem>
        </Link>
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
