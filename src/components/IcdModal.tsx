import React, { FC, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Toolbar,
  makeStyles,
  Button,
  DialogActions,
  Box,
  Grid,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { createData1 } from "../pages/data";
import IDCSearchForm from "../pages/IdcFormData.json";
import icdheadCells from "../pages/icdheadCells.json";
import Datatable from "./DataTable";
import InputField from "../UI/components/TextField/InputField";
import ButtonComponent from '../UI/components/Button/Button';
// import { createData } from "../pages/data";
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
  tool: {
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
    textAlign: "center",
  },
}));


interface IProps{
    open:boolean;
    handleClose:()=>void;
    setselectIcddetails:(selectIcddetails: string | any)=> void;
    setIcdmodal:(IcdmodalOpen: boolean)=>void;
    [selectIcddetails:string]:any;

}

const Icdmodal:FC<IProps>=({open,handleClose,setselectIcddetails,setIcdmodal,selectIcddetails}) =>{
  const classes = useStyles();
  const [text, settext] = useState("");
  const [mainrow, setmainrow] = useState<any>([]);
  const [tablerows] = useState<object>([
    createData1("100", "DIABETES MELLITUS WITHOUT OF COMPLICATION"),

    createData1(
      "200",
      "DIABETES MELLITUS WITHOUT MENTION OF COMPLICATION, TYPE II OR UNSPECIED TYPE,NOT STATED AS UNCONTROLLED"
    ),
    createData1(
      "300",
      "DIABETES MELLITUS WITHOUT MENTION OF COMPLICATION, TYPE II OR UNSPECIED TYPE,NOT STATED AS UNCONTROLLED"
    ),
    createData1(
      "100",
      "DIABETES MELLITUS WITHOUT MENTION OF COMPLICATION, TYPE II OR UNSPECIED TYPE,NOT STATED AS UNCONTROLLED"
    ),
    createData1(
      "200",
      "DIABETES MELLITUS WITHOUT MENTION OF COMPLICATION, TYPE II OR UNSPECIED TYPE,NOT STATED AS UNCONTROLLED"
    ),
    createData1(
      "300",
      "DIABETES MELLITUS WITHOUT MENTION OF COMPLICATION, TYPE II OR UNSPECIED TYPE,NOT STATED AS UNCONTROLLED"
    ),
  ]);
  

const onSearch = (data:any, text:any) => {
    // eslint-disable-next-line array-callback-return
    let temp = Object.values(data).filter((person) => {
      const savageMatch =
        JSON.stringify(person).toLowerCase().indexOf(text.toLowerCase()) !== -1;
      if (savageMatch) return savageMatch;
    });
    return temp;
  };

  const handlesearchchange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    if (event.target.value) {
      settext(event.target.value);
    }
  };

  const handlesearch = () => {
    setmainrow(onSearch(tablerows, text));
  };

  const handlerowdata = (row: any) => {
    setIcdmodal(false);
    setselectIcddetails([...selectIcddetails]);
  };

  React.useEffect(() => {
    if (setmainrow) {
      setmainrow(setmainrow);
    }
  }, []);


  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              ICD Search
              <Button style={{ float: "right" }}>
                <CloseIcon onClick={handleClose} />
              </Button>
            </Typography>
          </div>
        </DialogTitle>
        <DialogContent dividers style={{ minWidth: "50rem" }}>
          <div className={classes.grid}>
            <Grid container direction="row" xs={12} spacing={5}>
              {IDCSearchForm.map((input) => (
                <>
                  <Grid item xs={4}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          variant="body1"
                        //   style={{ fontWeight: "600" }}
                        >
                          {input.textlabel}:
                        </Typography>
                      </Grid>

                      <Grid item>
                        <InputField
                          type={input.type}
                          variant="outlined"
                          size="small"
                          fullWidth={input.fullWidth}
                          handleChange={handlesearchchange}
                          name={input.name}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              ))}
            </Grid>
            <Box py={2}>
              <Grid container justifyContent="center">
                <ButtonComponent
                  color="primary"
                  variant="contained"
                  handleSubmit={handlesearch}
                >
                  Search
                </ButtonComponent>
              </Grid>
            </Box>
            <Toolbar className={classes.tool}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="h6">
                    ICD - Search Results
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>

            <Toolbar className={classes.toolbarItem2}>
              <Datatable
                rows={mainrow}
                headCells={icdheadCells}
                handlerowdata={handlerowdata}
                IcdModal={true}
                rowsshow={mainrow.length > 0 ? true : false} />
            </Toolbar>
          </div>
        </DialogContent>
        <Box>
          <DialogActions>
            <ButtonComponent
              color="primary"
              variant="contained"
              handleSubmit={handleClose}
            >
              Cancel
            </ButtonComponent>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
export default Icdmodal;


