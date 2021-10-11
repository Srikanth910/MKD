import { makeStyles, AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#0c1d7b",
    height: "50px",
    zIndex: -1000,
    position: "sticky",
  }
}));

const Appbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="relative" className={classes.container}>
        <Toolbar disableGutters={true}></Toolbar>
      </AppBar>
    </>
  );
}
export default Appbar;
