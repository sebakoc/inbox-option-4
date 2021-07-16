import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from "@material-ui/icons/Notifications";
import avatar from "../assets/imgs/avatars/avatar1.jpg";
import { EmailContext } from "../context/EmailContextContainer";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    justifyContent: 'space-between'
  },
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonSelected: {
    background: '#00000040'
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '45ch',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    marginLeft: 20,
  },
  headerIcons: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default function Header(props) {
  const { handleDrawerToogle, handleThemeChange, open, darkState } = props;
  const classes = useStyles();
  const { values, setValues } = useContext(EmailContext);

  const handleChange = (event) => {
    setValues(event.target.value);
  };

  return (
    <AppBar
      color="inherit"
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToogle}
          className={clsx(
            classes.menuButton,
            !open && classes.menuButtonSelected
          )}
        >
          <MenuIcon />
        </IconButton>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-search"
            value={values}
            onChange={handleChange}
            startAdornment={<InputAdornment position="start"><SearchIcon color="primary"/></InputAdornment>}
            labelWidth={0}
            placeholder="Search for emails..."
            size="small"
          />
        </FormControl>
        <div className={classes.headerIcons}>
          <Switch checked={darkState} onChange={handleThemeChange} />
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <img className={classes.avatar} src={avatar} alt="avatar-img" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
