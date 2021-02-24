import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ind-tareas',
  template: `
    <div class="row">
      <ind-lista-simple class="col-6"></ind-lista-simple>
      <ind-lista class="col-6"></ind-lista>
      <div>
  `,
  styles: [
  ]
})
export class TareasComponent implements OnInit {

  constructor() { 
    //
  }

  ngOnInit(): void {
    //
  }

}
