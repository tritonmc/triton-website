import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '50vh',
    textAlign: 'center',
    paddingTop: '150px',
    paddingBottom: '50px',
    background:
      'linear-gradient(0deg, rgba(19,45,130,1) 0%, rgba(24,74,157,1) 14%, rgba(0,143,248,1) 100%)',
    color: 'white',
  },
  button: {
    margin: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Splash = ({ title, subtitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h1'>{title}</Typography>
      <Typography variant='h3'>{subtitle}</Typography>
      <br />
      <Button variant='contained' color='primary' className={classes.button}>
        Learn More
      </Button>
      <Button variant='contained' color='primary' className={classes.button}>
        Buy Now
      </Button>
    </div>
  );
};

export default Splash;
