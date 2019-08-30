import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, withStyles } from '@material-ui/styles';
import { graphql, Link, StaticQuery } from 'gatsby';
import DocsIcon from '@material-ui/icons/BookRounded';
import APIIcon from '@material-ui/icons/DeveloperBoardRounded';
import React from 'react';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };
  }

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    const { classes } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={(data) => (
          <div className={classes.root}>
            <AppBar position='static'>
              <Toolbar>
                <Hidden smUp>
                  <IconButton
                    edge='start'
                    className={classes.menuButton}
                    color='inherit'
                    aria-label='menu'
                    onClick={this.toggleDrawer}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Sidebar open={this.state.drawerOpen} toggle={this.toggleDrawer} />
                </Hidden>
                <Typography variant='h6' className={classes.title}>
                  {`${data.site.siteMetadata.title} `}
                  <Typography variant='subtitle2' component='span'>
                    {data.site.siteMetadata.description}
                  </Typography>
                </Typography>
                <Hidden xsDown>
                  <Button color='inherit' component={Link} to='/docs'>
                    Documentation
                  </Button>
                  <Button color='inherit' component='a' href='/api'>
                    API for Developers
                  </Button>
                </Hidden>
              </Toolbar>
            </AppBar>
          </div>
        )}
      ></StaticQuery>
    );
  }
}

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(1),
  },
  list: {
    width: 250,
  },
}));

const Sidebar = ({ open, toggle }) => {
  const classes = useStyles();
  return (
    <Drawer open={open} onClose={toggle}>
      <div className={classes.title}>
        <Typography variant='h6'>Triton</Typography>
        <Typography variant='subtitle2' color='textSecondary'>
          Translate your server
        </Typography>
      </div>
      <Divider />
      <List className={classes.list}>
        <ListItem button component={Link} to='/docs'>
          <ListItemIcon>
            <DocsIcon />
          </ListItemIcon>
          <ListItemText>Documentation</ListItemText>
        </ListItem>
        <ListItem button component='a' href='/api'>
          <ListItemIcon>
            <APIIcon />
          </ListItemIcon>
          <ListItemText>API for Developers</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(Header);
