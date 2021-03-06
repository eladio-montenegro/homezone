import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListAltIcon from '@material-ui/icons/ListAlt';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const LogOut=()=> {

    localStorage.setItem("kidid", "");
    localStorage.setItem("parentkidprofile", "");
    window.location.href = "/home";
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      
      <List>
     <a onClick={LogOut}><img class="" src="img/hey.png" style={{width:'80px',display: 'block',marginLeft:'auto',marginRight:'auto',marginBottom:'40px'}}></img></a>
     <a  href="/kidportal" > <ListItem button key="Dashboard"> <ListItemIcon> <DashboardIcon/> </ListItemIcon> <ListItemText style={{color:'black'}}>Goal Dashboard</ListItemText> </ListItem>  </a>
     <a  href="/kidhomerules" > <ListItem button key="HomeRules"> <ListItemIcon> <ListAltIcon/> </ListItemIcon> <ListItemText style={{color:'black'}}>About Family</ListItemText> </ListItem>  </a>
     <a  href="/kidprofile" > <ListItem  button key="Profile"> <ListItemIcon> <AccountCircleIcon /> </ListItemIcon> <ListItemText style={{color:'black'}}>My Profile</ListItemText> </ListItem> </a>
     <a  href="/kidjournal" > <ListItem  button key="Journal"> <ListItemIcon> <LibraryBooksIcon /> </ListItemIcon> <ListItemText style={{color:'black'}}>Sharing Journal</ListItemText> </ListItem> </a>
     <a  href="/kidnotifications" > <ListItem  button key="Notifications">  <ListItemIcon> <NotificationsIcon/> </ListItemIcon > <ListItemText style={{color:'black'}}>Notifications</ListItemText> </ListItem> </a>
     <a  href="/kidhomes" > <ListItem  button key="PastHomes"> <ListItemIcon> <QueryBuilderIcon/> </ListItemIcon> <ListItemText style={{color:'black'}} > Past Homes</ListItemText > </ListItem> </a>
 
      </List>
     <Divider/>
      <List>
      
        {['Log Out'].map((text, index) => (
          <a  onClick={LogOut} > <ListItem  button key={text}>
           
            <ListItemIcon> <ExitToAppIcon/></ListItemIcon>
            <ListItemText style={{color:'black'}} primary={text} />
          </ListItem> </a>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
           My HomeZone
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
     
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;