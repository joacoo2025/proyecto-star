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

  // Ítems del carrito (frontend + backend si existiera)
  productosEncarrito: { producto: Products; cantidad: number }[] = [];

  // Costo de envío como en el secundario
  envio: number = 1500;

  // Total acumulado (lo recalculamos al cargar datos o modificar cantidades)
  total: number = 0;

  constructor(
    public carritoService: Carro,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Igual que cargarCarrito del secundario
    this.carritoService.carrito$.subscribe((productos) => {
      this.productosEncarrito = productos || [];
      this.total = this.calcularTotal();
    });
  }

  // ------- FUNCIONES ADAPTADAS DEL SEGUNDARIO -------- //

  // Equivalente a "cambiarCantidad" sin cambiar tu función agregar / quitar
  agregarCantidad(index: number) {
    this.productosEncarrito[index].cantidad++;
    this.total = this.calcularTotal();

    // Avisamos al servicio (simulando actualización backend)
    this.carritoService.actualizarCantidad(
      this.productosEncarrito[index].producto.id!,
      this.productosEncarrito[index].cantidad
    );
  }

  quitarCantidad(index: number) {
    if (this.productosEncarrito[index].cantidad > 1) {
      this.productosEncarrito[index].cantidad--;
      this.total = this.calcularTotal();

      this.carritoService.actualizarCantidad(
        this.productosEncarrito[index].producto.id!,
        this.productosEncarrito[index].cantidad
      );
    }
  }

  // Equivalente a eliminar(idDetalleCarrito)
  eliminarProducto(productoId: number) {
    this.carritoService.eliminarCarrito(productoId);

    // Quitamos del array
    this.productosEncarrito = this.productosEncarrito.filter(
      (item) => item.producto.id !== productoId
    );

    this.total = this.calcularTotal();
  }

  // Vacía el carrito igual que el secundario
  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.productosEncarrito = [];
    this.total = 0;
  }

  // Ir al formulario de compra (equiv. irACompra)
  irAformularioCompra() {
    this.router.navigate(['/compra']);
  }

  // Calcula total igual que el secundario
  calcularTotal(): number {
    return this.productosEncarrito.reduce((acc, item) => {
      return acc + item.producto.precio * item.cantidad;
    }, 0);
  }
}
