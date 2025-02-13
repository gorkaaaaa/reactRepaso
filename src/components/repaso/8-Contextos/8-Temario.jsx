import React, { useContext } from "react";
import MisTemasContext from "../contexts/8-MisTemas";
import Partes from "./8-Partes";
import TotalEj from "./8-TotalEj";

const Temario = () => {
  const temasContexto = useContext(MisTemasContext);

  return (
    <div>
      {temasContexto.map((tema) => (
        <ul>
          <li>
            {tema.name}
            <Partes tema={tema}></Partes>
            <TotalEj tema={tema}></TotalEj>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Temario;
