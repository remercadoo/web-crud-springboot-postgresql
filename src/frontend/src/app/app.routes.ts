import { Routes } from '@angular/router';
import { EntidadListComponent } from './components/entidad/entidad-list/entidad-list.component';
import { EntidadFormComponent } from './components/entidad/entidad-form/entidad-form.component';

export const routes: Routes = [
  { path: '', component: EntidadListComponent },
  { path: 'crear', component: EntidadFormComponent },
];

