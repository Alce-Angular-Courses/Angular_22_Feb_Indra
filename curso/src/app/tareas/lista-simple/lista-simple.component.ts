import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'ind-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.scss']
})
export class ListaSimpleComponent implements OnInit {
  tarea: Tarea;
  aTareas: Array<Tarea>;

  constructor(private storage: StorageService) { 
    this.storage.store$.subscribe(
      data => {
        this.aTareas = data;
      }
    );
  }

  ngOnInit(): void {
    this.tarea = new Tarea();
    this.aTareas = this.storage.getTareas();
  }

  onClickAdd(): void {
    if(!this.tarea.titulo) {
      return;
    }
    this.aTareas.push(this.tarea);
    this.tarea = new Tarea();
    this.storage.setTareas(this.aTareas);
    console.log(this.aTareas);
  }

}
