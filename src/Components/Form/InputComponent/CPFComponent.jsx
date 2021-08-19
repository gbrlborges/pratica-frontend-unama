import { useState } from "react";
import InputMask from "react-input-mask"

const CPFComponent = (cpfreturn) => {
    //const [cpfvalue, setcpfvalue] =useState();

    return (
        <InputMask 
        placeholder="___.___.___-__" 
        mask="999.999.999-99"/>
    )
}
 
export default CPFComponent;