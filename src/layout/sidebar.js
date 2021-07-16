import React from "react";
import clsx from "clsx";
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EmailIcon from '@material-ui/icons/Email';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CategoryIcon from '@material-ui/icons/Category';
import NoteIcon from '@material-ui/icons/Note';
import EventIcon from '@material-ui/icons/Event';
import Badge from "@material-ui/core/Badge";
import avatar1 from "../assets/imgs/avatars/avatar1.jpg";
import avatar2 from "../assets/imgs/avatars/avatar2.jpg";
import avatar3 from "../assets/imgs/avatars/avatar3.jpg";
import Link from "@material-ui/core/Link";
import Button from '@material-ui/core/Button';
// import { mainListItems, secondaryListItems } from "./listItems";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 8px",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  menuButtonHidden: {
    display: "none"
  },
  listItem: {
    borderLeftWidth: 3,
    borderLeftStyle: 'solid',
    borderLeftColor: theme.palette.primary.main,
    backgroundColor: 'rgba(0, 0, 0, 0.04)'
  },
  badge: {
    '& .MuiBadge-badge': {
      color: '#fff'
    }
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: '50%',
  },
  friends: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 72,
    paddingRight: 16,
    marginBottom: 20
  },
  seeAll: {
    paddingLeft: 72,
    paddingRight: 16
  },
  button: {
    margin: theme.spacing(1),
    color: '#fff',
    marginTop: 50
  }
}));

export default function SideBar(props) {
  const { open, current } = props;
  const classes = useStyles();
  const mainListItems = [
    {
      name: 'Dashboard',
      url: '/',
      icon: <DashboardIcon />
    },
    {
      name: 'Inbox',
      url: '/inbox',
      icon: <EmailIcon />
    },
    {
      name: 'Pinned',
      url: '/pinned',
      icon: <BookmarkIcon />
    },
    {
      name: 'Draft',
      url: '/draft',
      icon: <DraftsIcon />
    },
    {
      name: 'Categories',
      url: '/categories',
      icon: <CategoryIcon />
    },
    {
      name: 'Notes',
      url: '/notes',
      icon: <NoteIcon />
    },
    {
      name: 'Reminders',
      url: '/reminders',
      icon: <EventIcon />
    },
  ];
  const friends = [ avatar1, avatar2, avatar3 ];
  const history = useHistory();

  const itemClicked = (url) => {
    history.push(url);
  }

  const showAllFriends = () => {

  }

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <Button variant="contained" size="large" color="primary" className={classes.button}>
          Create New
        </Button>
      </div>
      <List>
        <ListSubheader inset>Messages</ListSubheader>
        {mainListItems.map(item => (
          <ListItem button key={`main-${item.name}`} onClick={() => itemClicked(item.url)} className={clsx(current === item.name && classes.listItem)}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
            {item.name === "Inbox" && <Badge badgeContent={2} color="primary" className={classes.badge}></Badge>}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader inset>Friends</ListSubheader>
        <div className={classes.friends}>
          {friends.map((friend, index) => (
            <img src={friend} className={classes.avatar} key={`friend-${index}`} alt={`friend-${index}`} />
          ))}
        </div>
        <Link className={classes.seeAll} color="primary" href="#" onClick={showAllFriends}>
          See all
        </Link>
      </List>
    </Drawer>
  );
}
