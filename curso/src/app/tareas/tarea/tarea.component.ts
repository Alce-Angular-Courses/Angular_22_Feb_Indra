import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'ind-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
  @Input() tarea: Tarea;
  @Input() indice: number;
  @Output() update: EventEmitter<number>;
  @Output() delete: EventEmitter<number>;
  constructor() {
    this.update = new EventEmitter();
    this.delete = new EventEmitter();
   }

  ngOnInit(): void {
    this.tarea = {...this.tarea};
  }

  onChangeSend() : void {
    this.update.next(this.indice);
  }
  onDeleteSend(): void {
    this.delete.next(this.indice);
  }

}
