import React,{FC} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

interface Iprops{
open:boolean;
handleClose:()=>void;
severity: string | any;
message: string;
}
const PositionedSnackbar:FC<Iprops>=({ open, handleClose, severity, message})=> {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
          
        </Alert>
      </Snackbar>
    </div>
  );
}

export default PositionedSnackbar;
