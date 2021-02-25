import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar',
})
export class TruncarPipe implements PipeTransform {

  transform(value: string, longitud: number): string {
    if(value.length > longitud ) {
      value = value.slice(0, longitud-3) + '...';   
    }
    return value;
  }

}
