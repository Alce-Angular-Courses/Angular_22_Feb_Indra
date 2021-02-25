
export const TURNOS: Array<Turno> = [
    {id: 'M', nombre: 'Mañana', info: '9:00-14:00'},
    {id: 'T', nombre: 'Tarde', info: '16:00-20:00'},
    {id: 'C', nombre: 'Completo', info: '9:00-18:00'}
];

export const CURSOS: Array<Curso> = [
    {id: '01', nombre: 'Angular', info: 'Aprendiendo Angular ...'},
    new Curso('02', 'React', 'Aprendiendo React ...'),
    new Curso('03', 'Vue', 'Aprendiendo Vue ...')
];

export class Alumno {
    constructor(
        public nombre: string = '',
        public apellidos: string = '',
        public dni: string = '',
        public email: string = '',
        public nacim: string = '',
        public coment: string = '',
        public isOk: boolean = false,
        public turno: Turno | null = null,
        public curso: Curso | null = null,
    ) {}
}

export interface Turno {
    id: string;
    nombre: string;
    info: string;
}

export interface ICurso {
    id: string;
    nombre: string;
    info: string;
}

export class Curso implements ICurso {
    constructor(
        public id: string = '',
        public nombre: string = '',
        public info: string= ''
    ) {}
}


