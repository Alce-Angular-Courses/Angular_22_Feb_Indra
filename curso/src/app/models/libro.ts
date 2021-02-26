export class Libro {
    constructor(
        public id: number | string = '',
        public titulo: string = '',
        public autor: string | Array<string> = '',
        public fecha: string = ''
    ) {}
}
