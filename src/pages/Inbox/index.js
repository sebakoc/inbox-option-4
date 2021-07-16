import React, { useState, useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import RefreshIcon from '@material-ui/icons/Refresh';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PersonIcon from '@material-ui/icons/Person';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import Layout from "../../layout";
import { Button, IconButton } from "@material-ui/core";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import avatar from "../../assets/imgs/avatars/avatar1.jpg";
import { EmailContext } from "../../context/EmailContextContainer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      className="email-container"
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    '& .MuiTab-wrapper': {
      flexDirection: 'row',
      '& .MuiSvgIcon-root': {
        margin: 0,
        marginRight: 5
      }
    },
    '& .MuiTab-root': {
      flex: 1,
      minWidth: 'unset',
      minHeight: 'unset',
      padding: '10px 12px 0px 12px',
    },
    '& .email-container': {
      overflow: 'auto',
      height: 'calc(100vh - 194px)'
    }
  },
  grid: {
    paddingTop: 10,
    display: 'flex'
  },
  refreshButton: {
    borderRadius: '50%',
    maxWidth: 40,
    minWidth: 40,
    height: 40
  },
  RefreshIcon: {
    color: '#fff'
  },
  badge: {
    marginLeft: 20,
    '& .MuiBadge-badge': {
    backgroundColor: 'lightGray'
    }
  },
  leftHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  prev: {
    marginLeft: 10
  },
  emailSection: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 20,
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    '&:hover': {
      borderLeftWidth: 3,
      borderLeftStyle: 'solid',
      borderLeftColor: theme.palette.primary.main,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      cursor: 'pointer'
    },
  },
  emailSelected: {
    borderLeftWidth: 3,
    borderLeftStyle: 'solid',
    borderLeftColor: theme.palette.primary.main,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  emailHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
    '& .left': {
      display: 'flex',
      '& .avatar': {
        width: 50,
        height: 50,
        borderRadius: '50%',
        marginRight: 10
      },
      '& .new-circle': {
        width: 15,
        height: 15,
        marginLeft: 10
      }
    }
  },
  emailBodyHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    '& .left': {
      display: 'flex',
      alignItems: 'center',
      '& .avatar': {
        width: 50,
        height: 50,
        borderRadius: '50%',
        marginRight: 10
      },
      '& .subTitle': {
        marginRight: 20,
      },
      '& .new-circle': {
        width: 15,
        height: 15,
        marginLeft: 10
      }
    },
    '& .right': {
      display: 'flex',
      alignItems: 'center',
      '& .time': {
        marginLeft: 20,
      }
    }
  },
  emailBody: {
    padding: 30,
    overflow: 'auto',
    marginBottom: 80,
    "& .image-container": {
      display: 'inline-block',
      width: 200,
      marginRight: 10,
      position: 'relative',
      marginTop: 20,
      '& .hover-container': {
        position: 'absolute',
        top: 0,
        left: 0,
        background: '#03a9f470',
        width: 200,
        height: 200,
        display: 'none',
        '& .download': {
          position: 'absolute',
          right: 20,
          top: 20,
          color: '#fff'
        },
        '& span': {
          position: 'absolute',
          left: 20,
          bottom: 20,
          color: '#fff'
        }
      },
      '&:hover': {
        '& .hover-container': {
          display: 'block'
        }
      },
    },
    '& img': {
      maxWidth: 200,
      minWidth: 200,
      minHeight: 200,
      maxHeight: 200,
      cursor: 'pointer'
    }
  },
  noBorder: {
    border: 'none',
    padding: 0
  },
  emailReply: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    position: 'absolute',
    width: '-webkit-fill-available',
    bottom: 0,
    '& .left': {
      display: 'flex',
      alignItems: 'center',
      '& .avatar': {
        width: 50,
        height: 50,
        borderRadius: '50%',
        marginRight: 10
      },
      '& .reply': {
        marginLeft: 20
      }
    },
    '& .right': {
      display: 'flex',
      alignItems: 'center'
    }
  },
  rightSection: {
    position: 'relative'
  },
  selected: {
    color: '#ff9800'
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [currentEmail, setCurrentEmail] = useState(-1);
  const [rowPerPage, setRowPerPage] = useState(0);
  const { emails, setOld, removeEmail, setPin, setImportant, setStar, values } = useContext(EmailContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const emailChanged = (id) => {
    const email = emails.filter(email => email.id === id)[0];
    if (email.new) {
      setOld(id);
    }
    setCurrentEmail(id);
  }

  const next = () => {
    const count = Math.floor(filteredEmails.length/10);
    if (count !== rowPerPage) {
      setRowPerPage(rowPerPage + 1);
    }
  }

  const prev = () => {
    if (rowPerPage !== 0) {
      setRowPerPage(rowPerPage - 1);
    }
  }

  const filteredEmails = emails.filter(email => email.email.indexOf(values) >= 0);

  const currentEmailData = filteredEmails.filter(email => email.id === currentEmail)[0];
  const count = Math.floor(filteredEmails.length/10) + 1;

  return (
    <Layout current="Inbox">
      <Grid className={classes.grid}>
        <Grid item xs={12} md={6} lg={5}>
          <div className={classes.leftHeader}>
            <div>
              <Button variant="contained" color="primary" className={classes.refreshButton}>
                <RefreshIcon className={classes.RefreshIcon}/>
              </Button>
              <Badge badgeContent={1} color="default" className={classes.badge}></Badge>
            </div>
            <div>
              {rowPerPage + 1} of {count}
              <IconButton color="inherit" className={classes.prev} onClick={() => prev()}>
                <Badge badgeContent={<ChevronLeftIcon />} color="default"></Badge>
              </IconButton>
              <IconButton color="inherit" onClick={() => next()}>
                <Badge badgeContent={<ChevronRightIcon />} color="default"></Badge>
              </IconButton>
            </div>
          </div>
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Main" icon={<EmailIcon />} {...a11yProps(0)} />
                <Tab label="Offers" icon={<LocalOfferIcon />} {...a11yProps(1)} />
                <Tab label="Community" icon={<PersonIcon />} {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              {filteredEmails.slice(rowPerPage*10, rowPerPage*10+10).map((email, index) => (
                <div className={clsx(classes.emailSection, currentEmail === email.id && classes.emailSelected)} key={`${email.time}-${index}`} onClick={() => emailChanged(email.id)}>
                  <div className={classes.emailHeader}>
                    <div className="left">
                      <img src={email.avatar} alt={`avatar-${index}`} className="avatar" />
                      <div className="titles">
                        <Typography color="textSecondary">
                          {`${email.name} ${email.email}`}
                        </Typography>
                        <Typography component="p" variant="h6">
                          {email.subTitle}
                          {email.new && <FiberManualRecordIcon color="primary" className="new-circle" />}
                        </Typography>
                      </div>
                    </div>
                    <div className="right">
                      <Typography color="textSecondary">
                        {email.time}
                      </Typography>
                    </div>
                  </div>
                  <Typography color="textSecondary">
                    {email.content}
                  </Typography>
                </div>
              ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
            </TabPanel>
            <TabPanel value={value} index={2}>
            </TabPanel>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={7} className={classes.rightSection}>
          {currentEmailData && <div className={classes.emailBodyHeader}>
            <div className="left">
              <img src={currentEmailData.avatar} alt={`avatar-${currentEmail}`} className="avatar" />
              <Typography component="p" variant="h6" className="subTitle">
                {currentEmailData.subTitle}
              </Typography>
              <Typography color="textSecondary">
                {`${currentEmailData.name} ${currentEmailData.email}`}
              </Typography>
            </div>
            <div className="right">
              <IconButton onClick={() => setPin(currentEmailData.id, !currentEmailData.pin)}>
                <BookmarkIcon color={currentEmailData.pin ? "secondary" : "inherit"} />
              </IconButton>
              <IconButton color="inherit" onClick={() => removeEmail(currentEmailData.id)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>}
          {currentEmailData && <div className={classes.emailBody}>
            <div className={clsx(classes.emailBodyHeader, classes.noBorder)}>
              <div className="left">
                <Typography component="p" variant="h5" className="subTitle">
                  {currentEmailData.title}
                </Typography>
              </div>
              <div className="right">
                <IconButton color="inherit" onClick={() => setImportant(currentEmailData.id, !currentEmailData.important)}>
                  {currentEmailData.important ? <BookmarkIcon className={classes.selected} /> : <BookmarkBorderIcon />}
                </IconButton>
                <IconButton color="inherit" onClick={() => setStar(currentEmailData.id, !currentEmailData.star)}>
                  {currentEmailData.star ? <StarOutlinedIcon className={classes.selected} /> : <StarBorderIcon />}
                </IconButton>
                <Typography color="textSecondary" className="time">
                  {currentEmailData.time}
                </Typography>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: currentEmailData.fullContent }} />
            {currentEmailData.images?.map((image, index) => (
              <div className="image-container" key={`img-container-${index}`}>
                <img src={image.url} alt={`img-${index}`} />
                <div className="hover-container">
                  <Typography color="textSecondary" className="time">
                    <CloudDownloadOutlinedIcon className="download"/>
                    <span>{image.name}</span>
                  </Typography>
                </div>
              </div>
            ))}
          </div>}
          {currentEmailData && <div className={classes.emailReply}>
            <div className="left">
              <img src={avatar} alt={`avatar-${currentEmail}`} className="avatar" />
              <Typography color="primary" className="reply">Reply</Typography>
            </div>
            <div className="right">
              <IconButton color="inherit">
                <ReplyOutlinedIcon />
              </IconButton>
            </div>
          </div>}
        </Grid>
      </Grid>
    </Layout>
  );
}
