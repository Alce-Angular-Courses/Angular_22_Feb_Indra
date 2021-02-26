import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'ind-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  aTareas: Array<Tarea>;
  // store: string;
  constructor(private storage: StorageService) {
    this.storage.store$.subscribe(
      data => {
        this.aTareas = data;
      }
    );
   }

  ngOnInit(): void {
    // this.store = 'tareas';
    this.aTareas = this.storage.getTareas();

   /*  this.aTareas = localStorage.getItem(this.store) 
      ? JSON.parse(localStorage.getItem(this.store) ) : []; */
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
    this.storage.setTareas(this.aTareas);
    // localStorage.setItem(this.store, JSON.stringify(this.aTareas));
  }
}
