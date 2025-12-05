import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'],
})
export class Contacto {
  consultaForm: FormGroup;
  respuesta: any;
  enviando: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.consultaForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  enviarConsulta() {
    if (this.consultaForm.invalid) {
      this.respuesta = { status: 'error', mensaje: 'Complete todos los campos correctamente.' };
      return;
    }

    this.enviando = true;
    const datos = this.consultaForm.value;

    this.http.post('http://localhost/api_proyecto/public/consultas', datos)
      .subscribe({
        next: (res: any) => {
          this.respuesta = res;
          if (res.status === 'ok') this.consultaForm.reset();
          this.enviando = false;
        },
        error: (err) => {
          console.error(err);
          this.respuesta = err.error || { status: 'error', mensaje: 'Error al enviar la consulta.' };
          this.enviando = false;
        }
      });
  }
}
