import React,{FC,useState} from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Toolbar,
  makeStyles,
  Button,
  DialogActions,
} from "@material-ui/core";
import DataTable from "./DataTable";
import CloseIcon from "@material-ui/icons/Close";
import { rows } from "../pages/data";
import headCells from "../pages/Headcell.json";
import InputField from "../UI/components/TextField/InputField";

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
  btn: {
    textTransform: "none",
  },
}));

interface IProps{
    open:boolean;
    handleClose:() => void;
    formdata:object | any;
  };


const ModalForm:FC<IProps>=({open,handleClose,formdata})=> {
  const classes = useStyles();

  const [tablerows, setrows] = useState<any[]>(rows);

  const onSearch = (data: { [s: string]: unknown; } | ArrayLike<unknown>, text: string) => {
    // eslint-disable-next-line array-callback-return
    let temp = Object.values(data).filter((person) => {
      const savageMatch =
        JSON.stringify(person).toLowerCase().indexOf(text.toLowerCase()) !== -1;

      if (savageMatch) return savageMatch;
    });
    return temp;
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (event.target.value) {
      setrows(onSearch(rows, event.target.value));
    }
  };

  React.useEffect(() => {
    if (formdata) {
      let data = rows.filter((item) => item.member_id === formdata.MemberID);
      setrows(data);
    }
  }, [formdata]);


  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              Member Search Result
              <Button style={{ float: "right" }}>
                <CloseIcon onClick={handleClose} />
              </Button>
            </Typography>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div className={classes.grid}>
            <Toolbar className={classes.toolbarItem1}>
              <Typography variant="h6">
                Member Search Results
              </Typography>
            </Toolbar>

            <div>
              <Typography style={{ float: "right", margin: "7px" }}>
                <InputField
                  type="text"
                  size="small"
                  variant="outlined"
                  placeholder="Type..."
                  handleChange={(e) => handleChange(e)} 
                  />
              </Typography>
            </div>
        <DataTable rows={tablerows} headCells={headCells} rowsshow={true} handlerowdata={[]} IcdModal={false}/>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" className={classes.btn}>
            Print
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleClose}
            className={classes.btn}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ModalForm;


