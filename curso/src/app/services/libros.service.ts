import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { LIBROS } from '../models/libros.data';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() {
    //
   }

   getMock(clave: string): Array<Libro> {
     if (!clave) {
       return null;
     }
     return LIBROS;
   }
}
