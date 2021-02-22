let x: number
x = 23
console.log(x)
// x = 'Pepe' -> error de tipos

let user : {
    id: number | string;
    name: string,
    edad: number,
    isAlumno: boolean,
    aficiones: [],
    puestos: Array<string>,
    algo: any
}

/** Inferencia de tipos */
let y = 23
// y = 'Pepe'

let z
z = 23
z = 'Pepe'

class Persona {
    constructor(
        public nombre: string = '', 
        public edad: number) {}   

}

// Tipado estructural o 'duckig typing'
let p1: Persona
let p2: Persona
p1 = new Persona('Ernesto', 23)
p2 = { nombre: 'Rosa', edad: 23}

console.log(p1, p2)