import { Component, OnInit } from '@angular/core';
import { Product } from '../../services/product';
import { Products } from '../../Modal/interface';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './listar-productos.html',
  styleUrl: './listar-productos.css',
})
export class ListarProductos implements OnInit {

  productos: Products[] = [];

  constructor(private productService: Product) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productService.obtenerProductos().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error cargando productos', err)
    });
  }

  eliminar(id: number) {
    if (!confirm("¿Eliminar este producto?")) return;

    this.productService.eliminarProducto(id).subscribe({
      next: () => this.cargarProductos(),
      error: (err) => console.error('Error al eliminar', err)
    });
  }

}
