import { Component, OnInit } from '@angular/core';
import { Curso, Turno } from 'src/app/models/alumno';
import { maestros } from 'src/app/models/cursos.data';

@Component({
  selector: 'ind-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.scss']
})
export class FormMdComponent implements OnInit {
  maestros: {turnos: Array<Turno>, cursos: Array<Curso>};
  constructor() {
    //
   }

  ngOnInit(): void {
    this.maestros = maestros;
  }

}
