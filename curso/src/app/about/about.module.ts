import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MenuComponent } from './menu/menu.component';
import { PostComponent } from './post/post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AboutComponent, NosotrosComponent, MenuComponent, PostComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
