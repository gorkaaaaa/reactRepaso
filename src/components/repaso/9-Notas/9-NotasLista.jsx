const NotasLista = (props) => {
  function importante(imp) {
    console.log(imp)
    if (imp == true) return "importante";
    else if (imp == false) return "no importante";
    else return "no definido";
  }
  return (
    <div>
      <li>
        {props.nota.contenido}----- {importante(props.nota.importante)}
      </li>
      <p>{props.nota.fecha}</p>
    </div>
  );
};
export default NotasLista;
