import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storeTareas: string;
  store$: Subject<Array<Tarea>>;
  constructor() {
    this.storeTareas = 'tareas';
    this.store$ = new Subject();
  }

  getTareas(): Array<Tarea> {
    return localStorage.getItem(this.storeTareas) 
      ?  JSON.parse(localStorage.getItem(this.storeTareas) ) : [];
  }

  setTareas(tareas: Array<Tarea>): void {
    localStorage.setItem(this.storeTareas, JSON.stringify(tareas));
    this.store$.next(tareas);
  }

  removeTareas(): void {
    localStorage.removeItem(this.storeTareas);
  }

}
