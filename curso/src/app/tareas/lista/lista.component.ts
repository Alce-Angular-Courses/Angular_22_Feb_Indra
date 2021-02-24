import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'ind-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  aTareas: Array<Tarea>;
  store: string;
  constructor() {
    //
   }

  ngOnInit(): void {
    this.store = 'tareas';
    this.aTareas = localStorage.getItem(this.store) 
      ? JSON.parse(localStorage.getItem(this.store) ) : [];
  }

  addTarea(tarea: Tarea): void {
    this.aTareas.push(tarea);
    this.save();
  }

  updateTarea(indice: number): void {
    this.aTareas[indice].isCompleted = !this.aTareas[indice].isCompleted;
    this.save();
  }
  
  deleteTarea(indice: number): void {
    this.aTareas.splice(indice,1);
    this.save();
  }
 
  private save() {
    localStorage.setItem(this.store, JSON.stringify(this.aTareas));
  }
}
