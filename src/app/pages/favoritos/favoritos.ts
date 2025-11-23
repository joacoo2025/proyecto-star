import { Component, OnInit } from '@angular/core';
import { Favorito } from '../../services/favorito';
import { Products } from '../../Modal/interface';
import { Carro } from '../../services/carro';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-favoritos',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {
  
  
  productosFav:{producto:Products;cantidad:number}[]=[]

  constructor(public favoritoService:Favorito, private carritoService:Carro){}

  ngOnInit(): void {
    this.favoritoService.favorito$.subscribe((productos)=>{
      this.productosFav=productos
    })
  }
  agregarCantidad(index:number){
    this.productosFav[index].cantidad++
  }
  quitarCantidad(index:number){
    if(this.productosFav[index].cantidad>1){
      this.productosFav[index].cantidad--
    }
  }
  eliminarProducto(productoId:number){
    this.favoritoService.eliminarFavoritos(productoId)
  }
  vaciarCarrito(){
    this.favoritoService.vaciarCarrito()
  }
  realizarCompra(){
    alert('Compra Realizada')
    this.vaciarCarrito()
  }  
  agregarCarro(producto:Products){
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
    this.favoritoService.eliminarFavoritos(producto.id);
    this.productosFav = this.productosFav.filter(p => p.producto.id !== producto.id);

  }
  
}
