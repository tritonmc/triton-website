import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import InfoIcon from '@material-ui/icons/InfoRounded';

const useStyles = makeStyles({
  root: {
    background: '#1976d2',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: '5px',
    },
  },
});

const InfoCard = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <InfoIcon />
      <div>{children}</div>
    </Paper>
  );
};

export default InfoCard;
