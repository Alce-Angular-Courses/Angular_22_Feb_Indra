import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeES from '@angular/common/locales/es';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
// import { StorageService } from './services/storage.service';

registerLocaleData(localeES);

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    CoreModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'},
    // StorageService -> forma auntigua de registrar el servicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
