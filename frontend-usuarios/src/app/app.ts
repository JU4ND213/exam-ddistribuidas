import { Component } from '@angular/core';
// Importamos tus componentes para que Angular los reconozca
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // ¡AQUÍ ESTÁ LA CLAVE! Agregamos los componentes al arreglo de imports
  imports: [AgregarUsuarioComponent, ListarUsuariosComponent],
  templateUrl: './app.html'
})
export class App {}
