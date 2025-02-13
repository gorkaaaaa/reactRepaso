import { useEffect, useState, useReducer } from "react";

const RavObjRed = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "rojo": {
        return {
          rojo: state.rojo + 1,
          verde: state.verde,
          amarillo: state.amarillo,
        };
      }
      case "amarillo": {
        return {
          rojo: state.rojo + 1,
          verde: state.verde,
          amarillo: state.amarillo + 1,
        };
      }
      case "verde": {
        return {
          rojo: state.rojo,
          verde: state.verde + 1,
          amarillo: state.amarillo,
        };
      }
      default:
        return state;
    }
  }

  const [state, setState] = useReducer(reducer, {
    rojo: 0,
    amarillo: 0,
    verde: 0,
  });

  function incrementarRojo() {
    setState({ type: "rojo" });
  }

  function incrementarAmarillo() {
    setState({ type: "amarillo" });
  }

  function incrementarVerde() {
    setState({ type: "verde" });
  }

  return (
    <div>
      <button onClick={incrementarRojo}>R</button>
      <button onClick={incrementarAmarillo}>A</button>
      <button onClick={incrementarVerde}>V</button>
      <p>rojo:{state.rojo}</p>
      <p>amarillo:{state.amarillo}</p>
      <p>verde:{state.verde}</p>
      <p>totalP:{state.rojo + state.amarillo + state.verde}</p>
      <p>
        %r:
        {(state.rojo / (state.rojo + state.amarillo + state.verde)) * 100}
      </p>
      <p>
        %r:
        {(state.amarillo / (state.rojo + state.amarillo + state.verde)) * 100}
      </p>
      <p>
        %r:
        {(state.verde / (state.rojo + state.amarillo + state.verde)) * 100}
      </p>
    </div>
  );
};

export default RavObjRed;
