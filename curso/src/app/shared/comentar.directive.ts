import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[indComentar]'
})
export class ComentarDirective implements OnInit {
  
  @Input() indComentar: string;
  elem: ElementRef;

  
  constructor(elem: ElementRef) { 
    this.elem = elem;  
  }

  ngOnInit(): void {
    console.log('Directiva comentar', this.elem, this.indComentar);
    this.indComentar = this.indComentar ? this.indComentar : 'Comentario';
    this.elem.nativeElement.title = this.indComentar;
  }

  @HostListener('click') onClick(): void {
    this.elem.nativeElement.title = 'Tema comprobado';
  }

}
