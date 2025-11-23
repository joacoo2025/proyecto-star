import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductosComponent } from './pages/productos/productos';
import { Contacto } from './pages/contacto/contacto';
import { Info } from './pages/info/info';
import { Carrito } from './pages/carrito/carrito';
import { Favoritos } from './pages/favoritos/favoritos';
import { InicioSesion } from './pages/inicio-sesion/inicio-sesion';
import { Registrarse } from './pages/registrarse/registrarse';
import { Compra } from './pages/compra/compra';
import { Transferencia } from './pages/transferencia/transferencia';
import { Tienda } from './pages/tienda/tienda';
import { CRUD } from './pages/crud/crud';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'productos', component: ProductosComponent },
  { path: 'contacto', component: Contacto },
  { path: 'info', component: Info },
  { path: 'carrito', component: Carrito },
  { path: 'fav', component: Favoritos },

  { path: 'login', component: InicioSesion },
  { path: 'registro', component: Registrarse },
{ path: 'crud', component: CRUD },
  { path: 'compra', component: Compra },
  { path: 'transferencia', component: Transferencia },
{ path: 'tienda', component: Tienda },
  
  { path: '**', redirectTo: 'home' }
];
