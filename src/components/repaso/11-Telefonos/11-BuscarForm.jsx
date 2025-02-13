import { useForm } from "react-hook-form";

const BuscarForm = (props) => {
  const BUSCAR = {
    BUSCAR: "buscar",
  };

  const {
    register, //Registra los campos
    handleSubmit, // Envía el formulario
    reset, // Resetea el formulario al estado inicial
    formState: { errors }, // Nos muestra el estado de lo que le digamos, en este caso errors
    watch, // Contiene los datos en tiempo real del formulario
  } = useForm({ defaultValues: "" });

  const manejarBusqueda = handleSubmit((contactoBuscar) => {
    props.manejarBusqueda(contactoBuscar);
  });

  return (
    <form id="formulario" onChange={manejarBusqueda}>
      <label htmlFor={BUSCAR.BUSCAR}>Nombre</label>
      <input
        id={BUSCAR.BUSCAR}
        type="text"
        {...register(BUSCAR.BUSCAR)}
      ></input>
      <br />
    </form>
  );
};

export default BuscarForm;
