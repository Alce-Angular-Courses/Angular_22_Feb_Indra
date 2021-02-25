import { Curso, Turno } from "./alumno";

const TURNOS: Array<Turno> = [
    {id: 'M', nombre: 'Mañana', info: '9:00-14:00'},
    {id: 'T', nombre: 'Tarde', info: '16:00-20:00'},
    {id: 'C', nombre: 'Completo', info: '9:00-18:00'}
];

const CURSOS: Array<Curso> = [
    {id: '01', nombre: 'Angular', info: 'Aprendiendo Angular ...'},
    new Curso('02', 'React', 'Aprendiendo React ...'),
    new Curso('03', 'Vue', 'Aprendiendo Vue ...')
];

export const maestros = {
    turnos: TURNOS,
    cursos: CURSOS
};