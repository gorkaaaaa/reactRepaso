import { useEffect, useState } from "react";

const Rav = () => {
  const [rojo, setRojo] = useState(0);
  const [amarillo, setAmarillo] = useState(0);
  const [verde, setVerde] = useState(0);

  function incrementarRojo() {
    setRojo(rojo + 1);
  }

  function incrementarAmarillo() {
    setAmarillo(amarillo + 1);
  }

  function incrementarVerde() {
    setVerde(verde + 1);
  }

  return (
    <div>
      <button onClick={incrementarRojo}>R</button>
      <button onClick={incrementarAmarillo}>A</button>
      <button onClick={incrementarVerde}>V</button>
      <p>rojo:{rojo}</p>
      <p>amarillo:{amarillo}</p>
      <p>verde:{verde}</p>
      <p>totalP:{rojo + amarillo + verde}</p>
      <p>%r:{(rojo / (rojo + amarillo + verde)) * 100}</p>
      <p>%r:{(amarillo / (rojo + amarillo + verde)) * 100}</p>
      <p>%r:{(verde / (rojo + amarillo + verde)) * 100}</p>
    </div>
  );
};

export default Rav;
