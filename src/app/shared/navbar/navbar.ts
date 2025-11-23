import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  constructor(public auth: Auth) {}

  ngOnInit(): void {
    // Mantengo la suscripción por si tu servicio la necesita.
    this.auth.loginEvent.subscribe(() => {
      // Ya no se asignan variables porque el HTML usa auth.xxx directamente
    });
  }

  logout() {
    this.auth.logout();
    // No se actualizan variables porque ya no existen.
  }

}

