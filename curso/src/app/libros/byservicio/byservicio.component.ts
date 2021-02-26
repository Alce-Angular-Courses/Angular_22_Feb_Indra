import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'ind-byservicio',
  templateUrl: './byservicio.component.html',
  styleUrls: ['./byservicio.component.scss']
})
export class ByservicioComponent implements OnInit {
  clave: string;
  libros: Array<Libro>;
  error: string;

  constructor(private lbs: LibrosService) { }

  ngOnInit(): void {
    this.libros = [];
  }

  onBuscar(): void {
    if(!this.clave) {
      return;
    }
    this.lbs.getGoogle(this.clave).subscribe(
      data => this.libros = data, 
      (error) => { 
        this.error = error;
        console.log('En el componente', error); 
      },
    );
    this.clave = '';
  }
}
