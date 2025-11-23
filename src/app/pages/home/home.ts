import { Component, OnInit } from '@angular/core';
import { ProductosComponent } from '../productos/productos';
import { Products } from '../../Modal/interface';
import { PRODUCTOS_DATA } from '../productos/productos';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Favorito } from '../../services/favorito';
import { Carro } from '../../services/carro';
import { Carrito } from '../carrito/carrito';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
ofertas: Products[] = [];
  destacados: Products[] = [];

  ngOnInit(): void {
    this.ofertas = PRODUCTOS_DATA.filter(p => p.oferta);
    this.destacados = PRODUCTOS_DATA.filter(p => p.destacado);
  }

  getSlides(productos: Products[]): Products[][] {
    const chunkSize = 3;
    const slides: Products[][] = [];
    for (let i = 0; i < productos.length; i += chunkSize) {
      slides.push(productos.slice(i, i + chunkSize));
    }
    return slides;
  }
  constructor(private carritoService:Carro, private favoritosService:Favorito){

  }
  
  
  agregar(producto:Products){
    this.carritoService.agregarCarrito(producto)
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

  agregarAfav(producto:Products){
    this.favoritosService.agregarFavorito(producto)
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
  
}
