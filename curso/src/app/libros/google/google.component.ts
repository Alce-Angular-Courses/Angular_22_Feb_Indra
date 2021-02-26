import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'ind-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {
  clave: string;
  libros: Array<Libro>;
  urlBase: string;
  datos$: Observable<Libro>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.urlBase = environment.urlLibros;
    this.libros = [];
  }

  onBuscar(): void {
    if(!this.clave) {
      return;
    }

    this.datos$ = this.http.get(this.urlBase+this.clave)
    .pipe(
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
    this.clave = '';
    
    this.datos$.subscribe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (data: any) => {
        console.log(data);
        this.libros = data;  
      }

    );
  }

}
