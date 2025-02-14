import { useForm } from "react-hook-form";

const PostForm = (props) => {
  const POST = {
    CONTENIDO: "contenido",
    CUERPO: "cuerpo",
  };

  const NUEVOPOST = {
    contenido: "",
    cuerpo: "",
  };

  const {
    register, //Registra los campos
    handleSubmit, // Envía el formulario
    reset, // Resetea el formulario al estado inicial
    formState: { errors }, // Nos muestra el estado de lo que le digamos, en este caso errors
    watch, // Contiene los datos en tiempo real del formulario
  } = useForm(NUEVOPOST);

  function insertarPost(post){
    props.insertarPost(post)
    reset(NUEVOPOST)
  }

  return(
    <form onSubmit={insertarPost}>
        <label htmlFor={POST.CONTENIDO}>Contenido</label>
        <input id={POST.CONTENIDO} type="text"
        {...register(POST.CONTENIDO)} /><br></br>

        <label htmlFor={POST.CUERPO}>Cuerpo</label>
        <input id={POST.CUERPO} type="textarea"
        {...register(POST.CUERPO)}></input>

        <button>enviar</button>
    </form>
  )
};

export default PostForm;
