
import NavBar from './components/NavBar/NavBar'
import ProductListContainer from './components/ItemListContainer/ItemListContainer'

//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
      <NavBar /> 
      <ProductListContainer saludo='Saludo desde la App! Bienvenido!!' />
    </>
  )
}

export default App

