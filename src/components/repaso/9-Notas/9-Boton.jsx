import NotasLista from "./9-NotasLista";
import notas from "../../../mocks/9-mock-notas";
import { useState } from "react";
import NotasForm from "./9-1-NotasForm";

const Boton = () => {
  const [notasArray, setNotasArray] = useState(notas);

  function muestraNotas(nota) {
    return <NotasLista nota={nota}></NotasLista>;
  }

  function manejarAccion(nota){
    console.log(nota);
    setNotasArray([...notasArray,nota]);
  }

  function filtrar() {
    const notasFiltradas = notasArray.filter((nota) => {
      return nota.importante == true;
    });

    setNotasArray(notasFiltradas);
  }
  console.log(notasArray);
  return (
    <div>
      <h1>Notas</h1>
      <button onClick={filtrar}>Filtrar</button>
      <ul>{notasArray.map(muestraNotas)}</ul>
      <NotasForm manejarAccion={manejarAccion}></NotasForm>
    </div>
  );
};
export default Boton;
