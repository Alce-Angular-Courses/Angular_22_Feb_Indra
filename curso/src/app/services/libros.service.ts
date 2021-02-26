import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';
import { LIBROS } from '../models/libros.data';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = environment.urlLibros;
   }

   getMock(clave: string): Array<Libro> {
     if (!clave) {
       return null;
     }
     return LIBROS;
   }

   getMockAsync(clave: string): Promise<Array<Libro>> {
    if (!clave) {
      return null;
    } 
     return new Promise( (resolve)=> {
       setTimeout(() => {
         resolve(LIBROS);
       }, 1000);
     });
   }

   getMocRx(clave: string): Observable<Array<Libro>> {
    if (!clave) {
      return null;
    } 
    return new Observable(
      observer =>  {
        setTimeout(() => {
          observer.next(LIBROS);
        }, 1000);
      }
    );
  }

  getGoogle(clave: string): Observable<Array<Libro>> {
    if (!clave) {
      return null;
    }
    return this.http.get(this.baseURL+clave).pipe(
      catchError(error => {
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          // backend error
          errorMessage = `Server-side error: ${error.status} ${error.message}`;
        }
        // aquí podrías agregar código que muestre el error en alguna parte fija de la pantalla.
        // this.errorService.show(errorMessage);
        console.log('En el servicio', errorMessage);
        return throwError(errorMessage);
      })
    ).pipe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map(  (data: any) => {
        return data.items.map(
          item => new Libro(
            item.id,
            item.volumeInfo.title,
            item.volumeInfo.authors,
            item.volumeInfo.publishedDate
          )
        );
      })
    );
  }
}
