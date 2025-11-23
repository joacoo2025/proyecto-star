import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from '../../Modal/interface';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class CRUD implements OnInit {

  form: FormGroup;
  items: Products[] = [];
  editMode = false;
  editingId: number | null = null;
  private nextId = 1;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(50)]],
      descripcion: ['', Validators.maxLength(200)],
      precio: [null, [Validators.min(0)]],
      imagen: [''],
      categoria: [''],
      cantidad: [null]
    });
  }

  // ======================================================
  // CARGAR DATOS GUARDADOS
  // ======================================================
  ngOnInit(): void {
    const saved = localStorage.getItem('productos');
    const savedId = localStorage.getItem('nextId');

    if (saved) {
      this.items = JSON.parse(saved);
    }

    if (savedId) {
      this.nextId = Number(savedId);
    }
  }

  // ======================================================
  // GUARDAR EN LOCALSTORAGE
  // ======================================================
  private saveToStorage() {
    localStorage.setItem('productos', JSON.stringify(this.items));
    localStorage.setItem('nextId', this.nextId.toString());
  }

  // ======================================================
  // SUBMIT (crear o actualizar)
  // ======================================================
  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.value;

    if (this.editMode && this.editingId != null) {
      // UPDATE
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
      // CREATE
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

    this.saveToStorage(); // <── GUARDAR CAMBIOS
  }

  // ======================================================
  // EDITAR
  // ======================================================
  edit(item: Products): void {
    this.editMode = true;
    this.editingId = item.id;

    this.form.patchValue({
      nombre: item.nombre,
      descripcion: item.descripcion ?? '',
      precio: item.precio ?? null,
      imagen: item.imagen ?? '',
      categoria: item.categoria ?? '',
      cantidad: item.cantidad ?? null
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ======================================================
  // ELIMINAR
  // ======================================================
  delete(item: Products): void {
    if (!confirm(`¿Eliminar "${item.nombre}"?`)) return;

    this.items = this.items.filter(i => i.id !== item.id);

    if (this.editingId === item.id) {
      this.cancelEdit();
    }

    this.saveToStorage(); // <── GUARDAR CAMBIOS
  }

  // ======================================================
  // CANCELAR EDICIÓN
  // ======================================================
  cancelEdit(): void {
    this.editMode = false;
    this.editingId = null;
    this.form.reset();
  }

  trackById(index: number, item: Products): number {
    return item.id;
  }
}
