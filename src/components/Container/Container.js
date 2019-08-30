import React, { Component } from "react";
import styles from "./Container.scss";

class Container extends Component {
  render() {
    return (
      <div id={this.props.id} className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
