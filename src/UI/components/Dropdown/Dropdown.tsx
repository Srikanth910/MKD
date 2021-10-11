import React, { FC } from "react";
import { FormControl, Select, Typography, MenuItem } from "@material-ui/core";
// import { MenuItem } from 'material-ui';
// import Typography from 'material-ui/styles/typography';
import InputBase from "@material-ui/core/InputBase";

import { withStyles } from "@material-ui/styles";

const BootstrapInput = withStyles((theme) => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }))(InputBase);
interface Props {
  handleChange: (e: any, value:any ) => void;
  name?: any;
  value?: any;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  fullWidth?: any;
  input: any;
}

const Dropdown: FC<Props> = ({
  value,
  handleChange,
  name,
  handleBlur,
  fullWidth,
  input,
}) => {
  return (
    <>
      <Select
        value={value}
        onChange={(e)=>handleChange(e, input?.textlabel)}
        onBlur={handleBlur}
        name={name}
        variant="outlined"
        input={<BootstrapInput />}
        style={{ width: "100%" }}
      >
        {input.list.map((item: any, index:any) => {
          return (
            <MenuItem value={index}>
              <Typography style={{ fontSize: "12px" }}>{item.name}</Typography>
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};
export default Dropdown;
