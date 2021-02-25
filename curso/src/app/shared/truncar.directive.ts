import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[indTruncar]'
})
export class TruncarDirective implements OnInit {
  inicial: string;
  @Input() indTruncar: number;
  constructor(private elem: ElementRef) {
    //
   }

   ngOnInit(): void {
     this.inicial = this.elem.nativeElement.innerHTML;
     if(this.inicial.length > this.indTruncar ) {
      this.elem.nativeElement.innerHTML = this.inicial.slice(0,  this.indTruncar-3) + '...';
    }
   }

   @HostListener('click') mostrar():void {
    this.elem.nativeElement.innerHTML = this.inicial;
   }



}
