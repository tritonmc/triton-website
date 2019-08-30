import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/DoneRounded';

const useStyles = makeStyles({
  icon: {
    color: '#008000',
  },
});

const FeatureItem = ({ children }) => {
  const classes = useStyles();
  return (
    <ListItem>
      <ListItemIcon>
        <DoneIcon className={classes.icon} />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </ListItem>
  );
};

export default FeatureItem;
