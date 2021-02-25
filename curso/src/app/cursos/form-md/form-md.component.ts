import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno, Curso, Turno } from 'src/app/models/alumno';
import { maestros } from 'src/app/models/cursos.data';

@Component({
  selector: 'ind-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.scss']
})
export class FormMdComponent implements OnInit {
  maestros: {turnos: Array<Turno>, cursos: Array<Curso>};
  form: FormGroup;
  formFB: FormGroup;
  constructor(private fb: FormBuilder) {
    //
   }

  ngOnInit(): void {
    this.maestros = maestros;
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.compose(
        [Validators.required, Validators.minLength(2)]
      ) )
    });
    this.formFB = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: [''],
      dni: [''],
      email: [''],
      nacim: ['', [Validators.required, this.mayorEdad]],
      coment: '',
      isOk: [false],
      turno: [null],
      curso:[null]
    });
  }

  enviar(): void {
   const alumno: Alumno = this.formFB.value;
   console.log('Enviando', alumno);    
  }

  mayorEdad(fcontrol: FormControl): {menoredad : boolean} {
    const cumpleanos = new Date(fcontrol.value);
    const  hoy = new Date();
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    if (edad < 18) { // devuelve el error
      return {menoredad : true};
    } else { // si valida, devuelve null
      return null;
    }
  }

}
