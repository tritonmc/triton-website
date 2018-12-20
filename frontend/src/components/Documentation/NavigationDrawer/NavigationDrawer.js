import React, { Component } from "react";
import styles from "./NavigationDrawer.scss";
import { connect } from "react-redux";
import "@material/drawer/dist/mdc.drawer.css";
import "@material/list/dist/mdc.list.css";
import { Drawer, DrawerHeader, DrawerContent, DrawerTitle, DrawerSubtitle } from "@rmwc/drawer";
import { List, ListDivider } from "@rmwc/list";
import { setDrawerState } from "../../../actions/navigationActions";
import { setDocumentationDefaultPage } from "../../../actions/documentationActions";
import NavigationItem from "./NavigationItem/NavigationItem";
import { CircularProgress } from "@rmwc/circular-progress";
import "@rmwc/circular-progress/circular-progress.css";
import axios from "axios";

class NavigationDrawer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    try {
      var response = await axios.get("/documentation/list");
      this.setState({ items: response.data.pages });
      this.props.setDefaultPage(response.data.default);
    } catch (e) {
      console.error(e);
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <Drawer modal open={this.props.open} onClose={this.props.closeDrawer}>
        <DrawerHeader>
          <DrawerTitle>Documentation</DrawerTitle>
          <DrawerSubtitle>Triton &mdash; Translate Your Server</DrawerSubtitle>
        </DrawerHeader>
        <DrawerContent>
          <List>
            <NavigationItem to="/" icon="home">
              Home
            </NavigationItem>
            <ListDivider />
            {!this.state.items ? (
              <div className={styles.loadingIcon}>
                {this.state.error ? (
                  <span>An error occurred while fetching the documentation index</span>
                ) : (
                  <CircularProgress size="xlarge" />
                )}
              </div>
            ) : (
              this.state.items.map((item) => (
                <NavigationItem key={item.page} to={"/docs/" + item.page}>
                  {item.name}
                </NavigationItem>
              ))
            )}
          </List>
        </DrawerContent>
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => ({
  open: state.navigation.get("drawer", false),
});

const mapDispatchToProps = (dispatch) => ({
  closeDrawer: () => dispatch(setDrawerState(false)),
  setDefaultPage: (page) => dispatch(setDocumentationDefaultPage(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationDrawer);
