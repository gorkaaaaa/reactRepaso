import { useParams } from "react-router-dom";

const Bienvenido =()=>{
    const {name}=useParams();

    return(<h1>Bienvenido {name}</h1>)
}

export default Bienvenido;