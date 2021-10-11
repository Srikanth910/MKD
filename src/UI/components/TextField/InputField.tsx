import React, { ChangeEvent, FC } from 'react';
import { TextField,makeStyles } from "@material-ui/core";


interface Props {
    children?: React.ReactNode;
    handleChange?:(e: ChangeEvent<HTMLInputElement>)=>void;
    value?:string;
    handleBlur?:(e: React.FocusEvent<HTMLInputElement>)=>void;
    type?:string | undefined;
    id?:string;
    placeholder?:string;
    fullWidth?:boolean;
    size?:any;
    variant?:any;
    name?:any;
    error?:any;
    phoneNumberFormatter?:any
    text?:any;
  }

  const useStyles = makeStyles(() => ({
    root: {
        border:"1px solid red",
        borderRadius:'5px'
    },
    textstyle:{
        width: "90%",
        marginLeft:'10px'
    }

}));

const InputField:FC<Props> = ({handleChange,value,handleBlur,type,id,placeholder,fullWidth,size,variant,name,error,phoneNumberFormatter,text}) => {
    const classes = useStyles(); 
    return (
        <>
            <TextField
                 variant={"outlined"}
                 size={size}
                fullWidth={fullWidth}
                onChange={handleChange}
                value={value}
                onBlur={handleBlur}
                type={type}
                id={id}
                placeholder={placeholder}
                name={name}
                className={error ? classes.root : text ? classes.textstyle : ""}
                onKeyDown={id==="phone_number"?phoneNumberFormatter:null}

            >
            </TextField>
        </>
    )
}
export default InputField;