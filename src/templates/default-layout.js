import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Typography, Link, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  headings: {
    margin: '20px 0px 15px 0px',
  },
  divider: {
    margin: '20px 0px',
  },
});

const DefaultLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <MDXProvider
      components={{
        ...['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce((map, v) => {
          map[v] = (props) => (
            <Typography {...props} variant={v} className={classes.headings}></Typography>
          );
          return map;
        }, {}),
        p: (props) => <Typography {...props} variant='body1' />,
        a: (props) => <Link {...props} color='primary' />,
        hr: (props) => <Divider {...props} className={classes.divider} />,
      }}
    >
      {children}
    </MDXProvider>
  );
};

export default DefaultLayout;
