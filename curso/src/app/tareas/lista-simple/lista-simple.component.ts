import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { isJSDocThisTag } from 'typescript';

@Component({
  selector: 'ind-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.scss']
})
export class ListaSimpleComponent implements OnInit {
  tarea: Tarea;
  aTareas: Array<Tarea>;

  constructor() { 
    //
  }

  ngOnInit(): void {
    this.tarea = new Tarea();
    this.aTareas = [];
  }

  onClickAdd(): void {
    if(!this.tarea.titulo) {
      return;
    }
    this.aTareas.push(this.tarea);
    this.tarea = new Tarea();
    console.log(this.aTareas);
  }

}
