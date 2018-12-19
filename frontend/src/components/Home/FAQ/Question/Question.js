import React, { Component } from "react";
import styles from "./Question.scss";
import OpenSansTypography from "../../../OpenSansTypography/OpenSansTypography";
import { Typography } from "@rmwc/typography";
import "@material/typography/dist/mdc.typography.css";
import { Elevation } from "@rmwc/elevation";
import "@material/elevation/dist/mdc.elevation.css";
import { GridCell } from "@rmwc/grid";
import "@material/layout-grid/dist/mdc.layout-grid.css";
import commentQuestionIcon from "../../../../img/icons/comment-question.svg";
import { Icon } from "@rmwc/icon";
import "@rmwc/icon/icon.css";

class Question extends Component {
  render() {
    return (
      <GridCell span="4">
        <Elevation z={8} className={styles.question}>
          <div className={styles.headerDiv}>
            <Icon icon={commentQuestionIcon} />
            <OpenSansTypography use="headline6">{this.props.title}</OpenSansTypography>
          </div>
          <br />
          <Typography use="body1">{this.props.children}</Typography>
        </Elevation>
      </GridCell>
    );
  }
}

export default Question;
