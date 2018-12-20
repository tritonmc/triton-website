import React, { Component } from "react";
//import styles from "./Documentation.scss";
import NavigationDrawer from "./NavigationDrawer/NavigationDrawer";
import DocumentationPage from "./DocumentationPage/DocumentationPage";

class Documentation extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationDrawer />
        <DocumentationPage page={this.props.match.params.page} />
      </React.Fragment>
    );
  }
}

export default Documentation;
