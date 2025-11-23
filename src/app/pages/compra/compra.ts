import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';
import { Router } from '@angular/router';
// 👉 Servicios del componente secundario
import { Carro } from '../../services/carro';
import { Compris } from '../../services/compris';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './compra.html',
  styleUrls: ['./compra.css']
})
export class Compra implements OnInit {

  // ---------------------------
  // 📌 VARIABLES DEL COMPONENTE PRINCIPAL
  // ---------------------------
  formularioCompra!: FormGroup;
  total!: number;
  envio = 1500;

  facturaGenerada = false;
  factura: any;

  mostrarModal = false;
  pdfSrc: SafeResourceUrl | undefined;

  // ---------------------------
  // 📌 VARIABLES DEL COMPONENTE SECUNDARIO (AGREGADAS)
  // ---------------------------
  productos: any[] = [];
  datos = { direccion: '', telefono: '' };

  subtotal = 0;
  mensaje = '';
  cargando = false;

  // ---------------------------
  // 📌 CONSTRUCTOR UNIFICADO
  // ---------------------------
  constructor(
    private fb: FormBuilder,
    private carritoLocal: Carro,     // tu servicio original
    private sanitizer: DomSanitizer,
    private router: Router,

    // servicios importados del componente secundario
    private carritoService: Carro,
    private compraService: Compris
  ) {}

  // ---------------------------
  // 📌 ngOnInit UNIFICADO
  // ---------------------------
  ngOnInit(): void {

    // 💠 Formulario reactivo original
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

    // 💠 Suscripción al carrito del componente secundario
    this.carritoService.carrito$.subscribe(items => {
      this.productos = items;
      this.recalcularSecundario(); // actualiza subtotal y total del secundario
    });
  }

  // ---------------------------
  // 📌 CÁLCULO SECUNDARIO DE TOTALES
  // (sin reemplazar tu función calcularTotal())
  // ---------------------------
  recalcularSecundario() {
    this.subtotal = this.productos.reduce((acc, p) => {
      const precio = Number(p.precio_unitario) || 0;
      const cantidad = Number(p.cantidad) || 1;
      return acc + (precio * cantidad);
    }, 0);

    this.total = this.subtotal + this.envio;
  }

  // ==================================================================================
  // 📌 NO SE MODIFICA NINGUNA DE TUS FUNCIONES ORIGINALES — SOLO SE PEGAN TAL CUAL
  // ==================================================================================

  calcularTotal(): number {
    const subtotal = this.carritoLocal.obtenerTotal();
    this.total = subtotal + this.envio;
    return this.total;
  }

  emitirFactura(): void {
    const datosCliente = this.formularioCompra.value;
    const productos = this.carritoLocal.obtenerProductos();
    const totalFinal = this.calcularTotal();

    this.factura = {
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
      const metodo = this.formularioCompra.get('metodoPago')?.value;

      if (metodo === 'transferencia') {
        this.router.navigate(['/transferencia']);
        return;
      }

      this.emitirFactura();
      this.generarPDFModal();
    } else {
      this.formularioCompra.markAllAsTouched();
    }
  }

  generarPDFModal(): void {
    if (!this.factura) return;

    const doc = new jsPDF();
    const marginLeft = 14;
    let y = 20;

    doc.setFontSize(18);
    doc.text('Factura de compra', marginLeft, y);
    y += 10;

    doc.setFontSize(12);
    doc.text(`Fecha: ${this.factura.fecha.toLocaleString()}`, marginLeft, y);
    y += 10;

    doc.setFontSize(14);
    doc.text('Cliente', marginLeft, y);
    doc.setFontSize(12);
    y += 8;

    const c = this.factura.cliente;
    const datosCliente = [
      `Nombre: ${c.nombre}`,
      `Dirección: ${c.direccion}`,
      `Correo: ${c.correo}`,
      `Teléfono: ${c.telefono}`,
      `Ciudad: ${c.ciudad}`,
      `Provincia: ${c.provincia}`,
      `Código Postal: ${c.codigopostal}`,
    ];

    datosCliente.forEach(linea => {
      doc.text(linea, marginLeft + 6, y);
      y += 8;
    });

    y += 5;
    doc.setFontSize(14);
    doc.text('Productos', marginLeft, y);
    doc.setFontSize(12);
    y += 8;

    this.factura.productos.forEach((item: any, index: number) => {
      const texto = `${index + 1}. ${item.producto.nombre}  |  Cantidad: ${item.cantidad}  |  Precio: $${item.producto.precio.toFixed(2)}  |  Subtotal: $${(item.producto.precio * item.cantidad).toFixed(2)}`;
      if (y > 270) {
        doc.addPage();
        y = 20;
      }

      const lineas = doc.splitTextToSize(texto, 180);
      doc.text(lineas, marginLeft + 6, y);
      y += lineas.length * 8;
    });

    y += 10;
    if (y > 270) {
      doc.addPage();
      y = 20;
    }

    doc.text(`Costo de envío: $${this.factura.envio.toFixed(2)}`, marginLeft, y);
    y += 8;
    doc.text(`Total a pagar: $${this.factura.total.toFixed(2)}`, marginLeft, y);

    const pdfBlob = doc.output('blob');
    this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(pdfBlob));
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;

    if (this.pdfSrc) {
      URL.revokeObjectURL((this.pdfSrc as any).changingThisBreaksApplicationSecurity);
      this.pdfSrc = undefined;
    }
  }

  imprimirPDF(): void {
    const iframe: HTMLIFrameElement | null = document.getElementById('pdfFrame') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    }
  }

  // ---------------------------
  // 📌 ICONOS (tu arreglo original)
  // ---------------------------
  paymentMethods = [
    { name: '', icon: 'imagenes/visa.webp' },
    { name: '', icon: 'imagenes/master.webp' },
    { name: '', icon: 'imagenes/mp.webp' },
    { name: '', icon: 'imagenes/nx.webp' },
  ];
}

