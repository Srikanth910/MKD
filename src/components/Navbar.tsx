import React,{FC} from "react";
import { makeStyles, AppBar, Toolbar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#fff",
    position: "sticky",
    top: "0px",
    margin: "auto",
  },
  logo: {
    width: "100px",
    height: "43px",
    marginLeft: "15px",
  },
  icon: {
    color: "#0c1d7b",
    marginLeft: "64px",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    fontFamily: "Roboto",
    fontSize: "16px",
  },
  list: {
    width: "100%",
    maxWidth: "264px",
    backgroundColor: "#c7c0c0",
    color: "#f3e7e7eb",
  },
  listitemtext: {
    color: "#0c1d7b",
  },
  user: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
  typo: {
    fontFamily: "Roboto",
    fontSize: "16px",
  },
}));

const Navbar: FC =()=> {
  const classes = useStyles();
  const history = useHistory();
  const username = localStorage.getItem("username");
  const handlelogout = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    history.push("/");
  };
  const handlelogo = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
   window.location.href="/dashboard"
  };

  return (
    <>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar disableGutters={true}>
            <Link to="/dashboard" onClick={handlelogo}> 
            <img src={logo} alt="mhk" className={classes.logo}/>
            </Link>

          <div className={classes.icon}>
            <HomeIcon color="primary" />
            <br />
            <Link className={classes.typo} to="/logout" onClick={handlelogout}>
              Logout
            </Link>
            <br />
            <div className={classes.user}>Welcome, {username}</div>
          </div>
        </Toolbar>
      </AppBar>
      <div></div>
    </>
  );
}
export default Navbar;
