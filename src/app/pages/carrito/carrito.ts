import { Component, OnInit } from '@angular/core';
import { Products } from '../../Modal/interface';
import { Carro } from '../../services/carro';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, FormsModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {

  productosEncarrito: { producto: Products; cantidad: number; id_detalle: number }[] = [];

  envio: number = 1500;
  total: number = 0;

  constructor(
    public carritoService: Carro,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carritoService.carrito$.subscribe((productos) => {
      this.productosEncarrito = productos || [];
      this.total = this.calcularTotal();
    });
  }

  // ======================
  //   AGREGAR CANTIDAD
  // ======================
  agregarCantidad(index: number) {
    const item = this.productosEncarrito[index];
    item.cantidad++;
    this.total = this.calcularTotal();

    this.carritoService.actualizarCantidad(
      item.id_detalle,
      item.cantidad
    );
  }

  // ======================
  //   QUITAR CANTIDAD
  // ======================
  quitarCantidad(index: number) {
    const item = this.productosEncarrito[index];

    if (item.cantidad > 1) {
      item.cantidad--;
      this.total = this.calcularTotal();

      this.carritoService.actualizarCantidad(
        item.id_detalle,
        item.cantidad
      );
    }
  }

  // ======================
  //   ELIMINAR PRODUCTO
  // ======================
  eliminarProducto(id_detalle: number) {
    this.carritoService.eliminarCarrito(id_detalle);

    this.productosEncarrito = this.productosEncarrito.filter(
      (item) => item.id_detalle !== id_detalle
    );

    this.total = this.calcularTotal();
  }

  // ======================
  //   VACIAR CARRITO
  // ======================
  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.productosEncarrito = [];
    this.total = 0;
  }

  // ======================
  //   IR A COMPRA
  // ======================
  irAformularioCompra() {
    this.router.navigate(['/compra']);
  }

  // ======================
  //   CALCULAR TOTAL
  // ======================
  calcularTotal(): number {
    return this.productosEncarrito.reduce((acc, item) => {
      return acc + item.producto.precio * item.cantidad;
    }, 0);
  }
}
