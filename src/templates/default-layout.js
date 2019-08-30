import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  headings: {
    margin: '20px 0px 15px 0px',
  },
});

const DefaultLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <MDXProvider
      components={{
        h4: (props) => (
          <Typography {...props} variant='h4' className={classes.headings}></Typography>
        ),
        p: (props) => <Typography {...props} variant='body1'></Typography>,
        a: (props) => <Link {...props} color='primary'></Link>,
      }}
    >
      {children}
    </MDXProvider>
  );
};

export default DefaultLayout;
