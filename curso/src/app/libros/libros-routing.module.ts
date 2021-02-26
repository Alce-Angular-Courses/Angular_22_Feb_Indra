import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LibrosComponent } from './libros.component';

const routes: Routes = [
  { path: '', component: LibrosComponent },
  { path: ':id', component: DetalleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
