import React, { Component } from "react";
import styles from "./FAQ.scss";
import OpenSansTypography from "../../OpenSansTypography/OpenSansTypography";
import Container from "../../Container/Container";
import Question from "./Question/Question";
import { Grid } from "@rmwc/grid";
import "@material/layout-grid/dist/mdc.layout-grid.css";

class FAQ extends Component {
  render() {
    return (
      <Container id="faq">
        <OpenSansTypography use="headline4">Frequently Asked Questions</OpenSansTypography>
        <Grid className={styles.questionContainer}>
          <Question title="If the API is free, why would I pay for the plugin?">
            The API does not contain any plugin code or functionality, it simply contains the
            documentation and names of methods - allowing a developer to compile their own plugin.
            The API does nothing by itself and will not function as a plugin.
          </Question>
          <Question title="Where can I request features?">
            You can open an "issue" on our{" "}
            <a href="/github_issues" target="_blank">
              GitHub
            </a>{" "}
            or visit our{" "}
            <a href="/discord" target="_blank">
              Discord server
            </a>
            .
          </Question>
          <Question title="Where are the commands/permissions and installation instructions?">
            They are in our documentation. Take a look <a href="/docs">here</a>.
          </Question>
          <Question title="When I try to use specials characters like (ãáàçñ, etc) on the languages.json file, some weird characters appear.">
            There is a problem with the encoding of the file. Try another encoding.
          </Question>
          <Question title="The plugin isn't working for me or I have some issue.">
            For any questions, join our{" "}
            <a href="/discord" target="_blank">
              Discord
            </a>{" "}
            server. If you've found a bug, please open an issue on our{" "}
            <a href="/github_issues" target="_blank">
              GitHub
            </a>
            .
          </Question>
        </Grid>
      </Container>
    );
  }
}

export default FAQ;
