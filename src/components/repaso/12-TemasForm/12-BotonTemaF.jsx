import React from "react";
import { useContext } from "react";
import TemaContext from "../contexts/7-TemaContext";
import TemaIdiomaContext from "../contexts/12-TemaIdiomaContext";

const BotonTemaF = () => {
  const tema = useContext(TemaContext);
  const idioma = useContext(TemaIdiomaContext);
  console.log(idioma);
  return (
    <div>
      <button style={{ background: tema.background, color: tema.foreground }}>
        {idioma.botonera.op1}
      </button>
      <button style={{ background: tema.background, color: tema.foreground }}>
        {idioma.botonera.op2}
      </button>
      <button style={{ background: tema.background, color: tema.foreground }}>
        {idioma.botonera.op3}
      </button>
    </div>
  );
};
export default BotonTemaF;
