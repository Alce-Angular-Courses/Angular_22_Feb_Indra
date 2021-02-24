import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ind-home',
  template: `
    <div class="row">
      <ind-saludo class="col-6"></ind-saludo>
      <ind-saludo-ref class="col-6"></ind-saludo-ref>
      <ind-saludo-rx class="col-6"></ind-saludo-rx>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() {
    //
   }

  ngOnInit(): void {
    //
  }

}
