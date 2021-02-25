import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarDirective } from './comentar.directive';
import { TruncarPipe } from './truncar.pipe';
import { TruncarDirective } from './truncar.directive';



@NgModule({
  declarations: [
    ComentarDirective,
    TruncarPipe,
    TruncarDirective
  ],
  imports: [
    CommonModule
  ], 
  exports : [
    ComentarDirective,
    TruncarPipe,
    TruncarDirective
  ]
})
export class SharedModule { }
