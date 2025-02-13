import { useForm } from "react-hook-form";

const FrutasForm = (props) => {
  const FRUTA = {
    ANADIR: "frutaNueva",
    BORRAR: "frutaBorrar",
  };

  const {
    register: register1, //Registra los campos
    handleSubmit: handleSubmit1, // Envía el formulario
    reset: reset1, // Resetea el formulario al estado inicial
    formState: { errors: errors1 }, // Nos muestra el estado de lo que le digamos, en este caso errors
  } = useForm({ defaultValues: "" });

  const {
    register: register2, //Registra los campos
    handleSubmit: handleSubmit2, // Envía el formulario
    reset: reset2, // Resetea el formulario al estado inicial
    formState: { errors: errors2 }, // Nos muestra el estado de lo que le digamos, en este caso errors
  } = useForm({ defaultValues: "" });

  console.log(errors1, errors2);

  const manejarFormulario = handleSubmit1((nuevaFruta) => {
    console.log(nuevaFruta);

    props.manejarInsercion(nuevaFruta);

    reset1({ frutaNueva: "" }, { frutaBorrar: "" });
  });

  function comprobarBorrado(numero) {
    if(props.nElementos===0) return "Lista vacia"
    else if(props.nElementos<+numero) return "Elemento no disponible"
    else if(numero<=0) return "Numero no valido"
    else return true

  }

  const manejarBorrado = handleSubmit2((eliminaFruta) => {
    props.manejarBorrado(eliminaFruta);

    reset2({ frutaNueva: "" }, { frutaBorrar: "" });
  });

  return (
    <div>
      <form onSubmit={manejarFormulario}>
        <label htmlFor={FRUTA.ANADIR}>
          Escribe la fruta que quieres añadir
        </label>
        <input
          id={FRUTA.ANADIR}
          type="text"
          {...register1(FRUTA.ANADIR)}
        ></input>
        <button>Añadir fruta</button>
      </form>

      <form onSubmit={manejarBorrado}>
        <label htmlFor={FRUTA.BORRAR}>
          Escribe la fruta que quieres eliminar
        </label>
        <input
          id={FRUTA.BORRAR}
          type="text"
          {...register2(FRUTA.BORRAR, {
            validate: { comprobarBorrado },
          })}
        ></input> <br /><span>{errors2.frutaBorrar?.message}</span><br />
        <button>eliminar fruta</button>
      </form>
    </div>
  );
};

export default FrutasForm;
