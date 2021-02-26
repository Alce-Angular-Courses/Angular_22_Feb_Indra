import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'ind-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss']
})
export class MockComponent implements OnInit {
  libros: Array<Libro>;
  clave: string;
  constructor(private lbs: LibrosService) { }

  ngOnInit(): void {
    this.libros = [];
    this.clave = 'algo';

  }

  onBuscar(): void {
    this.libros = this.lbs.getMock(this.clave);
    console.log(this.libros);
  }

}
