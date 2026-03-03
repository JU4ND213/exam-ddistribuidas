import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-usuarios.component.html'
})
export class ListarUsuariosComponent implements OnInit {
  usuarios: any[] = [];
  private apiUrl = 'http://localhost:8080/api/usuarios'; // Asegúrate que sea la ruta de tu Spring Boot

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data: any) => this.usuarios = data,
      error: (err: any) => console.error('Error al cargar usuarios', err)
    });
  }
}
