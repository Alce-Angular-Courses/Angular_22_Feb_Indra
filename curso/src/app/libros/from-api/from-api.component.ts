import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Libro } from 'src/app/models/libro';
import { ApilibrosService } from 'src/app/services/apilibros.service';

@Component({
  selector: 'ind-from-api',
  templateUrl: './from-api.component.html',
  styleUrls: ['./from-api.component.scss']
})
export class FromApiComponent implements OnInit {
  libros: Array<Libro>;
  add: boolean;
  edit: boolean;
  title: string;
  form: FormGroup;
  actualId: number; 
  constructor(
    public lb: ApilibrosService,
    private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.libros = [];
    this.add = false;
    this.edit = false;
    this.title = '';

    this.getAll();

    this.form = this.fb.group({
      'id': null,
      'titulo': '',
      'autor': [''],
      'fecha': ''
    });
  }

  starAddEdit(value, libro = null): void {
    if (value == 'edit') {
      this.edit = true;
      this.add = false;
      this.title = 'Editar libro';
      libro = new Libro(libro.id, libro.titulo, libro.autor, libro.fecha);
      console.log(libro);
      this.form.setValue(libro);
    } else if ( value == 'add') {
      this.add = true;
      this.edit = false;
      this.title = 'Añadir libro';
    }
  }
  
  private getAll() {
    this.lb.getAll().subscribe(
      data => {
        this.libros = data;
        console.log(data);
      }
    );
  }

  onEdit(): void {
    if(!this.form.value.titulo) {
      return;
    }
    const libro = new Libro(
      null, this.form.value.titulo, [this.form.value.autor], this.form.value.fecha);
    this.lb.update(this.form.value.id, libro).subscribe(
      data => {
        console.log('Actualizado', data);
        this.form.reset();
        this.edit = false;
        this.getAll();
      }
    );

  }

  onAdd(): void {
   
    if(!this.form.value.titulo) {
      return;
    }
    const libro = new Libro(
      null, this.form.value.titulo, 
      [this.form.value.autor], this.form.value.fecha);

    this.lb.set(libro).subscribe(
      data => {
        console.log('Añadido', data);
        this.form.reset();
        this.add = false;
        this.getAll();
      }
    );
  }

  onDelete(libro): void {
    this.lb.delete(libro.id).subscribe(
      () => { this.getAll();}
    );
  }

}
