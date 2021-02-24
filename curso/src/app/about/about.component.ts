import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ind-about',
  template: `
    <div class="row">
      <ind-menu></ind-menu>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { 
    //
  }

  ngOnInit(): void {
    //
  }

}
