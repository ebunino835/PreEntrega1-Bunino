import Titulo from "../Titulo/Titulo"

const Formulario = () =>{
    return (
      <form>
        <Titulo titulo='Titulo Formulario' subTitulo='SubTitulo de Formulario' />
        <input type="text" placeholder='Ingrese Nombre' />
      </form>
    )
  }

  export default Formulario