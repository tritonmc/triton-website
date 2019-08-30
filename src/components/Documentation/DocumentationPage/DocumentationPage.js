import React, { Component } from "react";
import styles from "./DocumentationPage.scss";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { CircularProgress } from "@rmwc/circular-progress";
import "@rmwc/circular-progress/circular-progress.css";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import Container from "../../Container/Container";

export class DocumentationPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async setCurrentPage(page) {
    this.setState({ content: undefined, error: undefined });
    try {
      var response = await axios.get("/documentation/page/" + page);
      this.setState({ content: response.data });
    } catch (e) {
      this.setState({ error: true });
      console.error(e);
    }
  }

  componentDidMount() {
    var page = this.props.page || "";
    if (page.length !== 0) this.setCurrentPage(page);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.page !== this.props.page) this.setCurrentPage(this.props.page);
  }

  routerLink(props) {
    return props.href.startsWith("/docs/") ? (
      <Link to={props.href}>{props.children}</Link>
    ) : (
      <a href={props.href}>{props.children}</a>
    );
  }

  render() {
    if ((!this.props.page || this.props.page.length === 0) && this.props.defaultPage.length !== 0)
      return <Redirect to={"/docs/" + this.props.defaultPage} />;
    if (this.state.error)
      return (
        <div className={[styles.container, styles.centerContainer].join(" ")}>
          <Container>
            <p>Page not found</p>
          </Container>
        </div>
      );
    if (!this.state.content)
      return (
        <div className={[styles.container, styles.centerContainer].join(" ")}>
          <Container>
            <CircularProgress size={72} />
          </Container>
        </div>
      );
    return (
      <div className={styles.container}>
        <Container>
          <ReactMarkdown
            className={styles.markdown}
            source={this.state.content}
            escapeHtml={false}
            renderers={{ link: this.routerLink }}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ defaultPage: state.documentation.get("defaultPage", "") });

export default connect(mapStateToProps)(DocumentationPage);
