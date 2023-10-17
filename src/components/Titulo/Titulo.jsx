
const Titulo = (props)=>{ // Componente Funcional
    console.log(props)
    return (
      <>
        <h1>{props.titulo}</h1>
        <h2>{props.subTitulo}</h2>
      </>
    )
  }

  export default Titulo