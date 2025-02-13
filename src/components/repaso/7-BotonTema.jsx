import React from "react";
import { useContext } from "react";
import TemaContext from "./contexts/7-TemaContext";

const BotonTema=(prop)=>{
    const tema=useContext(TemaContext)
    return(
        <button style={{background:tema.background, color:tema.foreground}}>
            {prop.etiqueta}
        </button>
    );
}
export default BotonTema;