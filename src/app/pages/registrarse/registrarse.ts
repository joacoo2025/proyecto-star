import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './registrarse.html',
  styleUrl: './registrarse.css',
})
export class Registrarse {
 // Objeto que contiene los datos del nuevo usuario.
  // Se enlaza al formulario mediante ngModel en la plantilla.
  nuevoUsuario = {
    nombre: '',
    email: '',
    apellido:'',
    password: '',
    direccion: '',
    telefono: '',
    provincia: '',
    codigoPostal: '',
    ciudad: '',
    usuario: '',
  };

  // Texto para mostrar mensajes de error en pantalla.
  error: string = '';

  // Se inyecta el servicio de autenticación para poder registrar usuarios
  // y el Router para redirigir al terminar el registro.
  constructor(private authService: Auth, private router: Router) {}

  // Método disparado al enviar el formulario.
  registrar(): void {

    // Validación inicial: ningún campo puede estar vacío.
    if (!this.nuevoUsuario.nombre || !this.nuevoUsuario.email || !this.nuevoUsuario.password) {
      this.error = 'Todos los campos son obligatorios.';
      return;
    }

    // Llamada al backend a través del servicio de autenticación.
    this.authService.register(this.nuevoUsuario).subscribe({

      // Si el registro es exitoso:
      next: () => {
        // Alerta rápida; puede reemplazarse por un toast más elegante.
        alert('Registro exitoso. Ahora puede iniciar sesión.');

        // Redirige al usuario a la pantalla de login.
        this.router.navigate(['/inicio-sesion']);
      },

      // Si ocurre un error en el backend o en la red:
      error: (err) => {
        console.error('Error en el registro', err);

        // Mensaje para mostrar en la interfaz.
        this.error = 'Error al registrar el usuario.';
      }
    });
  }
}
