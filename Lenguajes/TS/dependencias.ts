class Mascota {
    constructor(public name : string) {
        
    }
}

class Persona {
    constructor(public name : string, public mascota: Mascota = null) {
        
    }
}


const p1 = new Persona('Pepe', new Mascota('Piolin'));