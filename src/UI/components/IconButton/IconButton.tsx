import React, { FC } from 'react';
import { Button, makeStyles } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddCircleIcon from "@material-ui/icons/AddCircle";


const useStyles = makeStyles((theme) => ({
    root: {
        textTransform: "none",
    },
    addbtn: {
    backgroundColor: "#3e9c5b",
    marginLeft: "72px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "64px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "14px",
    },
    color: "white",
    "&:hover": {
      backgroundColor: "#3e9c5b",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "1px",
    },
    textTransform: "none",
  },

  diagbtn: {
    textTransform: "none",
    backgroundColor: "#3e9c5b",
    marginLeft: "53px",
    color: "white",
    "&:hover": {
      backgroundColor: "#3e9c5b",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-2px",
    },
  }
}));

interface IProps {
    children?: React.ReactNode;
    color?: any;
    type?: any;
    variant?: any;
    icon?: string;
    handleClick?: (e: any) => any;
    circleIcon?: any;
    btn?:any
}

const IconButton: FC<IProps> = ({ color, icon, children, variant, type, handleClick,btn }) => {
    const classes = useStyles();
    return (
        <>
            <Button
                variant={variant}
                type={type}
                color={color}

                className={btn === "btn"? classes.addbtn : btn==="diagnosisbtn" ? classes.diagbtn : classes.root }
                startIcon={icon === "left" ? <ChevronLeftIcon /> : icon === "circle" ? <AddCircleIcon /> : null}
                endIcon={icon === "right" ? <ChevronRightIcon /> : null}
                onClick={handleClick}

            >
                {children}
            </Button>
        </>
    )
}
export default IconButton;