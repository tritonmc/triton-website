import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  title: {
    textDecoration: 'none',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  itemSelected: {
    backgroundColor: 'rgba(0, 0, 0, 0.14)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.14)',
    },
  },
}));

const Header = ({ currentPage }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQueryHeaderDocs {
          site {
            siteMetadata {
              title
              description
            }
          }
          allSitePage(
            filter: {
              path: { regex: "/^/docs/.+$/" }
              pluginCreator: { name: { eq: "gatsby-plugin-mdx" } }
            }
            sort: { fields: context___frontmatter___order, order: ASC }
          ) {
            edges {
              node {
                path
                context {
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const drawer = (
          <div>
            <Hidden smDown>
              <div className={classes.toolbar} />
            </Hidden>
            <List>
              {data.allSitePage.edges.map((node) => (
                <ListItem
                  key={node.node.path}
                  button
                  component={Link}
                  to={node.node.path}
                  activeClassName={classes.itemSelected}
                >
                  <ListItemText>{node.node.context.frontmatter.title}</ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
        );

        return (
          <>
            <Helmet
              title={`${currentPage} | ${data.site.siteMetadata.title} - ${data.site.siteMetadata.description}`}
            />
            <AppBar position='fixed' className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  edge='start'
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant='h6'
                  className={classes.title}
                  component={Link}
                  to='/'
                  color='inherit'
                >
                  {`${data.site.siteMetadata.title} `}
                  <Typography variant='subtitle2' component='span'>
                    {data.site.siteMetadata.description}
                  </Typography>
                </Typography>
              </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label='documentation navigation'>
              <Hidden mdUp>
                <Drawer
                  variant='temporary'
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden smDown>
                <Drawer
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  variant='permanent'
                  open
                >
                  {drawer}
                </Drawer>
              </Hidden>
            </nav>
          </>
        );
      }}
    ></StaticQuery>
  );
};

export default Header;
