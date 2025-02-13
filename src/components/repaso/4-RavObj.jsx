import { useEffect, useState } from "react";

const RavObj = () => {
  const [colores, setColores] = useState({ rojo: 0, amarillo: 0, verde: 0 });

  function incrementarRojo() {
    setColores({ ...colores, rojo: colores.rojo + 1 });
  }

  function incrementarAmarillo() {
    setColores({ ...colores, amarillo: colores.amarillo + 1 });
  }

  function incrementarVerde() {
    setColores({ ...colores, verde: colores.verde + 1 });
  }

  return (
    <div>
      <button onClick={incrementarRojo}>R</button>
      <button onClick={incrementarAmarillo}>A</button>
      <button onClick={incrementarVerde}>V</button>
      <p>rojo:{colores.rojo}</p>
      <p>amarillo:{colores.amarillo}</p>
      <p>verde:{colores.verde}</p>
      <p>totalP:{colores.rojo + colores.amarillo + colores.verde}</p>
      <p>
        %r:
        {(colores.rojo / (colores.rojo + colores.amarillo + colores.verde)) *
          100}
      </p>
      <p>
        %r:
        {(colores.amarillo /
          (colores.rojo + colores.amarillo + colores.verde)) *
          100}
      </p>
      <p>
        %r:
        {(colores.verde / (colores.rojo + colores.amarillo + colores.verde)) *
          100}
      </p>
    </div>
  );
};

export default RavObj;
