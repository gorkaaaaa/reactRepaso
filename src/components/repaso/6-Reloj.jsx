import { useEffect, useState } from "react";

const Reloj = () => {
  const [reloj, setReloj] = useState({ horas: 23, minutos: 59, segundos: 58 });

  function moverReloj() {
    //se pueden usar funciones anonimas dentro del set donde recibirá como parámetro el último valor
    //es decir, el más actualizado del objeto al que hace set
    setReloj((relojAct)=>{
        const nuevoReloj = { ...relojAct };

        nuevoReloj.segundos += 1;
    
        if (nuevoReloj.segundos == 60) {
          nuevoReloj.minutos += 1;
          nuevoReloj.segundos = 0;
        }
        if (nuevoReloj.minutos == 60) {
          nuevoReloj.horas += 1;
          nuevoReloj.minutos = 0;
        }
        if(nuevoReloj.horas==24){
            nuevoReloj.horas=0;
        }
        return nuevoReloj;
    })
  }

  function contador() {
    setInterval(moverReloj, 1000);
  }

  useEffect(contador, []);

  return (
    <div>
      <p>h:{reloj.horas}</p>
      <p>min:{reloj.minutos}</p>
      <p>seg:{reloj.segundos}</p>
      <button>eerre</button>
      <p>sfdasdfsdf</p>
    </div>
  );
};
export default Reloj;
