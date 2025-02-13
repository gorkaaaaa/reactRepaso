import React from "react";
import BotonTema from "./7-BotonTema";
import { useContext } from "react";
import TemaContext from "./contexts/7-TemaContext";

const BarraHerramientas=()=>{
    const temaNombre=useContext(TemaContext)
    return(
        <div>
            <BotonTema etiqueta="hola"></BotonTema>
            <BotonTema etiqueta="amiguiko"></BotonTema>
            <p>{temaNombre}</p>
        </div>
    );
}
export default BarraHerramientas;