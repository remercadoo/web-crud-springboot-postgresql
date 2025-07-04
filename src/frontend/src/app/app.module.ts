import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Si usas forms
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EntidadListComponent } from './components/entidad/entidad-list/entidad-list.component';
import { EntidadFormComponent } from './components/entidad/entidad-form/entidad-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EntidadListComponent,
    EntidadFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

