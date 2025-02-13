import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import TemaIdiomaContext from "../contexts/12-TemaIdiomaContext";

const TemasForm = (props) => {
  const idioma = useContext(TemaIdiomaContext);

  const TEMA = {
    TEMA: "tema",
  };

  const {
    register, //Registra los campos
    handleSubmit, // Envía el formulario
    reset, // Resetea el formulario al estado inicial
    formState: { errors }, // Nos muestra el estado de lo que le digamos, en este caso errors
    watch, // Contiene los datos en tiempo real del formulario
  } = useForm({ [TEMA.TEMA]: "" });

  //Con el watch monitorizamos los cambios en los campos del formulario, igual el de busqueda se podria
  // haber hecho con watch tambien
  const tema = watch(TEMA.TEMA);

  useEffect(() => {
    if (tema) {
      props.manejarTema({ tema });
    }
  }, [tema]);

  return (
    <form>
      <input
        id="light"
        type="radio"
        value={"light"}
        {...register(TEMA.TEMA)}
      ></input>
      <label for="light" htmlFor={TEMA.TEMA}>
        {idioma.tema.op1}
      </label>

      <input
        id="dark"
        type="radio"
        value={"dark"}
        {...register(TEMA.TEMA)}
      ></input>
      <label for="dark" htmlFor={TEMA.TEMA}>
        {idioma.tema.op2}
      </label>
    </form>
  );
};
export default TemasForm;
