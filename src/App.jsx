import "./App.css";
import Contador from "./components/repaso/1-Contador";
import ContadorIzdaDer from "./components/repaso/2-ContadorIzdaDer";
import Rav from "./components/repaso/3-Rav";
import RavObj from "./components/repaso/4-RavObj";
import RavObjRed from "./components/repaso/5-RavObjRed";
import Reloj from "./components/repaso/6-Reloj";
import temas from "./mocks/7-mocks-temas";
import TemaContext from "./components/repaso/contexts/7-TemaContext";
import BarraHerramientas from "./components/repaso/7-BarraHerramientas";
import MisTemasContext from "./components/repaso/contexts/8-MisTemas";
import misTemas from "./mocks/8-mock-misTemas";
import Temario from "./components/repaso/8-Contextos/8-Temario";
import Partes from "./components/repaso/8-Contextos/8-Partes";
import Temas from "./components/repaso/8-Contextos/8.1-Temas";
import PartesR from "./components/repaso/8-Contextos/8.1-Partes";
import notas from "./mocks/9-mock-notas";
import NotasLista from "./components/repaso/9-Notas/9-NotasLista";
import Boton from "./components/repaso/9-Notas/9-Boton";
import frutas from "./mocks/10-mock-frutas";
import Frutas from "./components/repaso/10-Frutas/10-Frutas";
import { useState } from "react";
import FrutasForm from "./components/repaso/10-Frutas/10-FrutasForm";
import listinTelefonico from "./mocks/11-mock-telefonos";
import Telefonos from "./components/repaso/11-Telefonos/11-Telefonos";
import ContactoForm from "./components/repaso/11-Telefonos/11-ContactoForm";
import BuscarForm from "./components/repaso/11-Telefonos/11-BuscarForm";
import BotonTema from "./components/repaso/7-BotonTema";
import BotonTemaF from "./components/repaso/12-TemasForm/12-BotonTemaF";
import TemasForm from "./components/repaso/12-TemasForm/12-TemasForm";
import TemaIdiomaContext from "./components/repaso/contexts/12-TemaIdiomaContext";
import idiomas from "./mocks/12-mock-idiomas";
import IdiomaForm from "./components/repaso/12-TemasForm/12-IdiomaForm";

function App() {
  // function muestraTemas(tema){
  //   return <Temas tema={tema}></Temas>
  // }

  // const [listaFrutas, setListaFrutas] = useState(frutas);

  // function muestraFrutas(fruta, index) {
  //   return <Frutas index={index} fruta={fruta}></Frutas>;
  // }

  // IMPORTANTE: en este caso, el mock era un array de elemntos de tipo texto, poniendolo entre llaves
  // estamos accediendo al contenido, aquí he fallatdo porque el anterior mock era un array de objetos con
  // atributos y al recibirlo podíamos pasar el objeto desde el form con sus atributos, aquí para INSERTARLO
  // hay que acceder SOLO al contenido
  // function manejarInsercion({ frutaNueva }) {
  //   setListaFrutas([...listaFrutas, frutaNueva]);
  // }

  // function manejarBorrado({ frutaBorrar }) {
  //   console.log({ frutaBorrar });

  //   const listaFrutasFiltrada = listaFrutas.filter(
  //     (fruta, index) => index !== frutaBorrar-1
  //   );
  //   setListaFrutas(listaFrutasFiltrada);
  // }

  // const [agenda, setAgenda]=useState(listinTelefonico);
  // const [agendaCompleta, setAgendaCompleta]=useState(listinTelefonico);
  // function muestraTelefonos(telefono){
  //   return <Telefonos telefono={telefono}></Telefonos>
  // }

  // function agregarContacto(contacto){
  //   setAgenda([...agenda, contacto])
  //   setAgendaCompleta([...agendaCompleta,contacto])
  // }

  // //Tiene que tener el mismo nombre que el campo en el form
  // function buscarContacto({buscar}){
  //   console.log(buscar)
  //   console.log(agendaCompleta)
  //   if(buscar===" "){
  //     setAgenda(agendaCompleta)
  //   }else{
  //     const contactoFiltrado=agendaCompleta.filter((contactoAgenda)=>{
  //       return contactoAgenda.nombre.toLocaleLowerCase().startsWith(buscar.toLocaleLowerCase())
  //     });
  //     setAgenda(contactoFiltrado)
  //   }

  // }

  //const temaSelect=temas.dark;

  const [temaSelect, setTemaSelect] = useState(temas.dark);
  const [idioma, setIdioma]=useState(idiomas.es);

  console.log(temaSelect);

  function selectTema({ tema }) {
    console.log(tema);
    if (tema === "dark") setTemaSelect(temas.dark);
    if (tema === "light") setTemaSelect(temas.light);
  }

  function selectIdioma({idioma}){
    if(idioma==="es") setIdioma(idiomas.es);
    if(idioma==="gb") setIdioma(idiomas.gb);
    if(idioma==="fr") setIdioma(idiomas.fr);
  }

  return (
    <>
      <IdiomaForm selectIdioma={selectIdioma}></IdiomaForm>
      <TemaIdiomaContext value={idioma}>
        <TemasForm manejarTema={selectTema}></TemasForm>
        <TemaContext value={temaSelect}>
          <BotonTemaF idioma={idioma} ></BotonTemaF>
        </TemaContext>
      </TemaIdiomaContext>

      {/* <h1>Buscar</h1>
      <BuscarForm manejarBusqueda={buscarContacto}></BuscarForm>
      <h1>Nuevo Contacto</h1>
      <ContactoForm manejarAccion={agregarContacto}></ContactoForm>
      <h1>Agenda</h1>
      <ul>
        {agenda.map(muestraTelefonos)}
      </ul> */}

      {/* <h1>FRUTAS</h1>
      <ol>{listaFrutas.map(muestraFrutas)}</ol>
      <FrutasForm
        manejarInsercion={manejarInsercion}
        manejarBorrado={manejarBorrado}
        nElementos={listaFrutas.length}
      ></FrutasForm> */}
      {/* <Boton></Boton> */}
      {/* <ul>
        {misTemas.map(muestraTemas)}
      </ul> */}
      {/* <Contador n="1" ></Contador> */}
      {/* <ContadorIzdaDer></ContadorIzdaDer> */}
      {/* <Rav></Rav> */}
      {/* <RavObjRed></RavObjRed> */}
      {/* <Reloj></Reloj> */}
      {/* <TemaContext.Provider value={temas.dark}>
        <BarraHerramientas></BarraHerramientas>
      </TemaContext.Provider> */}
      {/* <MisTemasContext.Provider value={misTemas}>
        <Temario></Temario>
      </MisTemasContext.Provider> */}
    </>
  );
}

export default App;
