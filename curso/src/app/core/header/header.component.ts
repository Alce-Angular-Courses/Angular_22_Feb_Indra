import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ind-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  logo: string;
  constructor() {
    this.title = 'Curso de Angular';
    this.logo = '../../../assets/logo.svg';
   }

  ngOnInit(): void {
    // 
  }

}
