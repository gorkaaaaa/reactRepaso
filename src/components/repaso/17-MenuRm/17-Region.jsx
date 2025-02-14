import { useParams } from "react-router-dom";
import rm from "../../../mocks/17-mock-rm";

const Region = () => {
    const region=useParams();
    const nombreRegion=region.ciudad
    console.log(nombreRegion)
  return (
    <div>
      <h1>{nombreRegion}</h1>
      <p>{rm[nombreRegion].poblacion}</p>
      <p>{rm[nombreRegion].superficie}</p>
      <p>{rm[nombreRegion].elevacion}</p>
      <img src={rm[nombreRegion].bandera}></img>
    </div>
  );
};
export default Region;
