function Libro(autor, titulo) {
    this.autor = autor
    this.titulo = titulo
}

Libro.prototype.mostrar = function () {
    console.log(this)
}

const lb1 = new Libro('Pepe', 'Introducción a Angular')
lb1.mostrar()

export class Persona {
    constructor(nombre = '', edad) {
        this.nombre = nombre
        this.edad = edad
    }
    saludar(alguien = 'amigo') {
        console.log(`Hola ${alguien}, soy ${this.nombre} y tengo ${this.edad} años `)
    }
}

const p1 = new Persona('Pepe', 34)
const p2 = new Persona('Elena', 36)
p1.saludar(p2.nombre)
p1.altura = 180
console.log(p1)
console.log(p2)

export class Alumno extends Persona {
    constructor(nombre = '', edad = null, curso = 'Angular') {
        super(nombre, edad)
        this.curso = curso
    }
    saludar(alguien) {
        super.saludar(alguien)
        console.log(`Estudio ${this.curso}`)
    }
}

const a1 = new Alumno('Juan', 35)
a1.notas = [7, 8, 5]
a1.saludar(p1.nombre)
console.log(a1)