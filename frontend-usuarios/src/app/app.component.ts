import { Component } from '@angular/core';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgregarUsuarioComponent, ListarUsuariosComponent],
  templateUrl: './app.html' // <-- OJO: Si tu archivo se llama app.component.html, ponle ese nombre aquí
})
export class AppComponent {}
