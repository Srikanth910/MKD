import React, {useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Sidebar from "./Sidebar";
import { Typography, Toolbar } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
import ModalForm from "./Modal";
import inputFormElements from "../pages/SearchFormData.json";
import InputField from "../UI/components/TextField/InputField";
import ButtonComponent from '../UI/components/Button/Button';

const useStyles = makeStyles((theme) => ({
  palette: {
    primary: {
      main: "#0c1d7b",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#0c1d7b",
  },
  grid: {
    marginTop: "-43px",
    backgroundColor: "#fff",
  },
  btn: {
    "& > *": {
      margin: theme.spacing(1),
      textTransform: "none",
      
    },
    paddingRight: "30px !important",
  },
  toolbarItem1: {
    border: "2px solid #dcd7d7",
    minHeight: "32px",
    borderRadius: "6px",
    backgroundColor: "#edeef3",
  },
  toolbarItem2: {
    borderLeft: "2px solid #dcd7d7",
    borderBottom: "2px solid #dcd7d7",
    borderRight: "2px solid #dcd7d7",
    borderRadius: "6px",
  },
  form: {
    padding: "24px",
  },
  gridContainer: {
    padding: "24px 0px",
  },
  container: {
    height: "48px",
  },
}));

interface IProps{
  open:boolean,
  handleClose(): any,
  formdata:object
}

const MedicalForm=(props:IProps)=> {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [formdata, setformdata] = useState({});
  const [inputFormElems, setInputFormElems] = useState(inputFormElements);

  
  const handleClose = () => {
    setOpen(false);
    // const newinputformelems:any = inputFormElems.map(each=> each.value = "");
    // setInputFormElems(newinputformelems);
    // console.log(inputFormElems,"input")
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    var array: any[] = [];
    let errors:object | any = {};
    // eslint-disable-next-line array-callback-return
    inputFormElems.map((item) => {
    if (
        item.value === "" ||
        (item.value !== "" && item.value.length < 3) ||
        item.value.length > 10
      ) {
        item.errState = true;
        errors[item.name] = "validation Error";
      }
      array.push(item);
    });
    setInputFormElems(array);
    if (Object.keys(errors).length === 0) {
      setOpen(true);
    }
  };

  const handlechange = (info: { name: string; textlabel: string; errState: boolean; variant: string; fullWidth: boolean; errEmptyMsg: string; xs: number; sm: number; errMinMsg: string; errMaxMsg: string; value: string; type?: undefined; } | {
          name: string; type: string; textlabel: string; errState: boolean; variant: string; fullWidth: boolean; errEmptyMsg: string; xs:
              number; sm: number; errMinMsg: string; errMaxMsg: string; value: string;
      }, e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    var array: any[] = [];
    // eslint-disable-next-line array-callback-return
    inputFormElems.map((item) => {
      if (item.name === info.name) {
        item.value = e.target.value;
        if (item.value !== "") item.errState = false;
      }
      array.push(item);
    });
    setInputFormElems(array);
    setformdata({ ...formdata, [info.name]: e.target.value });
  };

  const handleBlur = (info: { name: string; textlabel: string; errState: boolean; variant: string; fullWidth: boolean; errEmptyMsg: string; xs: number; sm: number; errMinMsg: string; errMaxMsg: string; value: string; type?: undefined; } | { name: string; type: string; textlabel: string; errState: boolean; variant: string; fullWidth: boolean; errEmptyMsg: string; xs: number; sm: number; errMinMsg: string; errMaxMsg: string; value: string; }, e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    var array: any[] = [];
    // eslint-disable-next-line array-callback-return
    inputFormElems.map((item) => {
      if (item.name === info.name) {
        if (
          item.value === "" ||
          (item.value !== "" && item.value.length < 3) ||
          item.value.length > 10
        ) {
          item.errState = true;
        } else item.errState = false;
      }
      array.push(item);
    });
    setInputFormElems(array);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>

        <Grid item xs={10} className={classes.grid}>
          <Paper className={classes.paper}>
            <Typography variant="h5">
              Request Pharmacy Prior Authorizations
            </Typography>
          </Paper>

          <form
            autoComplete="off"
            className={classes.form}
           
          >
            <Toolbar className={classes.toolbarItem1}>
              <Typography variant="h6">
                Search for Member
              </Typography>
            </Toolbar>

            <Toolbar className={classes.toolbarItem2}>
              <form className={classes.gridContainer} autoComplete="off">
                <Grid container direction="row" xs={12} spacing={4}>
                  {inputFormElems.map((input) => (
                    <Grid item xs={6}>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography
                            variant="body1"
                            
                          >
                            {input.textlabel}
                          </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <InputField
                            variant="outlined"
                            fullWidth={input.fullWidth}
                            type={input.type}
                            size="small"
                            handleChange={(e:any) => handlechange(input, e)}
                            value={input.value}
                            handleBlur={(e:any) => handleBlur(input, e)}
                          />
                          {input.errState ? (
                            <Typography color="secondary">
                              {input.value === ""
                                ? input.errEmptyMsg
                                : input.value.length < 3
                                ? input.errMinMsg
                                : input.value.length > 10
                                ? input.errMaxMsg
                                : null}
                            </Typography>
                          ) : null}
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>

                <Grid container spacing={2} style={{textAlign:'right'}}>
                  <Grid item xs={12} className={classes.btn}>
                   <ButtonComponent 
                      variant="contained"
                      color="primary"
                      type="reset" 
                      > 
                      Clear
                      </ButtonComponent>
                    <ButtonComponent
                      variant="contained"
                      color="primary"
                      type="submit"
                    handleSubmit={(e:any)=>handleSubmit(e)}
                      
                    >
                      Search
                    </ButtonComponent>
                  </Grid>
                </Grid>
              </form>
            </Toolbar>
          </form>
        </Grid>
      </Grid>
     <ModalForm open={open} handleClose={handleClose} formdata={formdata}   />
    </div>
  );
}
export default MedicalForm;
