import { Entidad } from '../../../models/entidad.model';
import { EntidadService } from '../../../services/entidad.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntidadFormComponent } from '../entidad-form/entidad-form.component';

@Component({
  selector: 'app-entidad-list',
  standalone: true,
  imports: [CommonModule, EntidadFormComponent], 
  templateUrl: './entidad-list.component.html',
  styleUrls: ['./entidad-list.component.scss']
})
export class EntidadListComponent implements OnInit {

  entidades: Entidad[] = [];
  loading = false;

  // 👇 Esta es la propiedad para mostrar/ocultar el formulario
  mostrarFormulario = false;

  constructor(private entidadService: EntidadService) { }

  ngOnInit(): void {
    this.cargarEntidades();
  }

  cargarEntidades(): void {
    this.loading = true;
    this.entidadService.getAll().subscribe({
      next: (data) => {
        this.entidades = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener entidades:', err);
        this.loading = false;
      }
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta entidad?')) {
      this.entidadService.delete(id).subscribe(() => {
        this.entidades = this.entidades.filter(e => e.id !== id);
      });
    }
  }

  // 👇 Este método se llamará cuando el formulario emita el evento `entidadCreada`
  onEntidadCreada(): void {
    this.cargarEntidades();
    this.mostrarFormulario = false; // opcional: ocultar el formulario después de crear
  }
}

