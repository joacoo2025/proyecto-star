import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Carro } from '../../services/carro'; // ⬅️ IMPORTANTE

@Component({
  selector: 'app-transferencia',
  imports: [CommonModule],
  templateUrl: './transferencia.html',
  styleUrl: './transferencia.css',
})
export class Transferencia implements OnInit {

  alias = 'miemprendimiento.mp';
  cbu = '0000003100045678912345';
  titular = 'David';
  qr = 'assets/imagenes/qrtransferencia.png';
  whatsapp = '+54 9 11 2345-6789';
  gmail = 'miemprendimiento@gmail.com';
  subtotal: number = 0;

  constructor(private carritoService: Carro) {}

  ngOnInit(): void {
    // Nos suscribimos al carrito para actualizar el subtotal en tiempo real
    this.carritoService.carrito$.subscribe(productos => {
      this.subtotal = productos.reduce(
        (total, item) => total + item.producto.precio * item.cantidad,
        0
      );
    });
  }
}
