import React, { FC } from 'react';
import { FormControlLabel,Radio } from "@material-ui/core";

interface Props {
    label?: any;
    color?:any;
    size?:any;
    handleRadio:(e:any, value:any)=>void
    checked:any,
   
}

const RadioButton: FC<Props> = ({ label,color,size , handleRadio, checked}) => {
    return (
        <>
        <FormControlLabel
        control={<Radio color={color} size={size}/>} 
        label={label} 
         onChange={(e)=>handleRadio(e,label )}
         checked={checked}
        />

        </>
    )
}
export default RadioButton;