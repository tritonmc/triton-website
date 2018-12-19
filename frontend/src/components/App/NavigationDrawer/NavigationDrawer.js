import React, { Component } from "react";
import { connect } from "react-redux";
import "@material/drawer/dist/mdc.drawer.css";
import "@material/list/dist/mdc.list.css";
import { Drawer, DrawerHeader, DrawerContent, DrawerTitle, DrawerSubtitle } from "@rmwc/drawer";
import { List, ListItem, ListItemGraphic, ListDivider } from "@rmwc/list";
import { setDrawerState } from "../../../actions/navigationActions";
import commentQuestionIcon from "../../../img/icons/comment-question.svg";
import fileDocumentIcon from "../../../img/icons/file-document.svg";
import NavigationItem from "./NavigationItem/NavigationItem";

class NavigationDrawer extends Component {
  render() {
    return (
      <Drawer modal open={this.props.open} onClose={this.props.closeDrawer}>
        <DrawerHeader>
          <DrawerTitle>Triton</DrawerTitle>
          <DrawerSubtitle>Translate Your Server</DrawerSubtitle>
        </DrawerHeader>
        <DrawerContent>
          <List>
            <NavigationItem icon="home" selector="#top">
              Home
            </NavigationItem>
            <NavigationItem icon="where_to_vote" selector="#about">
              Why Triton?
            </NavigationItem>
            <NavigationItem icon="star" selector="#features">
              Features
            </NavigationItem>
            <NavigationItem icon={commentQuestionIcon} selector="#faq">
              FAQ
            </NavigationItem>
            <NavigationItem icon="help" selector="#support">
              Get Support
            </NavigationItem>
            <ListDivider />
            <ListItem>
              <ListItemGraphic icon={fileDocumentIcon} />
              Documentation
            </ListItem>
            <ListItem>
              <ListItemGraphic icon="developer_board" />
              API for Developers
            </ListItem>
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationDrawer);
