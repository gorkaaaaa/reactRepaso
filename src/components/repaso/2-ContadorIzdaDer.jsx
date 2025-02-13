import { useState } from "react";
import React from "react";

const ContadorIzdaDer =()=>{
    const[cont, setCont]=useState({izda:0, der:0})

    function incrementI(){
        setCont({...cont,
            izda: cont.izda+1
        })
    }

    function incrementD(){
        setCont({...cont,
            der: cont.der+1
        })
    }

    return(
        <div>
            <p>{cont.izda}</p>
            <button onClick={incrementI}>izda</button>

            <p>{cont.der}</p>
            <button onClick={incrementD}>der</button>
        </div>
    )
}
export default ContadorIzdaDer;