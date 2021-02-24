import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'ind-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.scss']
})
export class NuevaComponent implements OnInit {
  tarea: Tarea;
  @Output() add: EventEmitter<Tarea>;
  constructor() {
    this.add = new EventEmitter();
   }

  ngOnInit(): void {
    this.tarea = new Tarea();
  }

  onClickSendAdd(): void {
    if(!this.tarea.titulo) {
      return;
    }
    this.add.next(this.tarea);
    this.tarea = new Tarea();
  }
 
}
