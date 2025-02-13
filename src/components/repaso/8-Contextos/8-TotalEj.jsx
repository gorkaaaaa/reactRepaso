import React, { useReducer } from "react";

const TotalEj=(props)=>{
    const partes=props.tema.parts
    let total=0;
    partes.forEach(part => {
        total=part.exercises+total;
    });
    return(
        <div>
            <p>Total ejercicios del curso {total}</p>
        </div>
    )
}

export default TotalEj;