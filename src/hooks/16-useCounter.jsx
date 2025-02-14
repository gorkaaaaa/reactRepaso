import { useState } from "react";

const useCounter = ({counter}) => {
  const [valorCounter, setCounter] = useState(+counter);

  // Función encargada de incrementar el Counter haciendo
  // uso del hook
  function incrementarCounter() {
    setCounter(valorCounter + 1);
  }
  function decrementarCounter() {
    setCounter(valorCounter - 1);
  }
  function resetearCounter() {
    setCounter(+counter);
  }

  return {valorCounter, incrementarCounter, decrementarCounter, resetearCounter}
};
export default useCounter;
