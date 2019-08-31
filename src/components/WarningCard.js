import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import WarningIcon from '@material-ui/icons/WarningRounded';

const useStyles = makeStyles({
  root: {
    background: '#ffa000',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: '5px',
    },
    width: 'fit-content',
    margin: '20px 0',
  },
});

const InfoCard = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <WarningIcon />
      <div>{children}</div>
    </Paper>
  );
};

export default InfoCard;
