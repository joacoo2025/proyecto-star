import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product {

  private apiUrl = 'http://localhost/api_proyecto/public/products';

  constructor(private http: HttpClient) {}

  // ============================================================
  // OBTENER TODOS LOS PRODUCTOS (GET)
  // ============================================================
  obtenerProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ============================================================
  // CREAR PRODUCTO (POST con JSON)
  // ============================================================
  crearProducto(data: any): Observable<any> {
    // Asegurar envío correcto de destacado (boolean → number)
    if (data.destacado === true) data.destacado = 1;
    if (data.destacado === false) data.destacado = 0;
    if (!data.hasOwnProperty('destacado')) data.destacado = 0;

    return this.http.post(this.apiUrl, data, {
      headers: this.getAuthHeaders(true)
    });
  }

  // ============================================================
  // ACTUALIZAR PRODUCTO (PUT con JSON)
  // ============================================================
  actualizarProducto(id: number, data: any): Observable<any> {

    // Igual que en create: asegurar normalización
    if (data.destacado === true) data.destacado = 1;
    if (data.destacado === false) data.destacado = 0;
    if (!data.hasOwnProperty('destacado')) data.destacado = 0;

    return this.http.put(`${this.apiUrl}/${id}`, data, {
      headers: this.getAuthHeaders(true)
    });
  }

  // ============================================================
  // ELIMINAR PRODUCTO (DELETE)
  // ============================================================
  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  // ============================================================
  // HEADERS
  // ============================================================
  private getAuthHeaders(json: boolean = true): HttpHeaders {
    const token = localStorage.getItem('token') || '';

    let headers: any = {
      Authorization: `Bearer ${token}`
    };

    if (json) {
      headers['Content-Type'] = 'application/json';
    }

    return new HttpHeaders(headers);
  }
}
