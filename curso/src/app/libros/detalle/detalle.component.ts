import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { textSpanIntersectsWithPosition } from 'typescript';

@Component({
  selector: 'ind-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  libroID: string;
  constructor(private activateRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      params => {
        console.log(params);
        this.libroID = params.id;
      }
    );
  }

}
