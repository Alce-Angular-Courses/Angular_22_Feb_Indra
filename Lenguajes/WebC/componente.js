
const template = `
    <style>
        h1 {color:brown;}
    </style>
    <h1>Hola Mundo</h1>
    <p>Lorem ipsum dolor sit... </p>
    <button id="saludar">Saludar</button>
`

class AppSample extends HTMLElement {
    constructor () {
        super()
        console.log("Creado el componente")
          
            const templateElem = document.createElement('template')
            templateElem.innerHTML = template
            const templateContent = templateElem.content

            this.shadow = this.attachShadow({mode: 'open'})
            this.shadow.appendChild(templateContent.cloneNode(true))

            this.boton = this.shadow.querySelector("#saludar")
            this.boton.addEventListener("click", 
                this.saludar.bind(this))   
        }

    saludar() {
        this.parrafo = this.shadow.querySelector("p")
        this.parrafo.innerHTML = 'Saludos desde el componente'
      }
    
}

customElements.define('app-sample', AppSample)
    