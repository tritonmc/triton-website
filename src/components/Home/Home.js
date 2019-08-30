import React, { Component } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Header from '../Header.js';

class Home extends Component {
  render() {
    const { body } = this.props;
    return (
      <React.Fragment>
        <Header></Header>
        <MDXRenderer>{body}</MDXRenderer>
      </React.Fragment>
    );
  }
}

export default Home;
