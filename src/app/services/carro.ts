import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../Modal/interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Carro {

  private api = 'http://localhost/api_proyecto/public/carrito';

  private carritoSubject = new BehaviorSubject<
    { producto: Products; cantidad: number; id_detalle: number }[]
  >([]);

  carrito$ = this.carritoSubject.asObservable();

  constructor(private http: HttpClient) {
    this.cargarCarritoDesdeAPI();
  }

  // ============================================================
  // HELPERS
  // ============================================================
  private getLocalStorage(): Storage | null {
    return (typeof window !== 'undefined') ? window.localStorage : null;
  }

  private getToken(): string | null {
    return this.getLocalStorage()?.getItem('token') ?? null;
  }

  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }

  // ============================================================
  // CARGAR CARRITO
  // ============================================================
  private cargarCarritoDesdeAPI(): void {
    const token = this.getToken();
    if (!token) return;

    this.http.get<any[]>(this.api, { headers: this.getHeaders() })
      .subscribe({
        next: (items) => {
          const convertidos = items.map(i => ({
            id_detalle: i.id_detalle_carrito,
            producto: {
              id: i.id_productos,
              nombre: i.nombre,
              descripcion: i.descripcion,
              precio: i.precio_unitario,
              imagen: i.imagen,
              stock: i.stock,
              categoria: i.categoria ?? null
            },
            cantidad: i.cantidad
          }));

          this.carritoSubject.next(convertidos);
        },
        error: (err) => console.error('Error al cargar carrito', err)
      });
  }

  // ============================================================
  // AGREGAR PRODUCTO
  // ============================================================
  agregarCarrito(producto: Products): void {
    const token = this.getToken();
    if (!token) return;

    this.http.post(
      `${this.api}/agregar`,
      {
        id_producto: producto.id,
        cantidad: 1,
        precio_unitario: producto.precio
      },
      { headers: this.getHeaders() }
    ).subscribe({
      next: () => this.cargarCarritoDesdeAPI(),
      error: (err) => console.error('Error al agregar producto', err)
    });
  }

  // ============================================================
  // ELIMINAR PRODUCTO
  // ============================================================
  eliminarCarrito(id_detalle: number): void {
    const actual = this.carritoSubject.getValue();
    this.carritoSubject.next(actual.filter(p => p.id_detalle !== id_detalle));

    const token = this.getToken();
    if (!token) return;

    this.http.delete(`${this.api}/eliminar/${id_detalle}`, {
      headers: this.getHeaders()
    }).subscribe({
      next: () => this.cargarCarritoDesdeAPI(),
      error: (err) => console.error('Error al eliminar producto', err)
    });
  }

  // ============================================================
  // VACIAR CARRITO
  // ============================================================
  vaciarCarrito(): void {
    const token = this.getToken();
    if (!token) return;

    this.http.delete(`${this.api}/vaciar`, {
      headers: this.getHeaders()
    }).subscribe({
      next: () => this.carritoSubject.next([]),
      error: (err) => console.error('Error al vaciar carrito', err)
    });
  }

  // ============================================================
  // ACTUALIZAR CANTIDAD
  // ============================================================
  actualizarCantidad(id_detalle: number, nuevaCantidad: number): void {
    const productos = this.carritoSubject.getValue();

    this.carritoSubject.next(
      productos.map(item =>
        item.id_detalle === id_detalle
          ? { ...item, cantidad: nuevaCantidad }
          : item
      )
    );

    const token = this.getToken();
    if (!token) return;

    this.http.put(
      `${this.api}/actualizar/${id_detalle}`,
      { cantidad: nuevaCantidad },
      { headers: this.getHeaders() }
    ).subscribe({
      next: () => this.cargarCarritoDesdeAPI(),
      error: (err) => console.error('Error al actualizar cantidad', err)
    });
  }

  // ============================================================
  // GETTERS
  // ============================================================
  obtenerProductos() {
    return this.carritoSubject.getValue();
  }

  obtenerTotal(): number {
    return this.carritoSubject
      .getValue()
      .reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
  }
}
