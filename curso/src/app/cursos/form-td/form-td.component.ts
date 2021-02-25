import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alumno, Curso, Turno } from 'src/app/models/alumno';
import { maestros } from 'src/app/models/cursos.data';

@Component({
  selector: 'ind-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.scss']
})
export class FormTdComponent implements OnInit {
  maestros: {turnos: Array<Turno>, cursos: Array<Curso>};
  @ViewChild('formRef', {static: true}) form: ElementRef;
  @ViewChild('ngFormRef', {static: true}) ngform: NgForm;
  constructor() {
    //
   }

  ngOnInit(): void {
    this.maestros = maestros;
    console.log(this.form);
    console.log(this.ngform);
  }

  enviar(alumno: Alumno): void {
    // Si no pasamos datos por parámetro
    // const alumno = this.ngform.value
    console.log('Enviando', alumno);
  }
}
