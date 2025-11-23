import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Product } from '../../services/product';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-crear-producto',
  imports: [FormsModule],
  templateUrl: './crear-producto.html',
  styleUrl: './crear-producto.css',
})
export class CrearProducto {
form: any = {}; // datos simples
  imagen: File | null = null;

  constructor(private productService: Product, private router: Router) {}

  seleccionarImagen(e: any) {
    this.imagen = e.target.files[0];
  }

  crear() {
    const formData = new FormData();

    Object.keys(this.form).forEach(key => {
      formData.append(key, this.form[key]);
    });

    if (this.imagen) formData.append('imagen', this.imagen);

    this.productService.crearProducto(formData).subscribe({
      next: () => this.router.navigate(['/productos']),
      error: (err) => console.error('Error creando producto', err)
    });
  }
}
