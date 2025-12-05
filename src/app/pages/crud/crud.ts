import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from '../../Modal/interface';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../services/product';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crud.html',
  styleUrls: ['./crud.css'],
})
export class crud implements OnInit {

  form: FormGroup;
  items: Products[] = [];
  editMode = false;
  editingId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: Product
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      descripcion: ['', Validators.maxLength(200)],
      precio: [null, [Validators.required, Validators.min(0)]],
      imagen: [''],
      categoria: [''],
      cantidad: [0, [Validators.min(0)]],
      destacado: [0]  // <<------ NUEVO
    });
  }

  // =====================================
  // Cargar productos desde API
  // =====================================
  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productService.obtenerProductos().subscribe({
      next: (data) => (this.items = data),
      error: (e) => console.error('Error cargando productos', e)
    });
  }

  // =====================================
  // Crear o actualizar
  // =====================================
  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const data = {
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion,
      precio: Number(this.form.value.precio),
      imagen: this.form.value.imagen,
      categoria: this.form.value.categoria,
      cantidad: Number(this.form.value.cantidad),
      destacado: this.form.value.destacado  // <<------ NUEVO
    };

    if (this.editMode && this.editingId != null) {
      // UPDATE API
      this.productService.actualizarProducto(this.editingId, data).subscribe({
        next: () => {
          this.cargarProductos();
          this.cancelEdit();
        },
        error: (e) => console.error('Error al actualizar', e)
      });

    } else {
      // CREATE API
      this.productService.crearProducto(data).subscribe({
        next: () => {
          this.cargarProductos();
          this.form.reset();
        },
        error: (e) => console.error('Error al crear', e)
      });
    }
  }

  // =====================================
  // Editar
  // =====================================
  edit(item: Products): void {
    this.editMode = true;
    this.editingId = item.id;

    this.form.patchValue({
      nombre: item.nombre,
      descripcion: item.descripcion,
      precio: item.precio,
      imagen: item.imagen,
      categoria: item.categoria,
      cantidad: item.cantidad,
      destacado: item.destacado
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =====================================
  // Eliminar
  // =====================================
  delete(item: Products): void {
    if (!confirm(`¿Eliminar "${item.nombre}"?`)) return;

    this.productService.eliminarProducto(item.id).subscribe({
      next: () => this.cargarProductos(),
      error: (e) => console.error('Error al eliminar', e)
    });
  }

  // =====================================
  // Cancelar edición
  // =====================================
  cancelEdit(): void {
    this.editMode = false;
    this.editingId = null;
    this.form.reset();
  }

  trackById(index: number, item: Products): number {
    return item.id;
  }
}
