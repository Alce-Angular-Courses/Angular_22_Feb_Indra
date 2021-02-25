import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarDirective } from './comentar.directive';
import { TruncarPipe } from './truncar.pipe';



@NgModule({
  declarations: [
    ComentarDirective,
    TruncarPipe
  ],
  imports: [
    CommonModule
  ], 
  exports : [
    ComentarDirective,
    TruncarPipe
  ]
})
export class SharedModule { }
