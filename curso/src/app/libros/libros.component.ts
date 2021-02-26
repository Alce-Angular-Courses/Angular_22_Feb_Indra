import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ind-libros',
  template: `
    <div class="row">
      <ind-mock class="col-6"></ind-mock>
      <ind-google class="col-6"></ind-google>
      <ind-byservicio class="col-6"></ind-byservicio>
    </div>
    <div class="row">
      <ind-from-api class="col-12"></ind-from-api>
    </div>
  `,
  styles: [
  ]
})
export class LibrosComponent implements OnInit {

  constructor() {
    //
   }

  ngOnInit(): void {
    //
  }

}
