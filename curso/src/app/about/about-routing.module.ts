import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { AboutComponent } from './about.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


const routes: Routes = [
  {
    path: '', 
    component: AboutComponent,
    children: [
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'angular', component: InfoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
