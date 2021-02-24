import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [AboutComponent, NosotrosComponent, MenuComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
