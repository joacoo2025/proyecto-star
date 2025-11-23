import { Component} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Products } from '../../Modal/interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-crud',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class CRUD {
  form: FormGroup;
  items: Products[] = [];
  editMode = false;
  editingId: number | null = null;
  private nextId = 1;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      descripcion: ['', Validators.maxLength(200)],
      precio: [null, [Validators.min(0)]]
    });
  }

  

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.value;
    if (this.editMode && this.editingId != null) {
      // Update
      const idx = this.items.findIndex(i => i.id === this.editingId);
      if (idx !== -1) {
        this.items[idx] = {
          id: this.editingId,
          nombre: value.nombre,
          descripcion: value.descripcion,
          precio: value.precio != null ? +value.precio : 0,
          imagen: value.imagen,
  categoria: value.categoria,
  cantidad: value.cantidad
        };
      }
      this.cancelEdit();
    } else {
      // Create
      const newItem: Products = {
  id: this.nextId++,
  nombre: value.nombre,
  descripcion: value.descripcion,
  precio: value.precio,
  imagen: value.imagen,
  categoria: value.categoria,
  cantidad: value.cantidad
};
      this.items.push(newItem);
      this.form.reset();
    }
  }

  edit(item: Products): void {
    this.editMode = true;
    this.editingId = item.id;
    this.form.patchValue({
      nombre: item.nombre,
      descripcion: item.descripcion ?? '',
      precio: item.precio ?? null
    });
    window.scrollTo({ top: 0, behavior: 'smooth' }); // opcional: llevar al formulario
  }

  delete(item: Products): void {
    const confirmed = confirm(`¿Eliminar "${item.nombre}"?`);
    if (!confirmed) return;
    this.items = this.items.filter(i => i.id !== item.id);
    // si estaba editando ese item, cancelar
    if (this.editingId === item.id) this.cancelEdit();
  }

  cancelEdit(): void {
    this.editMode = false;
    this.editingId = null;
    this.form.reset();
  }

  trackById(index: number, item: Products): number {
    return item.id;
  }
}


