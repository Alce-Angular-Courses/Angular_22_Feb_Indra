import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';

/**
 * Operaciones sobre un API REST
 * 
 * Create - POST -> no equipotente
 * Read - GET -> equipotente
 * Update - PUT/PATCH -> no equipotente
 * Delete - DELETE
 * 
 */


@Injectable({
  providedIn: 'root'
})
export class ApilibrosService {
  urlBase: string;

  constructor(private http: HttpClient) {
    this.urlBase = environment.urlApiLibros;
   }

  getAll(): Observable<Array<Libro>> {
    return this.http.get(this.urlBase) as Observable<Array<Libro>>;
  }


  get(id: number): Observable<Libro> {
    return this.http.get(this.urlBase + id) as Observable<Libro>;
  }


  set(item: Libro): Observable<Libro> {
    return this.http.post(this.urlBase, item) as Observable<Libro>;
  }

  update(id: number, item: Libro): Observable<Libro>  {
    return this.http.put(this.urlBase + id, item) as Observable<Libro>;
  }

  delete(id: number): Observable<Libro> {
    return this.http.delete(this.urlBase + id) as Observable<Libro>;
  }

}
