import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ind-cursos',
  template: `
    <div class="row">
      <ind-form-td class="col-6"></ind-form-td>
      <ind-form-md class="col-6"></ind-form-md>
    </div>
  `,
  styles: [
  ]
})
export class CursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
