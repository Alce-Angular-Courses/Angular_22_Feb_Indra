export class Tarea {
    //titulo: string;
    constructor(
        public titulo: string = '',
        public responsable: string = 'Alejandro',
        public isCompleted: boolean = false 
    ) {
        // this.titulo = titulo;
    }
}

/* interface iTarea {
     titulo: string,
     responsable: string,
     isCompleted: boolean 
} */