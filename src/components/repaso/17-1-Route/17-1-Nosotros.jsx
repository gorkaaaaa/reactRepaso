import { Link, useLocation, useNavigate } from "react-router-dom";

const Nosotros = () => {
  const location = useLocation();
  const navegar=useNavigate();

  return (
    <div>
      <h1>Nosotros</h1>
      <p>La ruta es {location.pathname}</p>
      <button onClick={navegar("/")}>volver al homer</button>
    </div>
  );
};

export default Nosotros;
