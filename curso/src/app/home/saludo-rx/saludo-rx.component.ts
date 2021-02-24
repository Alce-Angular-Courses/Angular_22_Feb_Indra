import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ind-saludo-rx',
  templateUrl: './saludo-rx.component.html',
  styleUrls: ['./saludo-rx.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SaludoRxComponent implements OnInit {
  mensaje: string;
  fcNombre: FormControl;
  constructor() {
    //
  }

  ngOnInit(): void {
    this.mensaje = 'Dime tu nombre';
    this.fcNombre = new FormControl('Pepe');
    console.log(this.fcNombre);
  }

  onClickBorrar(): void {
    this.fcNombre.reset('');
  }

}
