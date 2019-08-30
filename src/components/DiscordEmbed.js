import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: 550,
    marginTop: 20,
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 500,
    border: 0,
  },
});

const DiscordEmbed = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <iframe
        src='https://discordapp.com/widget?id=395565283047374850&theme=dark'
        allowtransparency='true'
        frameBorder='0'
        title='Discord'
        className={classes.iframe}
      />
    </div>
  );
};

export default DiscordEmbed;
