import { Link } from "react-router-dom";

const MenuRoute =()=>{
    return(
        <div>
            <Link to="/">
                Home
            </Link>
            <br />
            <Link to="/users/hijoputa">
                Bienvenido
            </Link>
            <br />
            <Link to="/inbox">
                Contador
            </Link>
            <br />
            <Link to="/about">
                Nosotros
            </Link>
            <br />
        </div>
    )
}
export default MenuRoute;