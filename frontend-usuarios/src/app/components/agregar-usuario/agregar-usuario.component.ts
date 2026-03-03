import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './agregar-usuario.component.html'
})
export class AgregarUsuarioComponent {
  usuarioForm: FormGroup;
  private apiUrl = 'http://localhost:8080/api/usuarios'; // Asegúrate que sea la ruta de tu Spring Boot

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      this.http.post<any>(this.apiUrl, this.usuarioForm.value).subscribe({
        next: (res: any) => {
          alert('Usuario agregado con éxito');
          this.usuarioForm.reset();
        },
        error: (err: any) => console.error('Error al agregar', err)
      });
    } else {
      alert('Por favor, completa el formulario correctamente.');
    }
  }
}
