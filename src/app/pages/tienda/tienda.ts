import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Products } from '../../Modal/interface';
import { Carro } from '../../services/carro';
import Swal from 'sweetalert2';
import { Favorito } from '../../services/favorito';
import { Product } from '../../services/product';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tienda.html',
  styleUrls: ['./tienda.css']
})
export class Tienda implements OnInit {

  productos: Products[] = [];
  productosFiltrados: Products[] = [];
  destacados: any[] = [];
  visibles: number = 3;

  busqueda: string = "";
  categoriaSeleccionada: string = "";
  precioMin: number | null = null;
  precioMax: number | null = null;

  indexCarrusel = 0;
  categorias: string[] = [];

  constructor(
    public carritoService: Carro,
    public favoritoService: Favorito,
    private productService: Product
  ) {}

  isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  ngOnInit(): void {

    this.productService.obtenerProductos().subscribe({
      next: (data) => {
        this.productos = data;

        this.categorias = [
          ...new Set(
            this.productos
              .map(p => p.categoria)
              .filter((c): c is string => typeof c === 'string' && c.trim() !== '')
          )
        ];

        this.productosFiltrados = [...this.productos];

        // ✔ PRODUCTOS DESTACADOS
        this.destacados = this.productos.filter(p => p.destacado === 1);
      },
      error: (err) => {
        console.error('Error cargando productos:', err);
      }
    });
  }

  filtrar() {
    this.productosFiltrados = this.productos.filter(p => {

      const coincideBusqueda =
        this.busqueda === "" ||
        p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(this.busqueda.toLowerCase());

      const coincideCategoria =
        this.categoriaSeleccionada === "" ||
        p.categoria === this.categoriaSeleccionada;

      const coincidePrecioMin =
        this.precioMin === null || p.precio >= this.precioMin;

      const coincidePrecioMax =
        this.precioMax === null || p.precio <= this.precioMax;

      return coincideBusqueda && coincideCategoria && coincidePrecioMin && coincidePrecioMax;
    });
  }

  agregar(producto: Products) {
    this.carritoService.agregarCarrito(producto);
    Swal.fire({
      title: '¡Producto agregado!',
      html: `El artículo <b>${producto.nombre}</b> fue añadido al Carrito.`,
      icon: 'success',
      confirmButtonText: '¡Genial!'
    });
  }

  agregarFav(producto: Products) {
    this.favoritoService.agregarFavorito(producto);
    Swal.fire({
      title: '¡Producto agregado!',
      html: `El artículo <b>${producto.nombre}</b> fue añadido a favoritos.`,
      icon: 'success',
      confirmButtonText: '¡Genial!'
    });
  }

  // ===============================
  // ✔ CARRUSEL DESTACADOS MEJORADO
  // ===============================

  prev() {
    if (this.destacados.length === 0) return;

    if (this.indexCarrusel === 0) {
      this.indexCarrusel = this.destacados.length - 1; // loop
    } else {
      this.indexCarrusel--;
    }
  }

  next() {
    if (this.destacados.length === 0) return;

    if (this.indexCarrusel === this.destacados.length - 1) {
      this.indexCarrusel = 0; // loop
    } else {
      this.indexCarrusel++;
    }
  }
}
