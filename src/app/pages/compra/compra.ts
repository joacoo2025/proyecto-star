import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Carro } from '../../services/carro';
import jsPDF from 'jspdf';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './compra.html',
  styleUrl: './compra.css'
})
export class Compra implements OnInit {

  formularioCompra!: FormGroup;
  total!: number;
  envio = 1500;
  facturaGenerada = false;
  factura: any;
  mostrarModal = false;
  pdfSrc: SafeResourceUrl | undefined;

  constructor(
    private fb: FormBuilder,
    private carritoService: Carro,
    private sanitizer: DomSanitizer,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.formularioCompra = this.fb.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      codigopostal: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      provincia: ['', [Validators.required]],
      metodoPago: ['', [Validators.required]],
    });
  }

  generarNumeroOrden(): string {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const dia = fecha.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 90000) + 10000;
    return `ORD-${año}${mes}${dia}-${random}`;
  }

  calcularTotal(): number {
    const subtotal = this.carritoService.obtenerTotal();
    this.total = subtotal + this.envio;
    return this.total;
  }

  verificarMetodoPago() {
    const metodo = this.formularioCompra.get('metodoPago')?.value;

    if (metodo === 'transferencia') {
      this.router.navigate(['/transferencia']);
    }

    if (metodo === 'efectivo') {
      this.router.navigate(['/pdf']);
    }
  }

  emitirFactura(): void {
    const datosCliente = this.formularioCompra.value;
    const productos = this.carritoService.obtenerProductos();
    const totalFinal = this.calcularTotal();

    this.factura = {
      orden: this.generarNumeroOrden(),
      cliente: datosCliente,
      productos: productos,
      envio: this.envio,
      total: totalFinal,
      fecha: new Date()
    };

    this.facturaGenerada = true;
  }

  finalizarCompra(): void {
    if (this.formularioCompra.valid) {
      this.emitirFactura();
      this.generarPDFModal();
    } else {
      this.formularioCompra.markAllAsTouched();
    }
  }

  generarPDFModal(): void {
    if (!this.factura) return;

    const doc = new jsPDF();

    // --- LOGO ---
    const logoPath = 'assets/logo.png';
    try {
      doc.addImage(logoPath, 'PNG', 70, 5, 70, 30);
    } catch (e) {
      console.warn('No se pudo cargar el logo, revisá la ruta.');
    }

    doc.setFontSize(18);
    doc.text('Factura de compra', 14, 50);

    doc.setFontSize(14);
    doc.text(`Orden de Compra: ${this.factura.orden}`, 14, 60);
    doc.setFontSize(12);
    doc.text(`Fecha: ${this.factura.fecha.toLocaleString()}`, 14, 68);

    doc.text('Cliente', 14, 78);
    const c = this.factura.cliente;

    doc.text(`Nombre: ${c.nombre}`, 20, 88);
    doc.text(`Dirección: ${c.direccion}`, 20, 96);
    doc.text(`Correo: ${c.correo}`, 20, 104);
    doc.text(`Teléfono: ${c.telefono}`, 20, 112);
    doc.text(`Ciudad: ${c.ciudad}`, 20, 120);
    doc.text(`Provincia: ${c.provincia}`, 20, 128);
    doc.text(`Código Postal: ${c.codigopostal}`, 20, 136);

    let y = 150;
    doc.setFontSize(14);
    doc.text('Productos', 14, y);

    doc.setFontSize(12);
    this.factura.productos.forEach((item: any, index: number) => {
      y += 10;
      doc.text(
        `${index + 1}. ${item.producto.nombre} | Cant: ${item.cantidad} | $${item.producto.precio.toFixed(2)} | Subtotal: $${(item.producto.precio * item.cantidad).toFixed(2)}`,
        20,
        y,
        { maxWidth: 170 }
      );
    });

    y += 10;
    doc.text(`Costo de envío: $${this.factura.envio.toFixed(2)}`, 14, y);

    y += 10;
    doc.text(`Total a pagar: $${this.factura.total.toFixed(2)}`, 14, y);

    const pdfBlob = doc.output('blob');
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      URL.createObjectURL(pdfBlob)
    );
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    if (this.pdfSrc) {
      URL.revokeObjectURL(
        (this.pdfSrc as any).changingThisBreaksApplicationSecurity
      );
      this.pdfSrc = undefined;
    }
  }

  imprimirPDF(): void {
    const iframe: HTMLIFrameElement | null =
      document.getElementById('pdfFrame') as HTMLIFrameElement;

    if (iframe?.contentWindow) {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    }
  }

  paymentMethods = [
    { name: '', icon: 'imagenes/visa.webp' },
    { name: '', icon: 'imagenes/master.webp' },
    { name: '', icon: 'imagenes/mp.webp' },
    { name: '', icon: 'imagenes/nx.webp' },
  ];
}
