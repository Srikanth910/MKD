import React,{FC} from "react";
import Appbar from "./Appbar";
import MedicalForm from './MedicalForm';
import Navbar from "./Navbar";

interface IProps{
  open:boolean,
  handleClose(): any,
  formdata:object
}

const Header:FC<IProps>=({open,handleClose,formdata})=> {
  return (
    <>
       <div>
         <Navbar />
        <Appbar />
        <MedicalForm open={open} handleClose={handleClose} formdata={formdata}/>
        </div>
    </>
  );
}
export default Header;
