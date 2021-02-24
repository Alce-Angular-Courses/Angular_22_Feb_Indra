import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ind-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SaludoRefComponent implements OnInit {
  @ViewChild('nombreRef', {static: true}) nombre: ElementRef;
  constructor() { 
    console.log('En el constructor', this.nombre);
  }

  ngOnInit(): void {
    console.log('En el onInit',this.nombre);
    console.dir(this.nombre.nativeElement);
  }

}
