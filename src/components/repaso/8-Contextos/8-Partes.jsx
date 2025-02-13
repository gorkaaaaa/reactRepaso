import React, { useContext } from "react";
import MisTemasContext from "../contexts/8-MisTemas";

const Partes = (props) => {
  return (
    <div>
      <ol>
        {props.tema.parts.map((partes) => (
          <li>
            {partes.name} Ejercicios: {partes.exercises}
          </li>
        ))}
      </ol>
      <p>sdfsdf</p>
    </div>
  );
};

export default Partes;
