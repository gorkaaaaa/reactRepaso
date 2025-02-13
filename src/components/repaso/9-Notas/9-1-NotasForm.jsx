import { useForm } from "react-hook-form";

const NotasForm = (props) => {
  const NOTA = {
    CONTENIDO: "contenido",
    FECHA: "fecha",
    IMPORTANTE: "importante",
  };

  const NOTAINICIAL = {
    contenido: "",
    fecha: "",
    importante: true,
  };

  const {
    register, //Registra los campos
    handleSubmit, // Envía el formulario
    reset, // Resetea el formulario al estado inicial
    formState: { errors }, // Nos muestra el estado de lo que le digamos, en este caso errors
    watch, // Contiene los datos en tiempo real del formulario
  } = useForm({ defaultValues: NOTAINICIAL });

  console.log(errors);

  const manejarFormulario = handleSubmit((nuevaNota) => {
    //Cosecha del chatGPT, si la comparación es cierta devuelve True y se lo asigna a importante
    // si no, es false y tb lo asigna, una locura
    nuevaNota.importante = nuevaNota.importante === "true";

    console.log(props);

    props.manejarAccion(nuevaNota);

    reset(NOTAINICIAL);
  });

  return (
    <form id="formulario" onSubmit={manejarFormulario}>
      <p>
        <strong>Nueva nota</strong>
      </p>
      <label htmlFor={NOTA.CONTENIDO}>Contenido</label>
      <input
        id={NOTA.CONTENIDO}
        type="text"
        {...register(NOTA.CONTENIDO, {
          required: { value: true, message: "El contenido es obligatorio" },
        })}
      ></input>
      <br></br>
      <span>{errors.contenido?.message}</span>

      <label htmlFor={NOTA.FECHA}>Fecha</label>
      <input
        id={NOTA.FECHA}
        type="date"
        {...register(NOTA.FECHA, {
          required: { value: true, message: "La fecha es obligatoria" },
        })}
      ></input>
      <br></br>
      <span>{errors.contenido?.message}</span>

      <input
        id="importante"
        type="radio"
        value={true}
        {...register(NOTA.IMPORTANTE)}
      ></input>
      <label for="si" htmlFor={NOTA.IMPORTANTE}>
        Importante
      </label>

      <input
        id="no-importante"
        type="radio"
        value={false}
        {...register(NOTA.IMPORTANTE)}
      ></input>
      <label for="no" htmlFor={NOTA.IMPORTANTE}>
        No importante
      </label>

      <button>Añadir nota</button>
    </form>
  );
};

export default NotasForm;
