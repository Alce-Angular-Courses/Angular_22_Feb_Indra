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
    this.libros = [];
    this.libros = this.lbs.getMock(this.clave);
    console.log(this.libros);
  }

  onBuscarAsync(): void {
    this.libros = [];
    this.lbs.getMockAsync(this.clave)
    .then(data => this.libros = data);
  }

  async onBuscarAsyncAwait(): Promise<void> {
    this.libros = [];
    this.libros = await this.lbs.getMockAsync(this.clave);
  }

  onBuscarRx(): void {
    this.libros = [];
    this.lbs.getMocRx(this.clave).subscribe(
      data => this.libros = data
    );
  }

}
