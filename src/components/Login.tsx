import React, { FC,useState } from "react";
import {
    makeStyles,
    Typography,
    Grid,
    Container
} from "@material-ui/core";
import logo from "../assets/logo.png";
import LoginData from "../pages/LoginData.json";
import { useHistory } from "react-router-dom";
import Button from '../UI/components/Button/Button';
import InputField from "../UI/components/TextField/InputField";
// import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
        marginTop: "100px",
        backgroundColor: "white",
    },
    logo: {
        width: "100px",
        height: "43px",
        marginLeft: "124px",
    },
    typo: {
        ...theme.typography.body2,
        margin: "10px",
        display: "flex",
        justifyContent: "space-between",
    },
    input: {
        width: "100%",
        borderRadius: "5px",
        height: "38px",
        fontSize: "15px",
    },
    btn: {
        width: "100%",
        textTransform: "none",
    },
}));



const Login:FC= () => {
   const classes = useStyles();
    const history = useHistory();
    const [ErrorMessage, setErrorMessage] = useState<string>("");
    const [logindata, setlogindata] = useState(LoginData);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        var array: any[] = [];
        let errors = {};
        // eslint-disable-next-line array-callback-return
        logindata.map((item: { value: string | any[]; errState: boolean; }) => {
            if (
                item.value === "" ||
                (item.value !== "" && item.value.length < 3) ||
                item.value.length > 10
            ) {
                item.errState = true;
                // errors[item.name] = "validation Error";
            }
            array.push(item);
        });
        setlogindata(array);
        if (Object.keys(errors).length === 0) {
        }

        if (logindata[0].value === "user" && logindata[1].value === "user") {
            history.push("/dashboard");
            localStorage.setItem("username", logindata[0].value);
        } else if (
            logindata[0].value === "admin" &&
            logindata[1].value === "admin"
        ) {
            // eslint-disable-next-line no-restricted-globals
            history.push("/dashboard");
            localStorage.setItem("username", logindata[0].value);
        } else if (logindata[0].value === "" && logindata[1].value === "") {
            setErrorMessage("Invalid username or password");
        } else {
            setErrorMessage("Invalid username or password");
        }
        // const newinputformelems:any = logindata.map(each=> each.value = "");
        // setlogindata(newinputformelems);
        
    };

    const handlechange = (info: { name: string; }, e: { target: { value: string; }; }) => {
        var array: ({
            name: string; textlabel: string; errState: boolean; variant: string;
            fullWidth: boolean; errEmptyMsg: string; xs: number; sm: number; errMinMsg: string;
            errMaxMsg: string; value: string; type?: undefined;
        } | {
            name: string; textlabel: string;
            errState: boolean; type: string; variant: string; fullWidth: boolean; errEmptyMsg: string;
            xs: number; sm: number; errMinMsg: string; errMaxMsg: string; value: string;
        })[] = [];
        // eslint-disable-next-line array-callback-return
        logindata.map((item: { name: string; textlabel: string; errState: boolean; variant: string; fullWidth: boolean; errEmptyMsg: string; xs: number; sm: number; errMinMsg: string; errMaxMsg: string; value: string; type?: undefined; } | { name: string; textlabel: string; errState: boolean; type: string; variant: string; fullWidth: boolean; errEmptyMsg: string; xs: number; sm: number; errMinMsg: string; errMaxMsg: string; value: string; }) => {
            if (item.name === info.name) {
                item.value = e.target.value;
                if (item.value !== "") item.errState = false;
            }
            array.push(item);
        });
        setlogindata(array);
    };

    const handleBlur = (info:any, e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        var array: any[] = [];
        // eslint-disable-next-line array-callback-return
        logindata.map((item: { name: string; value: string | any[]; errState: boolean; }) => {
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
        // setlogindata(array);
    };


    return (
        <Container className={classes.container} maxWidth="xs">
            <img src={logo} alt="mhk" className={classes.logo} />
            <Typography variant="h5" color="primary" align="center">
                Welcome to MHK Admin.
            </Typography>
            <Typography variant="body2" color="primary" align="center">
                Please sign to get access.
            </Typography>
            <Typography variant="body2" color="secondary" align="center">
                {ErrorMessage}
            </Typography>
            <br />
            <form onSubmit={handleSubmit} autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {logindata.map((input: { name: string; textlabel: string; errState: boolean; variant: string; fullWidth: boolean; errEmptyMsg: string; xs: number; sm: number; errMinMsg: string; errMaxMsg: string; value: string; type?: undefined; } | { name: string; textlabel: string; errState: boolean; type: string; variant: string; fullWidth: boolean; errEmptyMsg: string; xs: number; sm: number; errMinMsg: string; errMaxMsg: string; value: string; }) => (
                            <Grid item xs={12}>
                                <Grid container direction="column" style={{ marginTop: '10px' }}>
                                    <Grid item>
                                        <Typography variant="body1">
                                            {input.textlabel}
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12}>
                                        <InputField
                                           handleChange={(e:any) => handlechange(input, e)}
                                            value={input.value}
                                            handleBlur={(e:any) => handleBlur(input, e)}
                                            type={input.type}
                                            fullWidth={true}
                                            size="small"
                                            variant="outlined"
                                           

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
                    <Grid item xs={12}>
                        <Button 
                        color="primary"
                        variant="contained"
                        fullWidth={true}
                        type="submit"
                        
                        >
                            Sign In
                         </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
export default Login;