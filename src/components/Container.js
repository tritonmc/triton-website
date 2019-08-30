import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: '70%',
    padding: '30px 10px 0px 10px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
}));

const Container = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default Container;
