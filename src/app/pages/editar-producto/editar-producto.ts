import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from '../../services/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-editar-producto',
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-producto.html',
  styleUrl: './editar-producto.css',
})
export class EditarProducto implements OnInit {

  id!: number;
  form: any = {};
  imagenNueva: File | null = null;

  constructor(
    private productService: Product,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.obtenerProductos().subscribe(data => {
      const prod = data.find(p => p.id == this.id);
      if (prod) this.form = { ...prod };
    });
  }

  seleccionarImagen(e: any) {
    this.imagenNueva = e.target.files[0];
  }

  guardar() {
    const formData = new FormData();

    Object.keys(this.form).forEach(key => {
      formData.append(key, this.form[key]);
    });

    if (this.imagenNueva) {
      formData.append('imagen', this.imagenNueva);
    }

    this.productService.actualizarProducto(this.id, formData).subscribe({
      next: () => this.router.navigate(['/productos']),
      error: (err) => console.error('Error actualizando', err)
    });
  }

}
