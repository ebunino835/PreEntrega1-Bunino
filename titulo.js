export const header = (div) => {
    const titulo = document.createElement('h1')
    titulo.innerText = 'Bienvenido a la comision 47255'

    const subTitulo = document.createElement('h3')
    subTitulo.innerText = 'Que comience el juego'

    div.appendChild(titulo)
    div.appendChild(subTitulo)
}