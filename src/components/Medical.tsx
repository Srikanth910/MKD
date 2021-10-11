import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {
  Typography,
  Toolbar,
  Grid,
  Paper,
  makeStyles,
  Avatar,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import Navbar from "./Navbar";
import IcdModal from "./IcdModal";
import data from "../pages/FormData.json";
// import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/styles";
import InputBase from "@material-ui/core/InputBase";
import Appbar from "./Appbar";
// import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Box } from "@material-ui/core";
import Formmodal from "./FormModal";
import Datatable from "./DataTable";
import SnackBar from "./Snackbar";
import { createDatamain } from "../pages/data";
import ServiceheadCells from "../pages/ServiceheadCells.json";
import icdheadCells from "../pages/icdheadCells.json";
import ProviderData from "../pages/ProviderData.json";
import documentcells from "../pages/documentcells.json";
import notescells from "../pages/notescells.json";
import { useLocation } from "react-router-dom";
import IconButton from "../UI/components/IconButton/IconButton";
import ButtonComponent from "../UI/components/Button/Button";
import RadioButtonComp from "../UI/components/RadioButton/RadioButton";
import InputField from "../UI/components/TextField/InputField";
import Dropdown from "../UI/components/Dropdown/Dropdown";

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
    },
  },
  toolbarItem1: {
    border: "2px solid #dcd7d7",
    minHeight: "32px",
    borderRadius: "6px",
    backgroundColor: "#edeef3",
    height: "300px",
    [theme.breakpoints.down("sm")]: {
      height: "329px",
    },
  },
  doc: {
    border: "2px solid #dcd7d7",
    minHeight: "32px",
    borderRadius: "6px",
    backgroundColor: "#edeef3",
    height: "35px",
    marginTop: "10px",
  },
  tool: {
    border: "2px solid #dcd7d7",
    minHeight: "32px",
    borderRadius: "6px",
    backgroundColor: "#edeef3",
    marginTop: "12px",
  },
  toolbarItem2: {
    borderLeft: "2px solid #dcd7d7",
    borderBottom: "2px solid #dcd7d7",
    borderRight: "2px solid #dcd7d7",
    borderRadius: "6px",
    width: "97%",
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  form: {
    padding: "15px",
  },
  gridContainer: {
    width: "inherit",
    padding: "24px 0px",
    marginTop: "0px",
  },
  container: {
    height: "48px",
  },
  root: {
    flexGrow: 1,
  },
  radio: {
    colorPrimary: {
      "&$checked": {
        color: "blue",
      },
    },
    checked: {},
  },
  avatar: {
    marginBottom: "129px",
    marginRight: "10px",
  },
  resetbtn: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5px",
  },
  line: {
    borderBottom: "1px solid #d6d0d0",
    display: "flex",
    justifyContent: "center",
  },
  auth: {
    color: "white",
    backgroundColor: "grey",
    borderRadius: "5px",
  },
  typobreak: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  typomobile: {
    color: "#383131",
    borderBottom: "1px solid #d6d0d0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  servicetypo: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
      marginTop: "9px",
    },
  },
  breakbtn: {
    marginRight: "5px",
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "9px",
    },
  },
}));

interface IState {
  rowdata: any;
}

export default function Medical() {
  const classes = useStyles();
  const [serviceProvider, setserviceProvider] = useState<boolean>(false);
  const [IcdmodalOpen, setIcdmodal] = useState<boolean>(false);

  const [modalformdata, setmodalformdata] = useState<object | any>({});
  const [mainlist, setmainlist] = useState<any>([]);
  const [documentdata] = React.useState([]);
  const [notesdata] = React.useState([]);
  const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);
  const [severity, setSeverity] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [selectIcddetails, setselectIcddetails] = useState([]);
  const [loop, setloop] = useState<any>([]);
  const [openStaticdata, setOpenStaticdata] = React.useState(false);
  const [testData, setTestData] = useState<any>(data);
  const [checked, setchecked] = React.useState(false);

  const [userinfo, setUserinfo] = useState<any>({
    zipcode: "",
    phone_number: "",
    fax_number: "",
    provider: "",
    authid: "",
    speciality: "",
    provider_status: "",
    first_name: "",
    last_name: "",
    organization: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    contact_name: "",
    contact_phone: "",
  });

  const [error1] = useState<any>({
    fax_number: ProviderData[10].errmsg,
  });

  const [error, setError] = useState<any>({
    zipcode: data["textfield2"][0].errmsg,
    phone_number: data["textfield2"][1].errmsg,
    fax_number: data["textfield2"][2].errmsg,
  });

  const location = useLocation();
  const rowdata = (location.state as IState).rowdata;

  const handleClose = () => {
    //  setOpen(false);
    setIcdmodal(false);
    setserviceProvider(false);
  };

  const handleSubmit = () => {
    if (
      modalformdata["fax_number"] === undefined ||
      !(
        modalformdata["fax_number"].toString().length > 0 &&
        modalformdata["fax_number"].toString().length <= 10
      )
    ) {
      setSnackBarOpen(true);
      setSeverity("error");
      setMessage(error1.fax_number);
    } else {
      setmainlist((mainlist: any) => [
        createDatamain(
          modalformdata.PROVIDER_NAME,
          modalformdata.NPI,
          modalformdata.DEA,
          modalformdata.SPECALITY,
          modalformdata.NETWORK,
          modalformdata.ADDRESS,
          modalformdata.FAX_NUMBER,
          modalformdata.PROVIDER_TYPE,
          "Pending"
        ),
      ]);
      setserviceProvider(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      userinfo["fax_number"]?.length > 0 &&
      userinfo["fax_number"]?.length < 10 ||
      userinfo["zipcode"]?.length > 0 &&
      userinfo["phone_number"]?.length > 0 &&
      userinfo["provider"]?.length > 0 &&
      userinfo["authid"]?.length > 0 &&
      userinfo["speciality"]?.length > 0 &&
      userinfo["provider_status"]?.length > 0 &&
      userinfo["first_name"]?.length > 0 &&
      userinfo["last_name"]?.length > 0 &&
      userinfo["organization"]?.length > 0 &&
      userinfo["address1"]?.length > 0 &&
      userinfo["address2"]?.length > 0 &&
      userinfo["city"]?.length > 0 &&
      userinfo["state"]?.length > 0 &&
      userinfo["contact_name"]?.length > 0 &&
      userinfo["contact_phone"]?.length > 0
    ) {
      setSnackBarOpen(true);
      setSeverity("success");
      setMessage("Data Saved Succesfully");
      setOpenStaticdata(true);
    } else if (
      userinfo["zipcode"]?.length <= 0 ||
      (userinfo["phone_number"]?.length <= 0 &&
        userinfo["phone_number"]?.length > 0 ||
        /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(
          userinfo["phone_number"]
        )) ||
      userinfo["fax_number"]?.length <= 0 ||
      userinfo["provider"]?.length <= 0 ||
      userinfo["authid"]?.length <= 0 ||
      userinfo["speciality"]?.length <= 0 ||
      userinfo["provider_status"]?.length <= 0 ||
      userinfo["first_name"]?.length <= 0 ||
      userinfo["last_name"]?.length <= 0 ||
      userinfo["organization"]?.length <= 0 ||
      userinfo["address1"]?.length <= 0 ||
      userinfo["address2"]?.length <= 0 ||
      userinfo["city"]?.length <= 0 ||
      userinfo["state"]?.length <= 0 ||
      userinfo["contact_name"]?.length <= 0 ||
      userinfo["contact_phone"]?.length <= 0
    ) {
      setSnackBarOpen(true);
      setMessage("Please Fill All Mandatory Fields");
      setSeverity("error");
    } else if (
      !(
        userinfo["fax_number"]?.length > 0 
        ||
        userinfo["fax_number"]?.length <= 10
      )
    ) {
      setSnackBarOpen(true);
      setSeverity("error");
      // setMessage(error.fax_number);
      setMessage("Please Fill All Mandatory Fields");
    }

    var dropdownArray: any[] = [],
      textfieldArray: any[] = [],
      textfield1Array: any[] = [],
      textfield2Array: any[] = [],
      textfield3Array: any[] = [];
    let errors: object | any = {};
    var keys = [
      "dropdown",
      "textfield",
      "textfield1",
      "textfield2",
      "textfield3",
    ];
    // eslint-disable-next-line array-callback-return
    keys.map((key) => {
      // eslint-disable-next-line array-callback-return
      testData[key].map((item: any) => {
        if (
          item.value === "" ||
          (item.value !== "" && item.value.length < 3) ||
          item.value.length > 10
        ) {
          item.errState = true;
          errors[item.key] = "validation Error";
        }
        if (key === "dropdown") dropdownArray.push(item);
        if (key === "textfield") textfieldArray.push(item);
        if (key === "textfield1") textfield1Array.push(item);
        if (key === "textfield2") textfield2Array.push(item);
        if (key === "textfield3") textfield3Array.push(item);
      });
    });
    setTestData((state: any) => ({
      ...state,
      dropdown: dropdownArray,
      textfield: textfieldArray,
      textfield1: textfield1Array,
      textfield2: textfield2Array,
      textfield3: textfield3Array,
    }));

    setUserinfo("");
  };

  const handleSnackbarClose = () => {
    setSnackBarOpen(false);
  };
  const handleupdate = (
    e: { target: { value: any | undefined; name?: string | any | undefined } },
    value: string
  ) => {
    if (value === "Request Type" && e.target.value === 1) {
      setloop([
        {
          name: 1,
          list: [
            { name: "17-09-2021" },
            { name: "18-09-2021" },
            { name: "19-09-2021" },
          ],
        },
        {
          name: "2",
          list: [
            { name: "20-09-2021" },
            { name: "21-09-2021" },
            { name: "22-09-2021" },
          ],
        },
      ]);
    } else {
      setloop([]);
    }
  };

  const name1 =
    "Please upload additional documentation supporting your request";
  const name2 = "Authorization Status:";
  const [displayname, setDisplayName] = React.useState(name1);

  const onSecondClick = () => {
    setDisplayName(name2);
  };

  const handleEventChange = (
    key: string | number,
    info: { name: any },
    e: { target: { value: any | undefined; name?: any | undefined } }
  ) => {
    var array: any[] = [];
    // eslint-disable-next-line array-callback-return
    testData[key].map(
      (item: { name: any; value: string; errState: boolean }) => {
        if (item.name === info.name) {
          item.value = e.target.value;
          if (item.value !== "") item.errState = false;
        }
        array.push(item);
      }
    );
    setTestData((state: any) => ({ ...state, [key]: array }));
    setUserinfo((state: any) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
    setError((state: any) => ({
      ...state,
      [e.target.name]: info,
    }));
  };

  const handleBlurChange = (
    key: any,
    info: any,
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    var array: any[] = [];
    // eslint-disable-next-line array-callback-return
    testData[key].map((item: any) => {
      /*     if(info.name === "phone_number" && e.target.value.length > 0){
        item.value = e.target.value;
       if(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(e.target.value)){
          item.errState = false;
       }
  console.log(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(e.target.value), e.target.value.length > 0,"test")
 
  } */

      if (item.name === info.name) {
        if (
          item.value === "" ||
          (item.value !== "" && item.value.length < 3) ||
          item.value.length > 15
        ) {
          item.errState = true;
        } else item.errState = false;
      }
      array.push(item);
    });
    setTestData((state: any) => ({ ...state, [key]: array }));
  };

  const formatPhoneNumber = (value: any) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 9)}`;
  };

  const phoneNumberFormatter = (e: any) => {
    const formattedInputValue = formatPhoneNumber(e.target.value);
    var array: any[] = [];
    // eslint-disable-next-line array-callback-return
    testData["textfield2"].map(
      (item: { name: any; value: string; errState: boolean }) => {
        if (item.name === "phone_number") {
          item.value = formattedInputValue;
          if (item.value !== "") item.errState = false;
        }
        array.push(item);
      }
    );
    setTestData((state: any) => ({ ...state, textfield2: array }));
  };

  const handleRadio = (e: any, value: any) => {
    if (value === "Yes" || value === "No") {
      let radiodata = testData.radio[0].list.map((item: any) => {
        if (item.name === value) {
          return {
            ...item,
            check: true,
          };
        } else {
          return {
            ...item,
            check: false,
          };
        }
      });
      setTestData((state: any) => ({
        ...state,
        radio: testData.radio.map((item: any) => {
          return {
            ...item,
            list: radiodata,
          };
        }),
      }));
    } else {
      setTestData((state: any) => ({
        ...state,
        authorization: [
          {
            ...testData.authorization[0],

            list: testData.authorization[0].list.map((item: any) => {
              if (item.name === value) {
                return {
                  ...item,
                  check: true,
                };
              } else {
                return {
                  ...item,
                  check: false,
                };
              }
            }),
          },
        ],
      }));
    }
  };

  // console.log(testData)

  const handleselect = (e: any, value: any) => {
    console.log(e.target.value);

    var array: any[] = [];
    // eslint-disable-next-line array-callback-return
    let data = testData["dropdown"].map((item: any) => {
      debugger;
      if (item.name === value) {
        return {
          ...item,
          value: e.target.value,
          errState: false,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    console.log(data);
    setTestData((state: any) => ({
      ...state,
      ["dropdown"]: data,
    }));
    setUserinfo((state: any) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
    setError((state: any) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  console.log(testData);
  return (
    <>
      <Navbar />
      <Appbar />
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>

          <Grid item xs={10} className={classes.grid}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h5" className={classes.typobreak}>
                  Request Medical Prior Authorizations
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} className={classes.form}>
              <Toolbar className={classes.toolbarItem1}>
                <Avatar
                  alt="Remy Sharp"
                  variant="square"
                  className={classes.avatar}
                />
                {rowdata ? (
                  <>
                    <div
                      className={classes.root}
                      style={{ borderTop: "1px solid grey" }}
                    >
                      <Grid container spacing={3}>
                        <Grid item xs={4}>
                          <Typography>Name: {rowdata.first_name}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography>
                            Member ID: {rowdata.member_id}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          {/* <Button variant="contained" color="secondary"
                   style={{ textTransform: "none" }}>
                     Member Eligible
                     </Button> */}
                          <Typography>
                            Plan Type/Group ID#: {rowdata.plan_desc}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid container spacing={3}>
                        <Grid item xs={4}>
                          <Typography>
                            Date of Birth: {rowdata.dateof_birth}
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography>
                            LOB: {rowdata.lineof_business}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid container spacing={3}>
                        <Grid item xs={4}>
                          <Typography>Address: {rowdata.address}</Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography>IPA/MG: {rowdata.ipa_code}</Typography>
                        </Grid>
                      </Grid>

                      <Grid container spacing={3}>
                        <Grid item xs={4}>
                          <Typography>Phone: 123-456-7890</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography>
                            Effective: {rowdata.effective_date}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography>Term: {rowdata.term_date}</Typography>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Typography>Special Programs:</Typography>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid item xs={4}>
                          <Typography>
                            Contact Number: {rowdata.contract_number}
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Typography>
                            PBP Number: {rowdata.pbp_number}
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </Toolbar>

              {openStaticdata ? (
                <>
                  {displayname && displayname === name1 ? (
                    <>
                      <Typography
                        variant="h6"
                        style={{
                          color: "#383131",
                          borderBottom: "1px solid #d6d0d0",
                          marginTop: "30px",
                        }}
                      >
                        {displayname}
                      </Typography>

                      <Toolbar className={classes.doc}>
                        <Typography variant="h6">Upload documents</Typography>
                      </Toolbar>
                      <Toolbar className={classes.toolbarItem2}>
                        <div className={classes.gridContainer}>
                          <Datatable
                            rows={documentdata}
                            rowsshow={documentdata.length > 0 ? true : false}
                            headCells={documentcells}
                            handlerowdata={[]}
                            IcdModal={false}
                          />
                          <Typography
                            variant="h5"
                            style={{
                              padding: "0px",
                              fontSize: "12px",
                              fontFamily: "serif",
                              textAlign: "center",
                            }}
                          >
                            No Data Found...
                          </Typography>
                        </div>
                      </Toolbar>

                      <Typography
                        variant="h5"
                        style={{
                          color: "#383131",
                          borderBottom: "1px solid #d6d0d0",
                          marginTop: "10px",
                        }}
                      >
                        Notes
                      </Typography>

                      <Toolbar className={classes.doc}>
                        <Typography variant="h6">Notes</Typography>
                      </Toolbar>
                      <Toolbar className={classes.toolbarItem2}>
                        <div className={classes.gridContainer}>
                          <Datatable
                            rows={notesdata}
                            rowsshow={notesdata.length > 0 ? true : false}
                            headCells={notescells}
                            handlerowdata={[]}
                            IcdModal={false}
                          />
                          <Typography
                            variant="h5"
                            style={{
                              padding: "0px",
                              fontSize: "12px",
                              fontFamily: "serif",
                              textAlign: "center",
                            }}
                          >
                            No Data Found...
                          </Typography>
                        </div>
                      </Toolbar>
                    </>
                  ) : null}

                  {displayname && displayname === name2 ? (
                    <>
                      <Toolbar className={classes.toolbarItem2}>
                        {/* <div>{displayname}</div> */}

                        <Grid container spacing={0}>
                          <Grid item xs={3}>
                            <div style={{ padding: "5px" }}>
                              <Typography variant="h5" className={classes.auth}>
                                Authorization Status:
                              </Typography>
                            </div>

                            <div style={{ padding: "5px" }}>
                              <Typography variant="h5" className={classes.auth}>
                                Decision:
                              </Typography>
                            </div>
                            <div style={{ padding: "5px" }}>
                              <Typography variant="h5" className={classes.auth}>
                                Procedure Status:
                              </Typography>
                            </div>
                          </Grid>
                          <Grid item xs={3}></Grid>

                          <Grid item xs={3}>
                            <div style={{ padding: "5px" }}>
                              <Typography variant="h5" className={classes.auth}>
                                Reason:
                              </Typography>
                            </div>
                            <div style={{ padding: "5px" }}>
                              <Typography variant="h5" className={classes.auth}>
                                Reference#:
                              </Typography>
                            </div>
                          </Grid>
                          <Grid item xs={3}></Grid>
                          <ButtonComponent
                            variant="contained"
                            color="primary"
                            btn="btn"
                          >
                            Create Auth for same member
                          </ButtonComponent>
                          <ButtonComponent
                            variant="contained"
                            color="primary"
                            btn="btn"
                          >
                            Create Auth for different member
                          </ButtonComponent>
                        </Grid>
                      </Toolbar>
                    </>
                  ) : null}

                  <ButtonComponent
                    variant="contained"
                    type="submit"
                    color="primary"
                    btn="btn"
                    handleSubmit={onSecondClick}
                  >
                    Submit
                    {/* <ChevronRightIcon /> */}
                  </ButtonComponent>
                </>
              ) : (
                <Toolbar className={classes.toolbarItem2}>
                  <form
                    className={classes.gridContainer}
                    autoComplete="off"
                    onSubmit={handleFormSubmit}
                  >
                    <Grid className={classes.line} container>
                      <Box
                        height="100%"
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                        alignItems="center"
                      >
                        {testData.authorization.map(
                          (input: any, index: any) => (
                            <>
                              {input.type === "radio" ? (
                                <>
                                  <Grid item xs={12}>
                                    <Typography
                                      variant="h6"
                                      style={{
                                        color: "#383131",
                                      }}
                                      key={index}
                                    >
                                      {input.textlabel}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    {input.list.map((item: any) => {
                                      return (
                                        <>
                                          <RadioButtonComp
                                            label={item.name}
                                            color="primary"
                                            size="small"
                                            checked={item.check}
                                            handleRadio={handleRadio}
                                          />
                                        </>
                                      );
                                    })}
                                  </Grid>
                                </>
                              ) : (
                                <></>
                              )}
                            </>
                          )
                        )}
                      </Box>
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      spacing={3}
                      xs={12}
                      style={{ marginTop: "2px" }}
                    >
                      {testData.dropdown.map((input: any, index: any) => (
                        <>
                          {input.type === "dropdown" ? (
                            <>
                              <Grid item xs={6} md={4} lg={3}>
                                <Typography variant="body1" key={index}>
                                  {input.textlabel}
                                </Typography>

                                <Dropdown
                                  input={input}
                                  handleChange={handleselect}
                                />

                                {input.errState ? (
                                  <Typography color="secondary">
                                    {input.value === ""
                                      ? input.errEmptyMsg
                                      : null}
                                  </Typography>
                                ) : null}

                                {/* <FormControl fullWidth>
                                  <Select
                                  labelId="demo-customized-select-label"
                                  id="demo-customized-select"
                                  input={<BootstrapInput />}
                                  fullWidth
                                   onChange={(e) =>
                                      handleEventChange("dropdown", input, e)
                                    }
                                    onBlur={(e) =>
                                      handleBlurChange("dropdown", input, e)
                                    }
                                    value={input.value}
                                    name={input.name}
                                    // errmsg={input.errState}
                                  >
                                    {input.list.map((item:any) => {
                                      return (
                                        <MenuItem value={item.name}>
                                          <Typography
                                            style={{ fontSize: "12px" }}
                                          >
                                            {item.name}
                                          </Typography>
                                        </MenuItem>
                                      );
                                    })}
                                  </Select>
                                  {input.errState ? (
                                    <Typography color="secondary">
                                      {input.value === ""
                                        ? input.errEmptyMsg
                                        : null}
                                    </Typography>
                                  ) : null}
                                </FormControl> */}
                              </Grid>
                            </>
                          ) : (
                            <>
                              <Grid item xs={6} md={4} lg={3}>
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
                                    <InputField
                                      variant="outlined"
                                      fullWidth={input.fullWidth}
                                      type={input.type}
                                      size="small"
                                      handleChange={(e) =>
                                        handleEventChange("dropdown", input, e)
                                      }
                                      handleBlur={(e) =>
                                        handleBlurChange("dropdown", input, e)
                                      }
                                      value={input.value}
                                      name={input.name}
                                      error={input.errState}
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
                            </>
                          )}
                        </>
                      ))}

                      <Grid
                        container
                        xs={12}
                        spacing={3}
                        style={{ marginLeft: "3px" }}
                      >
                        {testData.textfield.map((input: any, index: any) => (
                          <Grid item xs={6} md={4} lg={3}>
                            <Grid container direction="column">
                              <Grid item>
                                <Typography
                                  variant="body1"
                                  style={{ fontWeight: 600 }}
                                  key={index}
                                >
                                  {input.textlabel}
                                </Typography>
                              </Grid>

                              <Grid item>
                                <InputField
                                  variant="outlined"
                                  fullWidth={input.fullWidth}
                                  type={input.type}
                                  size="small"
                                  handleChange={(e) =>
                                    handleEventChange("textfield", input, e)
                                  }
                                  handleBlur={(e) =>
                                    handleBlurChange("textfield", input, e)
                                  }
                                  value={input.value}
                                  name={input.name}
                                  error={input.errState}
                                />
                                {input.errState ? (
                                  <Typography color="secondary">
                                    {input.value === ""
                                      ? input.errEmptyMsg
                                      : input.value.length < 3
                                      ? input.errMinMsg
                                      : input.value.length > 15
                                      ? input.errMaxMsg
                                      : null}
                                  </Typography>
                                ) : null}
                              </Grid>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>

                      {testData.textfield1.map((input: any, index: any) => (
                        <Grid item xs={6} md={4} lg={3}>
                          <Grid container direction="column">
                            <Grid item>
                              <Typography
                                variant="body1"
                                style={{ fontWeight: 600 }}
                                key={index}
                              >
                                {input.textlabel}
                              </Typography>
                            </Grid>

                            <Grid item>
                              <InputField
                                variant="outlined"
                                fullWidth={input.fullWidth}
                                type={input.type}
                                size="small"
                                handleChange={(e) =>
                                  handleEventChange("textfield1", input, e)
                                }
                                handleBlur={(e) =>
                                  handleBlurChange("textfield1", input, e)
                                }
                                value={input.value}
                                name={input.name}
                                error={input.errState}
                              />
                              {input.errState ? (
                                <Typography color="secondary">
                                  {input.value === ""
                                    ? input.errEmptyMsg
                                    : input.value.length < 3
                                    ? input.errMinMsg
                                    : input.value.length > 15
                                    ? input.errMaxMsg
                                    : null}
                                </Typography>
                              ) : null}
                            </Grid>
                          </Grid>
                        </Grid>
                      ))}

                      {testData.textfield2.map((input: any, index: any) => (
                        <Grid item xs={6} md={4} lg={3}>
                          <Grid container direction="column">
                            <Grid item>
                              <Typography
                                variant="body1"
                                style={{ fontWeight: 600 }}
                                key={index}
                              >
                                {input.textlabel}
                              </Typography>
                            </Grid>

                            <Grid item>
                              <InputField
                                variant="outlined"
                                fullWidth={input.fullWidth}
                                type={input.type}
                                size="small"
                                id={input.name}
                                handleChange={(e) =>
                                  handleEventChange("textfield2", input, e)
                                }
                                handleBlur={(e) =>
                                  handleBlurChange("textfield2", input, e)
                                }
                                value={input.value}
                                name={input.name}
                                error={input.errState}
                                phoneNumberFormatter={phoneNumberFormatter}
                              />
                              {input.errState ? (
                                <Typography color="secondary">
                                  {input.value === ""
                                    ? input.errEmptyMsg
                                    : !/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(
                                        input.value
                                      )
                                    ? input.errMinMsg
                                    : null}
                                </Typography>
                              ) : null}
                            </Grid>
                          </Grid>
                        </Grid>
                      ))}

                      {testData.textfield3.map((input: any, index: any) => (
                        <Grid item xs={6}>
                          <Grid container direction="column">
                            <Grid item>
                              <Typography
                                variant="body1"
                                style={{ fontWeight: 600 }}
                                key={index}
                              >
                                {input.textlabel}
                              </Typography>
                            </Grid>

                            <Grid item>
                              <InputField
                                variant="outlined"
                                fullWidth={input.fullWidth}
                                type={input.type}
                                size="small"
                                handleChange={(e) =>
                                  handleEventChange("textfield3", input, e)
                                }
                                handleBlur={(e) =>
                                  handleBlurChange("textfield3", input, e)
                                }
                                value={input.value}
                                name={input.name}
                                error={input.errState}
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

                      {testData.radio.map((input: any, index: any) => (
                        <>
                          {input.type === "radio" ? (
                            <>
                              <Grid item xs={6} md={4} lg={3}>
                                <Grid container direction="column">
                                  <Grid item>
                                    <Typography
                                      variant="body1"
                                      style={{ fontWeight: 600 }}
                                      key={index}
                                    >
                                      {input.textlabel}
                                    </Typography>
                                  </Grid>

                                  <Grid item>
                                    {input.list.map((item: any) => {
                                      return (
                                        <>
                                          <RadioButtonComp
                                            label={item.name}
                                            color="primary"
                                            size="small"
                                            checked={item.check}
                                            handleRadio={handleRadio}
                                          />
                                        </>
                                      );
                                    })}
                                  </Grid>
                                </Grid>
                              </Grid>
                            </>
                          ) : (
                            <>
                              <Grid item xs={6} md={4} lg={3}>
                                <Typography
                                  variant="body1"
                                  style={{ fontWeight: 600 }}
                                >
                                  {input.textlabel}
                                </Typography>
                                <FormControl fullWidth>
                                  {/* <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    input={<BootstrapInput />}
                                    fullWidth
                                    name={input.name}
                                    // required={input.required}
                                    onChange={(e) =>
                                      handleupdate(e, input.textlabel)
                                    }
                                  >
                                    {input.list.map((item: any, index: any) => {
                                      return (
                                        <MenuItem value={index + 1}>
                                          <Typography
                                            style={{ fontSize: "12px" }}
                                          >
                                            {item.name}
                                          </Typography>
                                        </MenuItem>
                                      );
                                    })}
                                  </Select> */}

                                  <Dropdown
                                    input={input}
                                    handleChange={handleupdate}
                                  />
                                </FormControl>
                              </Grid>
                            </>
                          )}
                        </>
                      ))}

                      <Grid container direction="row" spacing={2}>
                        {loop?.map((item: any) => {
                          return (
                            <Grid item xs={6}>
                              <Typography
                                variant="body1"
                                style={{ fontWeight: 600, marginLeft: "20px" }}
                              >
                                {"Request Admit Date"}
                              </Typography>

                              <FormControl fullWidth>
                                {/* <Select
                                  labelId="demo-customized-select-label"
                                  id="demo-customized-select"
                                  input={<BootstrapInput />}
                                  style={{ width: "90%", marginLeft: "10px" }}
                                >
                                  {item.list.map((li: { name: string }) => {
                                    return (
                                      <MenuItem value={li.name}>
                                        <Typography>{li.name}</Typography>
                                      </MenuItem>
                                    );
                                  })}
                                </Select> */}
                                <Dropdown
                                  input={item}
                                  handleChange={handleselect}
                                />
                              </FormControl>
                            </Grid>
                          );
                        })}

                        {loop.map(() => {
                          return (
                            <Grid item xs={6} md={4} lg={3}>
                              <Grid container direction="column">
                                <Grid item>
                                  <Typography
                                    variant="body1"
                                    style={{
                                      fontWeight: 600,
                                      marginLeft: "10px",
                                    }}
                                  >
                                    {"Admit Type"}
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <InputField
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    // className={text}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>

                    <br />
                    <div>
                      <Typography variant="h5" className={classes.typomobile}>
                        Searching and Facility Provider Information
                      </Typography>
                    </div>

                    <Typography style={{ paddingTop: "5px" }}>
                      Servicing facility provider information
                    </Typography>
                    <div className={classes.tool}>
                      <Grid container xs={12}>
                        <Grid item xs={6} md={8} lg={9}>
                          <Typography
                            variant="h6"
                            style={{ marginLeft: "24px" }}
                            className={classes.servicetypo}
                          >
                            Searching and Facility Providers
                          </Typography>
                        </Grid>

                        <Grid item xs={6} md={4} lg={3}>
                          <IconButton
                            icon="circle"
                            variant="contained"
                            btn="btn"
                            handleClick={() => setserviceProvider(true)}
                          >
                            Add Provider
                          </IconButton>
                        </Grid>
                      </Grid>
                    </div>

                    <div>
                      <Toolbar className={classes.toolbarItem2}>
                        <div className={classes.gridContainer}>
                          <Datatable
                            rows={mainlist}
                            rowsshow={mainlist.length > 0 ? true : false}
                            headCells={ServiceheadCells}
                            handlerowdata={[]}
                            IcdModal={false}
                          />
                        </div>
                      </Toolbar>
                    </div>
                    <br />

                    <div>
                      <Typography
                        variant="h5"
                        style={{
                          color: "#383131",
                          borderBottom: "1px solid #d6d0d0",
                        }}
                      >
                        *Diagnosis
                      </Typography>
                    </div>
                    <Typography style={{ paddingTop: "5px" }}>
                      Please add all diagnosis before selecting procedure
                    </Typography>

                    <Toolbar className={classes.tool}>
                      <Grid container>
                        <Grid item xs={6} md={8} lg={9}>
                          <Typography
                            variant="h6"
                            className={classes.servicetypo}
                          >
                            ICD - Search Results
                          </Typography>
                        </Grid>

                        <Grid item xs={6} md={4} lg={3}>
                          <IconButton
                            icon="circle"
                            variant="contained"
                            handleClick={() => setIcdmodal(true)}
                            btn="diagnosisbtn"
                          >
                            Add Diagnosis
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Toolbar>
                    <Toolbar className={classes.toolbarItem2}>
                      <div className={classes.gridContainer}>
                        <Datatable
                          headCells={icdheadCells}
                          rowsshow={selectIcddetails.length > 0 ? true : false}
                          rows={selectIcddetails || [{}]}
                          handlerowdata={[]}
                          IcdModal={false}
                        />
                      </div>
                    </Toolbar>

                    <div className={classes.resetbtn}>
                      <IconButton
                        icon="left"
                        variant="contained"
                        type="reset"
                        color="primary"
                      >
                        Cancel
                      </IconButton>

                      <IconButton
                        icon="right"
                        variant="contained"
                        type="submit"
                        color="primary"
                      >
                        Submit
                      </IconButton>
                    </div>
                  </form>
                </Toolbar>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>

      <Formmodal
        open={serviceProvider}
        handleClose={handleClose}
        setmodalformdata={setmodalformdata}
        modalformdata={modalformdata}
        handleSubmit={handleSubmit}
      />

      <IcdModal
        open={IcdmodalOpen}
        handleClose={handleClose}
        setselectIcddetails={setselectIcddetails}
        setIcdmodal={setIcdmodal}
        selectIcddetails={selectIcddetails}
      />
      <SnackBar
        handleClose={handleSnackbarClose}
        open={snackBarOpen}
        severity={severity}
        message={message}
      />
    </>
  );
}
