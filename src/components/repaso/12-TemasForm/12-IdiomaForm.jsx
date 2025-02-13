import { useEffect } from "react";
import { useForm } from "react-hook-form";

const IdiomaForm = (props) => {
  const IDIOMA = {
    IDIOMA: "idioma",
  };

  const {
    register, //Registra los campos
    handleSubmit, // Envía el formulario
    reset, // Resetea el formulario al estado inicial
    formState: { errors }, // Nos muestra el estado de lo que le digamos, en este caso errors
    watch, // Contiene los datos en tiempo real del formulario
  } = useForm({ defaultValues: "" });

  const idioma = watch(IDIOMA.IDIOMA);

  useEffect(() => {
    if (idioma) {
      props.selectIdioma({ idioma });
    }
  }, [idioma]);

  return (
    <form>
      <label htmlFor={IDIOMA.IDIOMA}></label>
      <select id={IDIOMA.IDIOMA} name={IDIOMA.IDIOMA}
      {...register(IDIOMA.IDIOMA)}>
        <option value="es">Español</option>
        <option value="gb">Ingles</option>
        <option value="fr">Frances</option>
      </select>
    </form>
  );
};
export default IdiomaForm;
