import React, { useState } from 'react'
import useCounter from '../../../hooks/16-useCounter';

const Counter = (props) => {

    const counter=useCounter({counter: props.counter})

    return (
      <div>
        <p>El valor del Counter es</p>
        <h1>{counter.valorCounter}</h1>
        <button onClick={counter.incrementarCounter}> Incrementa Counter </button>
        <button onClick={counter.decrementarCounter}> Decrementa Counter </button>
        <button onClick={counter.resetearCounter}> Resetear Counter </button>
      </div>
    )
}

export default Counter;

