import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EntidadService } from '../../../services/entidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entidad-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './entidad-form.component.html',
  styleUrls: ['./entidad-form.component.scss']
})
export class EntidadFormComponent {
  form: FormGroup;
  enviado = false;

  constructor(
    private fb: FormBuilder,
    private entidadService: EntidadService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['']
    });
  }

  onSubmit() {
    this.enviado = true;
    if (this.form.valid) {
      this.entidadService.create(this.form.value).subscribe({
        next: () => {
          alert('Entidad creada con éxito');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error al crear entidad:', err);
        }
      });
    }
  }
}

