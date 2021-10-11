import React, { FC } from 'react';
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "none",
  },
  breakbtn: {
    marginRight: "5px",
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
    }
  },
  selectbtn: {
    textTransform: "none",
    backgroundColor: "#0b1963",
    padding: "3px 11px",
    fontSize: "12px",
  },
  scbtn: {
    textTransform: "none",
    float: "right",
    marginTop: "10px",
    marginBottom: "90px",

  }

}));

interface Props {
  children?: React.ReactNode;
  color?: any;
  variant?: any;
  fullWidth?: boolean;
  type?: any;
  handleSubmit?: (e: any) => any;
  size?: any;
  btn?: any;
  secondbtn?: any;
}

const ButtonComponent: FC<Props> = ({ children, color, variant, fullWidth, type, handleSubmit, size, btn }) => {
  const classes = useStyles();
  return (
    <Button
     className={btn === "btn" ? classes.breakbtn : btn === "secondbtn" ? classes.scbtn : btn === "selectbtn" ? classes.selectbtn : classes.root}
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      type={type}
      onClick={handleSubmit}
      size={size}
    >
      {children}
    </Button>
  );
}

export default ButtonComponent;
