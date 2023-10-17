import Formulario from "../Formulario/Formulario"
import Titulo from "../Titulo/Titulo"

const Home = (props) => {
    const tituloApp = 'Este es un titulo de App'
    const subTituloApp = 'Este es un subtitulo de App'
    return (
    <div>
        <Titulo titulo={tituloApp} subTituloApp={subTituloApp}/>
        <Formulario />
        <p>{props.saludo}</p>
    </div>
  )
}

export default Home
