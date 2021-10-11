import React, { FC } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  makeStyles,
  Button,
  Grid,
  MenuItem,
  Select,
  FormControl,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import InputBase from "@material-ui/core/InputBase";
import CloseIcon from "@material-ui/icons/Close";
import ProviderData from "../pages/ProviderData.json";
import InputField from "../UI/components/TextField/InputField";
import ButtonComponent from '../UI/components/Button/Button';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
  },
  toolbarItem1: {
    border: "2px solid #dcd7d7",
    minHeight: "32px",
    borderRadius: "6px",
    backgroundColor: "#edeef3",
  },
}));
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    width: "200px",
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 14,
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


interface IPorps {
  open: boolean;
  handleClose: () => void;
  setmodalformdata: (mainlist: string) => any;
  modalformdata: any;
  handleSubmit: () => void | object;
}
const Formmodal: FC<IPorps> = ({ open, handleClose, setmodalformdata, modalformdata, handleSubmit }) => {
  const classes = useStyles();

  const handlechange = (e: { target: { value: any | undefined; name?: any | undefined; }; }, data: { name: string; }) => {
   console.log(data,"data")
    setmodalformdata({
      ...modalformdata,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              Enter Servicing Provinder of Facility Information
              <Button style={{ float: "right" }}>
                <CloseIcon onClick={handleClose} />
              </Button>
            </Typography>
          </div>
        </DialogTitle>
        <DialogContent dividers style={{ minWidth: "80rem" }}>
          <div className={classes.grid}>
            <Grid container direction="row" xs={12} spacing={2}>
              {ProviderData.map((input) => (
                <>
                  {input.type === "Dropdown" ? (
                    <>
                      <Grid item xs={4}>
                        <Grid container direction="column">
                          <Grid item>
                            <Typography
                              variant="body1"
                              style={{ fontWeight: 600 }}
                            >
                              {input.textlabel}
                            </Typography>
                          </Grid>

                          <Grid item>
                            <FormControl>
                              <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                input={<BootstrapInput />}
                                fullWidth
                                name={input.name}
                                required={input.required}
                                style={{ width: "100%" }}
                                onChange={(e) => handlechange(e, data)}
                                
                              >
                                {input.list.map((item) => {
                                  return (
                                    <MenuItem value={item.name}>
                                      {item.name}
                                    </MenuItem>
                                  );
                                })}
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>
                    </>
                  ) : (
                    <Grid item xs={4}>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography
                            variant="subtitle2"
                            style={{ fontWeight: 600 }}
                          >
                            {input.textlabel}:
                          </Typography>
                        </Grid>

                        <Grid item xs={8} spacing={1}>
                          <InputField
                           variant="outlined"
                            size="small"
                            fullWidth={true}
                            name={input.name}
                            handleChange={(e:any) => handlechange(e, data)}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                </>
              ))}
            </Grid>

            <Grid container justifyContent="center" direction="row" spacing={6}>
              <Grid item>
                <ButtonComponent
                  color="primary"
                  variant="contained"
                  handleSubmit={handleSubmit}
                >
                  save
                </ButtonComponent>
              </Grid>
              <Grid item>
                <ButtonComponent
                  color="primary"
                  variant="contained"
                  handleSubmit={handleClose}
                >
                  Cancel
                </ButtonComponent>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Formmodal;
function data(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, data: any): void {
  throw new Error("Function not implemented.");
}

