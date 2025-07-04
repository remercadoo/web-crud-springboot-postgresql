import { Component } from '@angular/core';
import { EntidadListComponent } from './components/entidad/entidad-list/entidad-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EntidadListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
}

