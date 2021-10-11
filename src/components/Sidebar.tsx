import React, {FC, useState } from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  MenuItems,
  UserMenuItems,
  RoleItems,
  UserItems,
} from "../pages/SidebarData";
import "../App.css";

const useStyles = makeStyles(() => ({
  list: {
    width: "100%",
    maxWidth: "264px",
    backgroundColor: "#c7c0c0",
    color: "#f3e7e7eb",
    height: "100%",
  },
  listitem: {
    borderBottom: "2px solid #696161",
  },
  text: {
    fontSize: "13px",
    color: "#e2e4ea",
    fontFamily: "Roboto",
  },
  typo: {
    color: "#e2e4ea",
    fontFamily: "Roboto",
    fontSize: "13px",
  },
  root: {
    margin: "5px",
    "&:hover": {
      backgroundColor: "#675f5f",
      borderRadius: "5px",
    },
  },
  itemicon: {
    minWidth: "35px",
  },
}));

const Sidebar:FC=()=> {
  const classes = useStyles();
  const [userdropdown, setuserDropdown] = useState(false);
  const [admindropdown, setadminDropdown] = useState(false);
  const username = localStorage.getItem("username");

  const handleClick = () => {
    setuserDropdown((userdropdown) => !userdropdown);
  };

  const handleClick1 = () => {
    setadminDropdown((admindropdown) => !admindropdown);
  };

  const adminmenu = (
    <div className={classes.list}>
      <List component="nav" aria-label="main mailbox folders">
        {MenuItems.map((item) => {
          return (
            <>
              {item.userdropdown ? (
                <li onClick={handleClick1}>
                  <ListItem button className={classes.listitem}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography className={classes.text}>
                          {item.name}
                        </Typography>
                      }
                    />
                    <ArrowDropDownIcon />
                  </ListItem>
                  {admindropdown &&
                    RoleItems.map((item, index) => {
                      console.log("item", item);
                      return (
                        <div className={classes.root}>
                          <ListItem button className={classes.text} key={index}>
                            <ListItemIcon style={{ color: "#fff" }}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography className={classes.text}>
                                  {item.title}
                                </Typography>
                              }
                            />
                          </ListItem>
                        </div>
                      );
                    })}
                </li>
              ) : (
                <ListItem button className={classes.listitem}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography className={classes.text}>
                        {item.name}
                      </Typography>
                    }
                  />
                </ListItem>
              )}
            </>
          );
        })}
      </List>
    </div>
  );

  const handleuser = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    window.location.href="/dashboard";
  };

  return (
    <>
      {username === "user" ? (
        <div className={classes.list}>
          <List component="nav" aria-label="main mailbox folders">
            {UserMenuItems.map((item) => {
              return (
                <>
                  {!item.userdropdown && !item.admindropdown ? (
                    <ListItem button className={classes.listitem}>
                      <ListItemIcon className={classes.itemicon}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography className={classes.typo}>
                            {item.name}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ) : (
                    <>
                      {item.userdropdown && (
                        <li onClick={handleClick}>
                          <ListItem button className={classes.listitem}>
                            <ListItemIcon className={classes.itemicon}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography className={classes.text}>
                                  {item.name}
                                </Typography>
                              }
                            />
                            <div>
                              <ArrowDropDownIcon />
                            </div>
                          </ListItem>
                          {userdropdown &&
                            UserItems.map((item, index) => {
                              return (
                                <div className={classes.root}>
                                  <div>
                                    <ListItem
                                      button
                                      className={classes.text}
                                      key={index}
                                    >
                                      <ListItemIcon
                                        style={{ color: "#fff" }}
                                        className={classes.itemicon}
                                      >
                                        {item.icon}
                                      </ListItemIcon>
                                      <ListItemText
                                       primary={
                                          <Typography
                                            className={classes.text}
                                            onClick={handleuser}
                                          >
                                            {item.title}
                                          </Typography>
                                        }
                                      />
                                    </ListItem>
                                  </div>
                                </div>
                              );
                            })}
                        </li>
                      )}

                      {item.admindropdown && (
                        <li onClick={handleClick1}>
                          <ListItem button className={classes.listitem}>
                            <ListItemIcon className={classes.itemicon}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography className={classes.text}>
                                  {item.name}
                                </Typography>
                              }
                            />
                            <ArrowDropDownIcon />
                          </ListItem>
                          {admindropdown &&
                            RoleItems.map((item, index) => {
                              return (
                                <div className={classes.root}>
                                  <ListItem
                                    button
                                    className={classes.text}
                                    key={index}
                                  >
                                    <ListItemIcon
                                      style={{ color: "#fff" }}
                                      className={classes.itemicon}
                                    >
                                      {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={
                                        <Typography
                                          className={classes.text}
                                          onClick={handleuser}
                                        >
                                          {item.title}
                                        </Typography>
                                      }
                                    />
                                  </ListItem>
                                </div>
                              );
                            })}
                        </li>
                      )}
                    </>
                  )}
                </>
              );
            })}
          </List>
        </div>
      ) : (
        adminmenu
      )}
    </>
  );
}

export default Sidebar;
