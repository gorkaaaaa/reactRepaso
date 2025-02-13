import { useForm } from "react-hook-form";

const ContactoForm = (props) => {
  const CONTACTO = {
    NOMBRE: "nombre",
    TELEFONO: "telefono",
  };
  const NUEVOCONTACTO = {
    nombre: "",
    telefono: "",
  };
  const {
    register, //Registra los campos
    handleSubmit, // Envía el formulario
    reset, // Resetea el formulario al estado inicial
    formState: { errors }, // Nos muestra el estado de lo que le digamos, en este caso errors
    watch, // Contiene los datos en tiempo real del formulario
  } = useForm({ defaultValues: NUEVOCONTACTO });

  const manejarFormulario = handleSubmit((nuevoContacto) => {
    console.log(props);

    props.manejarAccion(nuevoContacto);

    reset(NUEVOCONTACTO);
  });

  return (
    <form id="formulario" onSubmit={manejarFormulario}>
      <label htmlFor={CONTACTO.NOMBRE}>Nombre</label>
      <input
        id={CONTACTO.NOMBRE}
        type="text"
        {...register(CONTACTO.NOMBRE, {
          required: { value: true, message: "Nombre obligatorio" },
        })}
      ></input><br />

      <label htmlFor={CONTACTO.TELEFONO}>Telefono</label>
      <input
        id={CONTACTO.TELEFONO}
        type="text"
        {...register(CONTACTO.TELEFONO, {
          required: { value: true, message: "Telefono obligatorio" },

        })}
      ></input><br />
      <button>Añadir contacto</button>
    </form>
  );
};

export default ContactoForm;
