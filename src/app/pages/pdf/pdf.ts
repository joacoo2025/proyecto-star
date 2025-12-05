import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Carro } from '../../services/carro';

@Component({
  selector: 'app-pdf',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pdf-container" *ngIf="pdfSrc">
      <iframe
        id="pdfFrame"
        [src]="pdfSrc"
        style="width: 100%; height: 90vh; border: none;"
      ></iframe>

      <button (click)="imprimirPDF()" class="btn-print">
        Imprimir PDF
      </button>
    </div>
  `,
  styles: [`
    .btn-print {
      margin-top: 15px;
      padding: 10px 20px;
      background: #111;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  `]
})
export class PdfComponent implements OnInit {

  pdfSrc!: SafeResourceUrl;

  constructor(
    private carritoService: Carro,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.generarPDF();
  }

  generarPDF() {
    const productos = this.carritoService.obtenerProductos();
    const subtotal = this.carritoService.obtenerTotal();
    const orden = this.generarNumeroOrden();

    const doc = new jsPDF();

    // ===== LOGO GENERAL =====
    const logo = new Image();
    logo.src = 'WhatsApp Image 2025-11-06 at 19.55.52-Photoroom.png'; // luego lo reemplazás por el tuyo

    logo.onload = () => {
      doc.addImage(logo, 'PNG', 80, 5, 50, 20);

      // ===== TÍTULO =====
      doc.setFontSize(18);
      doc.text('Factura de Compra', 14, 40);

      // ===== ORDEN =====
      doc.setFontSize(12);
      doc.text(`Número de Orden: ${orden}`, 14, 50);

      // ===== PRODUCTOS =====
      let y = 70;
      doc.setFontSize(13);
      doc.text('Productos:', 14, y);
      y += 10;

      doc.setFontSize(11);
      productos.forEach((item: any, i: number) => {
        doc.text(
          `${i + 1}. ${item.producto.nombre} — Cantidad: ${item.cantidad} — $${item.producto.precio}`,
          10,
          y
        );
        y += 10;
      });

      doc.setFontSize(14);
      doc.text(`Subtotal: $${subtotal}`, 10, y + 10);

      const pdfBlob = doc.output('blob');
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
        URL.createObjectURL(pdfBlob)
      );
    };
  }

  imprimirPDF() {
    const iframe = document.getElementById('pdfFrame') as HTMLIFrameElement;
    iframe.contentWindow?.print();
  }

  generarNumeroOrden(): string {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const dia = fecha.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 90000) + 10000;
    return `ORD-${año}${mes}${dia}-${random}`;
  }
}
