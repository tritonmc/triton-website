import { Divider, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { MDXProvider } from '@mdx-js/react';
import { Link as InternalLink } from 'gatsby';
import React from 'react';
import Header from '../components/HeaderDocs';
import '../styles/line-numbers.css';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const useStyles = makeStyles((theme) => ({
  root: { display: 'flex' },
  content: {
    overflow: 'auto',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  divider: {
    margin: '20px 0px',
  },
  p: {
    '& .gatsby-resp-image-wrapper': {
      margin: '20px 0px !important',
    },
  },
}));

const DocsLayout = ({ children, pageContext }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header currentPage={pageContext.frontmatter.title} />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <MDXProvider
          components={{
            p: (props) => <Typography {...props} variant='body1' className={classes.p} />,
            a: (props) => {
              let isInternal = props.href.startsWith('~');
              return (
                <Link
                  {...props}
                  component={isInternal ? InternalLink : 'a'}
                  to={props.href.substring(1)}
                  color='primary'
                />
              );
            },
            hr: (props) => <Divider {...props} className={classes.divider} />,
          }}
        >
          {children}
        </MDXProvider>
      </main>
    </div>
  );
};

export default DocsLayout;
