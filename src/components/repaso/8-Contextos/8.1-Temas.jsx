import PartesR from "./8.1-Partes";

const Temas = (props) => {
  function muestraPartes(partes) {
    return <PartesR partes={partes}></PartesR>;
  }
  function total (acum,horas){
    return acum+horas.exercises;
  }
  const totalHoras=props.tema.parts.reduce(total, 0);
  return(
     <div>
        <li>{props.tema.name}
            <ol>{props.tema.parts.map(muestraPartes)}</ol>
            <p>total horikas: {totalHoras}</p>
        </li>
        
     </div>
    );
};
export default Temas;
