import React from "react";
import { useState } from "react";

const Contador=(props)=>{
    const [cont, setCont]=useState(+props.n);
    const [clicks, setClicks]=useState([]);
    const [nClicksI, setNclicksI]=useState(0);
    const [nClicksR, setNclicksR]=useState(0);

    function incrementarCont(){
        setCont(cont+1)
        setClicks([...clicks, "i"])
        setNclicksI(nClicksI+1)
    }

    function resetearCont(){
        setCont(+props.n)
        setClicks([...clicks, "r"])
        setNclicksR(nClicksR+1)
    }

    const parImpar=cont %2==0 ? 'par' : 'impar' ;

    return(
        <div>
            <p>{cont}</p>
            <button onClick={incrementarCont}>incrementamos la pandemia</button>
            <button onClick={resetearCont}>reseteamos la pandemia</button>
            <p>{parImpar}</p>
            <p>{clicks}</p>
            <p>incrementar:{nClicksI}</p>
            <p>resetear {nClicksR}</p>
        </div>
    )
}
export default Contador;