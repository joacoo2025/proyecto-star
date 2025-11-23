import { Component, OnInit } from '@angular/core';
import { Product } from '../../services/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Carro } from '../../services/carro';
import { Products } from '../../Modal/interface';
import Swal from 'sweetalert2';
import { Favorito } from '../../services/favorito';
@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css',
})
export class Tienda implements OnInit {

  productos: any[] = [];

  constructor(private productosService: Product, private carritoService: Carro, private favoritosService: Favorito) {}

  agregar(producto: Products) {
      this.carritoService.agregarCarrito(producto);
      Swal.fire({
      title: '¡Producto agregado! 🐾',
      html: `El artículo <b>${producto.nombre}</b> fue añadido a tu carrito.`,
      icon: 'success',
      customClass: {
        popup: 'petshop-popup'
      },
      confirmButtonText: '¡Genial!',
      showConfirmButton: true,
      backdrop: `
        rgba(92, 64, 51, 0.4)
        url("https://i.imgur.com/J1pWJtO.png") 
        left top
        no-repeat
      `
    });
    }
    agregarAfav(producto: Products) {
        this.favoritosService.agregarFavorito(producto);
        Swal.fire({
        title: '¡Producto agregado! 🐾',
        html: `El artículo <b>${producto.nombre}</b> fue añadido a favoritos.`,
        icon: 'success',
        customClass: {
          popup: 'petshop-popup'
        },
        confirmButtonText: '¡Genial!',
        showConfirmButton: true,
        backdrop: `
          rgba(92, 64, 51, 0.4)
          url("https://i.imgur.com/J1pWJtO.png") 
          left top
          no-repeat
        `
      });
      }

  ngOnInit() {
    this.productosService.obtenerProductos().subscribe(res => {
      this.productos = res;
    });
  }
  
}