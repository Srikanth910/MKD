
import { createTheme } from "@material-ui/core/styles";

const arcBlue = "#0c1d7b";
const red = "#ff0000";


 export default createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          margin: "auto"
        },
      }
    }
  },
  palette: {
    primary: {
      main: arcBlue
    },
    secondary: {
      main: red
    },
  },
  typography: {
    h5: {
      fontFamily: "Raleway",
      fontSize: "1.5rem",
      color: arcBlue,
      fontWeight: 700
    },
    h6: {
      fontFamily: "Raleway",
      fontSize: "1.2rem",
      color: arcBlue,
      fontWeight: 700
    },
    body2: {
      color: arcBlue,
    },
   body1:{
     color:'black',
     fontSize: "12px",
     fontFamily:'system-ui',
      fontWeight: 500
   },
   subtitle2:{
     color:'black',
     fontSize: "12px",
     fontFamily:'system-ui',
      fontWeight: 700
   },
  }
  });
