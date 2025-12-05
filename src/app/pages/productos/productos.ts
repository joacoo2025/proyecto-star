import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../../Modal/interface';
import { Carro } from '../../services/carro';
import { Favorito } from '../../services/favorito';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
export const PRODUCTOS_DATA: Products[] = [
  {
  id: 1,
  nombre: "Cucha Térmica Modelo M",
  codigo: "ST001",
  imagen: "cucha-termica-modelo-m.jpg",
  descripcion: "Ancho 0,56mts, Prof 0,70mts, Alt 0,60mts. Puerta 0,26mts x 0,41mts. Peso 4kg.",
  categoria: "Cuchas",
  medidas: "0,56 x 0,70 x 0,60 m",
  precio: 84600,
  cantidad: 1,
  destacado:1,
},
{
  id: 2,
  nombre: "Cucha Térmica Modelo L",
  codigo: "ST002",
  imagen: "cucha-termica-modelo-l.jpg",
  descripcion: "Ancho 0,70mts, Prof 0,85mts, Alt 0,70mts. Puerta 0,33mts x 0,49mts. Peso 7kg.",
  categoria: "Cuchas",
  medidas: "0,70 x 0,85 x 0,70 m",
  precio: 123500,
  cantidad: 1,
  destacado:1,
},

// CUCHAS FIBRA REFORZADA (4 productos distintos)
{
  id: 3,
  nombre: "Cucha Fibra Reforzada Nº3",
  codigo: "",
  imagen: "cucha-fibra-reforzada-3.jpg",
  descripcion: "Pintura con protección UV. Medidas 0,58 x 0,76 x 0,60 m",
  categoria: "Cuchas",
  medidas: "0,58 x 0,76 x 0,60 m",
  precio: 56532,
  cantidad: 1,
  destacado:1,
},
{
  id: 4,
  nombre: "Cucha Fibra Reforzada Nº4",
  codigo: "",
  imagen: "cucha-fibra-reforzada-4.jpg",
  descripcion: "Pintura con protección UV. Medidas 0,65 x 0,85 x 0,75 m",
  categoria: "Cuchas",
  medidas: "0,65 x 0,85 x 0,75 m",
  precio: 70240,
  cantidad: 1,
  destacado:1,
},
{
  id: 5,
  nombre: "Cucha Fibra Reforzada Nº5",
  codigo: "",
  imagen: "cucha-fibra-reforzada-5.jpg",
  descripcion: "Pintura con protección UV. Medidas 0,85 x 1,05 x 0,90 m",
  categoria: "Cuchas",
  medidas: "0,85 x 1,05 x 0,90 m",
  precio: 106500,
  cantidad: 1,
  destacado:1,
},
{
  id: 6,
  nombre: "Cucha Fibra Reforzada Nº6",
  codigo: "",
  imagen: "cucha-fibra-reforzada-6.jpg",
  descripcion: "Pintura con protección UV. Medidas 1,10 x 1,25 x 1,00 m. Promo 5+1",
  categoria: "Cuchas",
  medidas: "1,10 x 1,25 x 1,00 m",
  precio: 145737,
  cantidad: 1,
  oferta: true,
  destacado:1,
},



// NOVEDADES
{
  id: 8,
  nombre: "Pelota Frisbee",
  codigo: "0549",
  imagen: "pelota-frisbee.jpg",
  descripcion: "Pelota frisbee resistente",
  categoria: "Juguetes",
  precio: 9190,
  cantidad: 1,
  destacado:1,
},
{
  id: 9,
  nombre: "Nidito Desmontable XL",
  codigo: "",
  imagen: "nidito-desmontable-xl.jpg",
  descripcion: "Nidito desmontable XL. Medida 80 cm.",
  categoria: "Camas",
  medidas: "80 cm",
  precio: 39990,
  cantidad: 1,
  destacado:1,
},
{
  id: 20,
  nombre: "Metalizado con Corderito Star Talle 1",
  codigo: "942",
  imagen: "metalizado-corderito-star-t1.jpg",
  descripcion: "Campera Metalizada con corderito STAR – Talle 1.",
  categoria: "Ropa",
  precio: 3250,
  cantidad: 1,
  talle: 1,
  destacado:1,
},
{
  id: 21,
  nombre: "Metalizado con Corderito Star Talle 2",
  codigo: "943",
  imagen: "metalizado-corderito-star-t2.jpg",
  descripcion: "Campera Metalizada con corderito STAR – Talle 2.",
  categoria: "Ropa",
  precio: 4160,
  cantidad: 1,
  talle: 2,
  destacado:1,
},
{
  id: 22,
  nombre: "Metalizado con Corderito Star Talle 3",
  codigo: "944",
  imagen: "metalizado-corderito-star-t3.jpg",
  descripcion: "Campera Metalizada con corderito STAR – Talle 3.",
  categoria: "Ropa",
  precio: 4800,
  cantidad: 1,
  talle: 3,
  destacado:1,
},
{
  id: 23,
  nombre: "Metalizado con Corderito Star Talle 4",
  codigo: "945",
  imagen: "metalizado-corderito-star-t4.jpg",
  descripcion: "Campera Metalizada con corderito STAR – Talle 4.",
  categoria: "Ropa",
  precio: 5440,
  cantidad: 1,
  talle: 4
},
{
  id: 24,
  nombre: "Metalizado con Corderito Star Talle 5",
  codigo: "946",
  imagen: "metalizado-corderito-star-t5.jpg",
  descripcion: "Campera Metalizada con corderito STAR – Talle 5.",
  categoria: "Ropa",
  precio: 6080,
  cantidad: 1,
  talle: 5
},
{
  id: 25,
  nombre: "Metalizado con Corderito Star Talle 6",
  codigo: "947",
  imagen: "metalizado-corderito-star-t6.jpg",
  descripcion: "Campera Metalizada con corderito STAR – Talle 6.",
  categoria: "Ropa",
  precio: 6720,
  cantidad: 1,
  talle: 6
},
{
  id: 26,
  nombre: "Metalizado con Corderito Star Talle 7",
  codigo: "948",
  imagen: "metalizado-corderito-star-t7.jpg",
  descripcion: "Campera Metalizada con corderito STAR – Talle 7.",
  categoria: "Ropa",
  precio: 7360,
  cantidad: 1,
  talle: 7
},
{
  id: 27,
  nombre: "Metalizado con Corderito Star Talle 8",
  codigo: "949",
  imagen: "metalizado-corderito-star-t8.jpg",
  descripcion: "Campera Metalizada con corderito STAR – Talle 8.",
  categoria: "Ropa",
  precio: 8000,
  cantidad: 1,
  talle: 8
},
{
  id: 28,
  nombre: "Matelassé con Corderito Star Talle 1",
  codigo: "930",
  imagen: "matelasse-corderito-star-t1.jpg",
  descripcion: "Abrigo Matelassé con corderito STAR – Talle 1.",
  categoria: "Ropa",
  precio: 3200,
  cantidad: 1,
  talle: 1
},
{
  id: 29,
  nombre: "Matelassé con Corderito Star Talle 2",
  codigo: "931",
  imagen: "matelasse-corderito-star-t2.jpg",
  descripcion: "Abrigo Matelassé con corderito STAR – Talle 2.",
  categoria: "Ropa",
  precio: 3840,
  cantidad: 1,
  talle: 2
},
{
  id: 30,
  nombre: "Matelassé con Corderito Star Talle 3",
  codigo: "932",
  imagen: "matelasse-corderito-star-t3.jpg",
  descripcion: "Abrigo Matelassé con corderito STAR – Talle 3.",
  categoria: "Ropa",
  precio: 4480,
  cantidad: 1,
  talle: 3
},
{
  id: 31,
  nombre: "Matelassé con Corderito Star Talle 4",
  codigo: "933",
  imagen: "matelasse-corderito-star-t4.jpg",
  descripcion: "Abrigo Matelassé con corderito STAR – Talle 4.",
  categoria: "Ropa",
  precio: 5120,
  cantidad: 1,
  talle: 4
},
{
  id: 32,
  nombre: "Matelassé con Corderito Star Talle 5",
  codigo: "934",
  imagen: "matelasse-corderito-star-t5.jpg",
  descripcion: "Abrigo Matelassé con corderito STAR – Talle 5.",
  categoria: "Ropa",
  precio: 5760,
  cantidad: 1,
  talle: 5
},
{
  id: 33,
  nombre: "Matelassé con Corderito Star Talle 6",
  codigo: "935",
  imagen: "matelasse-corderito-star-t6.jpg",
  descripcion: "Abrigo Matelassé con corderito STAR – Talle 6.",
  categoria: "Ropa",
  precio: 6400,
  cantidad: 1,
  talle: 6
},
{
  id: 34,
  nombre: "Matelassé con Corderito Star Talle 7",
  codigo: "936",
  imagen: "matelasse-corderito-star-t7.jpg",
  descripcion: "Abrigo Matelassé con corderito STAR – Talle 7.",
  categoria: "Ropa",
  precio: 7040,
  cantidad: 1,
  talle: 7
},
{
  id: 35,
  nombre: "Matelassé con Corderito Star Talle 8",
  codigo: "937",
  imagen: "matelasse-corderito-star-t8.jpg",
  descripcion: "Abrigo Matelassé con corderito STAR – Talle 8.",
  categoria: "Ropa",
  precio: 7680,
  cantidad: 1,
  talle: 8
},
{
  id: 36,
  nombre: "Matelassé con Corderito Star Talle 9",
  codigo: "938",
  imagen: "matelasse-corderito-star-t9.jpg",
  descripcion: "Abrigo Matelassé con corderito STAR – Talle 9.",
  categoria: "Ropa",
  precio: 10240,
  cantidad: 1,
  talle: 9
},
{
  id: 37,
  nombre: "Matelassé con Corderito Star Talle 10",
  codigo: "939",
  imagen: "matelasse-corderito-star-t10.jpg",
  descripcion: "Abrigo Matelassé con corderito STAR – Talle 10.",
  categoria: "Ropa",
  precio: 11840,
  cantidad: 1,
  talle: 10
},
{
  id: 38,
  nombre: "Matelassé con Corderito Star Talle 11",
  codigo: "940",
  imagen: "matelasse-corderito-star-t11.jpg",
  descripcion: "Abrigo Matelassé con corderito STAR – Talle 11.",
  categoria: "Ropa",
  precio: 13440,
  cantidad: 1,
  talle: 11
},
{
  id: 39,
  nombre: "Matelassé con Corderito Star Talle 12",
  codigo: "941",
  imagen: "matelasse-corderito-star-t12.jpg",
  descripcion: "Abrigo Matelassé con corderito STAR – Talle 12.",
  categoria: "Ropa",
  precio: 15040,
  cantidad: 1,
  talle: 12
},

{
  id: 42,
  nombre: "Polar Soft Talle 3",
  codigo: "1021",
  imagen: "polar-soft-t3.jpg",
  descripcion: "Abrigo Polar Soft – Talle 3.",
  categoria: "Ropa",
  precio: 2800,
  cantidad: 1,
  talle: 3
},
{
  id: 43,
  nombre: "Polar Soft Talle 4",
  codigo: "1022",
  imagen: "polar-soft-t4.jpg",
  descripcion: "Abrigo Polar Soft – Talle 4.",
  categoria: "Ropa",
  precio: 3100,
  cantidad: 1,
  talle: 4
},
{
  id: 44,
  nombre: "Polar Soft Talle 5",
  codigo: "1023",
  imagen: "",
  descripcion: "Abrigo Polar Soft – Talle 5.",
  categoria: "Ropa",
  precio: 3500,
  cantidad: 1,
  talle: 5,
  oferta: true      // PROMO 10+1
},
{
  id: 45,
  nombre: "Polar Soft Talle 6",
  codigo: "1024",
  imagen: "polar-soft-t6.jpg",
  descripcion: "Abrigo Polar Soft – Talle 6.",
  categoria: "Ropa",
  precio: 3900,
  cantidad: 1,
  talle: 6
},
{
  id: 46,
  nombre: "Polar Soft Talle 7",
  codigo: "1025",
  imagen: "polar-soft-t7.jpg",
  descripcion: "Abrigo Polar Soft – Talle 7.",
  categoria: "Ropa",
  precio: 4200,
  cantidad: 1,
  talle: 7
},
{
  id: 47,
  nombre: "Polar Soft Talle 8",
  codigo: "1026",
  imagen: "polar-soft-t8.jpg",
  descripcion: "Abrigo Polar Soft – Talle 8.",
  categoria: "Ropa",
  precio: 4700,
  cantidad: 1,
  talle: 8,
  oferta: true
},
{
  id: 48,
  nombre: "Polar Soft Talle 9",
  codigo: "1027",
  imagen: "polar-soft-t9.jpg",
  descripcion: "Abrigo Polar Soft – Talle 9.",
  categoria: "Ropa",
  precio: 5000,
  cantidad: 1,
  talle: 9
},
{
  id: 49,
  nombre: "Polar Soft Talle 10",
  codigo: "1028",
  imagen: "polar-soft-t10.jpg",
  descripcion: "Abrigo Polar Soft – Talle 10.",
  categoria: "Ropa",
  precio: 5300,
  cantidad: 1,
  talle: 10
},
{
  id: 50,
  nombre: "Polar Soft Talle 11",
  codigo: "1029",
  imagen: "polar-soft-t11.jpg",
  descripcion: "Abrigo Polar Soft – Talle 11.",
  categoria: "Ropa",
  precio: 5600,
  cantidad: 1,
  talle: 11,
  oferta: true
},
{
  id: 51,
  nombre: "Polar Soft Talle 12",
  codigo: "1030",
  imagen: "polar-soft-t12.jpg",
  descripcion: "Abrigo Polar Soft – Talle 12.",
  categoria: "Ropa",
  precio: 6000,
  cantidad: 1,
  talle: 12
},
{
  id: 52,
  nombre: "Polar Soft Talle 13",
  codigo: "1031",
  imagen: "polar-soft-t13.jpg",
  descripcion: "Abrigo Polar Soft – Talle 13.",
  categoria: "Ropa",
  precio: 6500,
  cantidad: 1,
  talle: 13
},
{
  id: 53,
  nombre: "Polar Soft Talle 14",
  codigo: "1032",
  imagen: "polar-soft-t14.jpg",
  descripcion: "Abrigo Polar Soft – Talle 14.",
  categoria: "Ropa",
  precio: 7000,
  cantidad: 1,
  talle: 14,
  oferta: true
},

{
  id: 54,
  nombre: "Polar Liso Talle 0",
  codigo: "",
  imagen: "polar-liso-t0.jpg",
  descripcion: "Polar liso talle 0 – 20 cm de largo – colores varios.",
  categoria: "Ropa",
  precio: 2190,
  cantidad: 1,
  talle: 0
},
{
  id: 55,
  nombre: "Polar Liso Talle 1",
  codigo: "",
  imagen: "polar-liso-t1.jpg",
  descripcion: "Polar liso talle 1 – 25 cm de largo – colores varios.",
  categoria: "Ropa",
  precio: 2450,
  cantidad: 1,
  talle: 1,
  oferta: true   // 10+1
},
{
  id: 56,
  nombre: "Polar Liso Talle 2",
  codigo: "",
  imagen: "polar-liso-t2.jpg",
  descripcion: "Polar liso talle 2 – 30 cm de largo – colores varios.",
  categoria: "Ropa",
  precio: 2590,
  cantidad: 1,
  talle: 2
},
{
  id: 57,
  nombre: "Polar Liso Talle 3",
  codigo: "",
  imagen: "polar-liso-t3.jpg",
  descripcion: "Polar liso talle 3 – 35 cm de largo – colores varios.",
  categoria: "Ropa",
  precio: 2816,
  cantidad: 1,
  talle: 3
},
{
  id: 58,
  nombre: "Polar Liso Talle 4",
  codigo: "",
  imagen: "polar-liso-t4.jpg",
  descripcion: "Polar liso talle 4 – 40 cm de largo – colores varios.",
  categoria: "Ropa",
  precio: 3238,
  cantidad: 1,
  talle: 4,
  oferta: true
},
{
  id: 59,
  nombre: "Polar Liso Talle 5",
  codigo: "",
  imagen: "polar-liso-t5.jpg",
  descripcion: "Polar liso talle 5 – 45 cm de largo – colores varios.",
  categoria: "Ropa",
  precio: 3553,
  cantidad: 1,
  talle: 5
},
{
  id: 60,
  nombre: "Polar Liso Talle 6",
  codigo: "",
  imagen: "polar-liso-t6.jpg",
  descripcion: "Polar liso talle 6 – 50 cm de largo – colores varios.",
  categoria: "Ropa",
  precio: 3850,
  cantidad: 1,
  talle: 6
},
{
  id: 61,
  nombre: "Polar Liso Talle 7",
  codigo: "",
  imagen: "polar-liso-t7.jpg",
  descripcion: "Polar liso talle 7 – 55 cm de largo – colores varios.",
  categoria: "Ropa",
  precio: 4279,
  cantidad: 1,
  talle: 7,
  oferta: true
},
{
  id: 62,
  nombre: "Polar Liso Talle 8",
  codigo: "",
  imagen: "polar-liso-t8.jpg",
  descripcion: "Polar liso talle 8 – 60 cm de largo – colores varios.",
  categoria: "Ropa",
  precio: 4598,
  cantidad: 1,
  talle: 8
},
{
  id: 63,
  nombre: "Polar Liso Talle 9",
  codigo: "",
  imagen: "polar-liso-t9.jpg",
  descripcion: "Polar liso talle 9 – 65 cm de largo – colores varios.",
  categoria: "Ropa",
  precio: 5016,
  cantidad: 1,
  talle: 9
},
{
  id: 64,
  nombre: "Polar Liso Talle 10",
  codigo: "",
  imagen: "polar-liso-t10.jpg",
  descripcion: "Polar liso talle 10 – 70 cm de largo – colores varios.",
  categoria: "Ropa",
  precio: 5533,
  cantidad: 1,
  talle: 10,
  oferta: true
},
{
  id: 65,
  nombre: "Polar Liso Talle 11",
  codigo: "",
  imagen: "polar-liso-t11.jpg",
  descripcion: "Polar liso talle 11 – 80 cm de largo – colores varios.",
  categoria: "Ropa",
  precio: 6061,
  cantidad: 1,
  talle: 11
},
{
  id: 66,
  nombre: "Polar Liso Talle 12",
  codigo: "",
  imagen: "polar-liso-t12.jpg",
  descripcion: "Polar liso talle 12 – 85 cm de largo – colores varios.",
  categoria: "Ropa",
  precio: 6875,
  cantidad: 1,
  talle: 12,
  oferta: true
},
{
  id: 67,
  nombre: "Soft con Corderito Talle 0",
  codigo: "809",
  imagen: "soft-corderito-t0.jpg",
  descripcion: "Soft con corderito – Talle 0.",
  categoria: "Ropa",
  precio: 4542,
  cantidad: 1,
  talle: 0
},
{
  id: 68,
  nombre: "Soft con Corderito Talle 1",
  codigo: "918",
  imagen: "soft-corderito-t1.jpg",
  descripcion: "Soft con corderito – Talle 1.",
  categoria: "Ropa",
  precio: 4887,
  cantidad: 1,
  talle: 1,
  oferta: true    // 10+2
},
{
  id: 69,
  nombre: "Soft con Corderito Talle 2",
  codigo: "919",
  imagen: "soft-corderito-t2.jpg",
  descripcion: "Soft con corderito – Talle 2.",
  categoria: "Ropa",
  precio: 5232,
  cantidad: 1,
  talle: 2
},
{
  id: 70,
  nombre: "Soft con Corderito Talle 3",
  codigo: "920",
  imagen: "soft-corderito-t3.jpg",
  descripcion: "Soft con corderito – Talle 3.",
  categoria: "Ropa",
  precio: 5738.50,
  cantidad: 1,
  talle: 3
},
{
  id: 71,
  nombre: "Soft con Corderito Talle 4",
  codigo: "921",
  imagen: "soft-corderito-t4.jpg",
  descripcion: "Soft con corderito – Talle 4.",
  categoria: "Ropa",
  precio: 6428.59,
  cantidad: 1,
  talle: 4,
  oferta: true   // 10+2
},
{
  id: 72,
  nombre: "Soft con Corderito Talle 5",
  codigo: "922",
  imagen: "soft-corderito-t5.jpg",
  descripcion: "Soft con corderito – Talle 5.",
  categoria: "Ropa",
  precio: 7360,
  cantidad: 1,
  talle: 5
},
{
  id: 73,
  nombre: "Soft con Corderito Talle 6",
  codigo: "923",
  imagen: "soft-corderito-t6.jpg",
  descripcion: "Soft con corderito – Talle 6.",
  categoria: "Ropa",
  precio: 7820,
  cantidad: 1,
  talle: 6
},
{
  id: 74,
  nombre: "Soft con Corderito Talle 7",
  codigo: "924",
  imagen: "soft-corderito-t7.jpg",
  descripcion: "Soft con corderito – Talle 7.",
  categoria: "Ropa",
  precio: 9085,
  cantidad: 1,
  talle: 7,
  oferta: true
},
{
  id: 75,
  nombre: "Soft con Corderito Talle 8",
  codigo: "925",
  imagen: "soft-corderito-t8.jpg",
  descripcion: "Soft con corderito – Talle 8.",
  categoria: "Ropa",
  precio: 10350,
  cantidad: 1,
  talle: 8
},
{
  id: 76,
  nombre: "Soft con Corderito Talle 9",
  codigo: "926",
  imagen: "soft-corderito-t9.jpg",
  descripcion: "Soft con corderito – Talle 9.",
  categoria: "Ropa",
  precio: 11960,
  cantidad: 1,
  talle: 9
},
{
  id: 77,
  nombre: "Soft con Corderito Talle 10",
  codigo: "927",
  imagen: "soft-corderito-t10.jpg",
  descripcion: "Soft con corderito – Talle 10.",
  categoria: "Ropa",
  precio: 13685,
  cantidad: 1,
  talle: 10,
  oferta: true
},
{
  id: 78,
  nombre: "Soft con Corderito Talle 11",
  codigo: "928",
  imagen: "soft-corderito-t11.jpg",
  descripcion: "Soft con corderito – Talle 11.",
  categoria: "Ropa",
  precio: 15410,
  cantidad: 1,
  talle: 11
},
{
  id: 79,
  nombre: "Soft con Corderito Talle 12",
  codigo: "929",
  imagen: "soft-corderito-t12.jpg",
  descripcion: "Soft con corderito – Talle 12.",
  categoria: "Ropa",
  precio: 17135,
  cantidad: 1,
  talle: 12,
  oferta: true
},
{
  id: 80,
  nombre: "Buzo Osito Talle XS",
  codigo: "906",
  imagen: "buzo-osito-xs.jpg",
  descripcion: "Buzo osito – Talle XS.",
  categoria: "Ropa",
  precio: 6550,
  cantidad: 1,
  talles: "XS"
},
{
  id: 81,
  nombre: "Buzo Osito Talle S",
  codigo: "763",
  imagen: "buzo-osito-s.jpg",
  descripcion: "Buzo osito – Talle S.",
  categoria: "Ropa",
  precio: 6658.50,
  cantidad: 1,
  talles: "S"
},
{
  id: 82,
  nombre: "Buzo Osito Talle M",
  codigo: "764",
  imagen: "buzo-osito-m.jpg",
  descripcion: "Buzo osito – Talle M.",
  categoria: "Ropa",
  precio: 6773.50,
  cantidad: 1,
  talles: "M"
},
{
  id: 83,
  nombre: "Buzo Osito Talle L",
  codigo: "765",
  imagen: "buzo-osito-l.jpg",
  descripcion: "Buzo osito – Talle L.",
  categoria: "Ropa",
  precio: 7290,
  cantidad: 1,
  talles: "L"
},
{
  id: 84,
  nombre: "Buzo Osito Talle XL",
  codigo: "766",
  imagen: "buzo-osito-xl.jpg",
  descripcion: "Buzo osito – Talle XL.",
  categoria: "Ropa",
  precio: 7890,
  cantidad: 1,
  talles: "XL"
},
{
  id: 85,
  nombre: "Buzo Osito Talle XXL",
  codigo: "781",
  imagen: "buzo-osito-xxl.jpg",
  descripcion: "Buzo osito – Talle XXL.",
  categoria: "Ropa",
  precio: 8990,
  cantidad: 1,
  talles: "XXL"
},
{
  id: 86,
  nombre: "Buzo Osito Talle XXXL",
  codigo: "908",
  imagen: "buzo-osito-xxxl.jpg",
  descripcion: "Buzo osito – Talle XXXL.",
  categoria: "Ropa",
  precio: 9545,
  cantidad: 1,
  talles: "XXXL"
},
{
  id: 87,
  nombre: "Friza con Piel Talle 1",
  codigo: "752",
  imagen: "friza-piel-t1.jpg",
  descripcion: "Friza con piel – Talle 1.",
  categoria: "Ropa",
  precio: 4132,
  cantidad: 1,
  talle: 1
},
{
  id: 88,
  nombre: "Friza con Piel Talle 2",
  codigo: "753",
  imagen: "friza-piel-t2.jpg",
  descripcion: "Friza con piel – Talle 2.",
  categoria: "Ropa",
  precio: 4455,
  cantidad: 1,
  talle: 2
},
{
  id: 89,
  nombre: "Friza con Piel Talle 3",
  codigo: "754",
  imagen: "friza-piel-t3.jpg",
  descripcion: "Friza con piel – Talle 3.",
  categoria: "Ropa",
  precio: 4780,
  cantidad: 1,
  talle: 3
},
{
  id: 90,
  nombre: "Friza con Piel Talle 4",
  codigo: "755",
  imagen: "friza-piel-t4.jpg",
  descripcion: "Friza con piel – Talle 4.",
  categoria: "Ropa",
  precio: 5103,
  cantidad: 1,
  talle: 4
},
{
  id: 91,
  nombre: "Friza con Piel Talle 5",
  codigo: "756",
  imagen: "friza-piel-t5.jpg",
  descripcion: "Friza con piel – Talle 5.",
  categoria: "Ropa",
  precio: 6210,
  cantidad: 1,
  talle: 5
},
{
  id: 92,
  nombre: "Friza con Piel Talle 6",
  codigo: "757",
  imagen: "friza-piel-t6.jpg",
  descripcion: "Friza con piel – Talle 6.",
  categoria: "Ropa",
  precio: 5752,
  cantidad: 1,
  talle: 6
},
{
  id: 93,
  nombre: "Friza con Piel Talle 7",
  codigo: "758",
  imagen: "friza-piel-t7.jpg",
  descripcion: "Friza con piel – Talle 7.",
  categoria: "Ropa",
  precio: 6075,
  cantidad: 1,
  talle: 7
},
{
  id: 94,
  nombre: "Buzo Conejito Talle XS",
  codigo: "903",
  imagen: "buzo-conejito-xs.jpg",
  descripcion: "Buzo conejito – Talle XS.",
  categoria: "Ropa",
  precio: 8700,
  cantidad: 1,
  talles: "XS"
},
{
  id: 95,
  nombre: "Buzo Conejito Talle S",
  codigo: "759",
  imagen: "buzo-conejito-s.jpg",
  descripcion: "Buzo conejito – Talle S.",
  categoria: "Ropa",
  precio: 9142.50,
  cantidad: 1,
  talles: "S"
},
{
  id: 96,
  nombre: "Buzo Conejito Talle M",
  codigo: "904",
  imagen: "buzo-conejito-m.jpg",
  descripcion: "Buzo conejito – Talle M.",
  categoria: "Ropa",
  precio: 9800,
  cantidad: 1,
  talles: "M"
},
{
  id: 97,
  nombre: "Buzo Conejito Talle L",
  codigo: "760",
  imagen: "buzo-conejito-l.jpg",
  descripcion: "Buzo conejito – Talle L.",
  categoria: "Ropa",
  precio: 10350,
  cantidad: 1,
  talles: "L"
},
{
  id: 98,
  nombre: "Buzo Conejito Talle XL",
  codigo: "761",
  imagen: "buzo-conejito-xl.jpg",
  descripcion: "Buzo conejito – Talle XL.",
  categoria: "Ropa",
  precio: 11385,
  cantidad: 1,
  talles: "XL"
},
{
  id: 99,
  nombre: "Buzo Conejito Talle XXL",
  codigo: "762",
  imagen: "buzo-conejito-xxl.jpg",
  descripcion: "Buzo conejito – Talle XXL.",
  categoria: "Ropa",
  precio: 12995,
  cantidad: 1,
  talles: "XXL"
},
{
  id: 100,
  nombre: "Buzo Conejito Talle XXXL",
  codigo: "905",
  imagen: "buzo-conejito-xxxl.jpg",
  descripcion: "Buzo conejito – Talle XXXL.",
  categoria: "Ropa",
  precio: 13755,
  cantidad: 1,
  talles: "XXXL"
},
{
  id: 101,
  nombre: "Buzo Deportivo Talle XS",
  codigo: "1001",
  imagen: "buzo-deportivo-xs.jpg",
  descripcion: "Buzo deportivo – Talle XS.",
  categoria: "Ropa",
  precio: 10200,
  cantidad: 1,
  talles: "XS"
},
{
  id: 102,
  nombre: "Buzo Deportivo Talle S",
  codigo: "1002",
  imagen: "buzo-deportivo-s.jpg",
  descripcion: "Buzo deportivo – Talle S.",
  categoria: "Ropa",
  precio: 11150,
  cantidad: 1,
  talles: "S"
},
{
  id: 103,
  nombre: "Buzo Deportivo Talle M",
  codigo: "1003",
  imagen: "buzo-deportivo-m.jpg",
  descripcion: "Buzo deportivo – Talle M.",
  categoria: "Ropa",
  precio: 12090,
  cantidad: 1,
  talles: "M"
},
{
  id: 104,
  nombre: "Buzo Deportivo Talle L",
  codigo: "1004",
  imagen: "buzo-deportivo-l.jpg",
  descripcion: "Buzo deportivo – Talle L.",
  categoria: "Ropa",
  precio: 13050,
  cantidad: 1,
  talles: "L"
},
{
  id: 105,
  nombre: "Buzo Deportivo Talle XL",
  codigo: "1005",
  imagen: "buzo-deportivo-xl.jpg",
  descripcion: "Buzo deportivo – Talle XL.",
  categoria: "Ropa",
  precio: 15500,
  cantidad: 1,
  talles: "XL"
},
{
  id: 106,
  nombre: "Buzo Deportivo Talle XXL",
  codigo: "1006",
  imagen: "buzo-deportivo-xxl.jpg",
  descripcion: "Buzo deportivo – Talle XXL.",
  categoria: "Ropa",
  precio: 16950,
  cantidad: 1,
  talles: "XXL"
},
{
  id: 107,
  nombre: "Buzo Deportivo Talle XXXL",
  codigo: "1007",
  imagen: "buzo-deportivo-xxxl.jpg",
  descripcion: "Buzo deportivo – Talle XXXL.",
  categoria: "Ropa",
  precio: 18450,
  cantidad: 1,
  talles: "XXXL"
},
{
  id: 108,
  nombre: "Buzo Superman Talle S",
  codigo: "2001",
  imagen: "buzo-superman-s.jpg",
  descripcion: "Buzo Superman – Talle S.",
  categoria: "Ropa",
  precio: 9690,
  cantidad: 1,
  talles: "S"
},
{
  id: 109,
  nombre: "Buzo Superman Talle M",
  codigo: "2002",
  imagen: "buzo-superman-m.jpg",
  descripcion: "Buzo Superman – Talle M.",
  categoria: "Ropa",
  precio: 10550,
  cantidad: 1,
  talles: "M"
},
{
  id: 110,
  nombre: "Buzo Superman Talle L",
  codigo: "2003",
  imagen: "buzo-superman-l.jpg",
  descripcion: "Buzo Superman – Talle L.",
  categoria: "Ropa",
  precio: 11066,
  cantidad: 1,
  talles: "L"
},
{
  id: 111,
  nombre: "Buzo Superman Talle XL",
  codigo: "2004",
  imagen: "buzo-superman-xl.jpg",
  descripcion: "Buzo Superman – Talle XL.",
  categoria: "Ropa",
  precio: 12280,
  cantidad: 1,
  talles: "XL"
},
{
  id: 112,
  nombre: "Buzo Superman Talle XXL",
  codigo: "2005",
  imagen: "buzo-superman-xxl.jpg",
  descripcion: "Buzo Superman – Talle XXL.",
  categoria: "Ropa",
  precio: 13690,
  cantidad: 1,
  talles: "XXL"
},
{
  id: 113,
  nombre: "Buzo Minions Talle S",
  codigo: "2006",
  imagen: "buzo-minions-s.jpg",
  descripcion: "Buzo Minions – Talle S.",
  categoria: "Ropa",
  precio: 9690,
  cantidad: 1,
  talles: "S"
},
{
  id: 114,
  nombre: "Buzo Minions Talle M",
  codigo: "2007",
  imagen: "buzo-minions-m.jpg",
  descripcion: "Buzo Minions – Talle M.",
  categoria: "Ropa",
  precio: 10550,
  cantidad: 1,
  talles: "M"
},
{
  id: 115,
  nombre: "Buzo Minions Talle L",
  codigo: "2008",
  imagen: "buzo-minions-l.jpg",
  descripcion: "Buzo Minions – Talle L.",
  categoria: "Ropa",
  precio: 11066,
  cantidad: 1,
  talles: "L"
},
{
  id: 116,
  nombre: "Buzo Minions Talle XL",
  codigo: "2009",
  imagen: "buzo-minions-xl.jpg",
  descripcion: "Buzo Minions – Talle XL.",
  categoria: "Ropa",
  precio: 12280,
  cantidad: 1,
  talles: "XL"
},
{
  id: 117,
  nombre: "Buzo Minions Talle XXL",
  codigo: "2010",
  imagen: "buzo-minions-xxl.jpg",
  descripcion: "Buzo Minions – Talle XXL.",
  categoria: "Ropa",
  precio: 13690,
  cantidad: 1,
  talles: "XXL"
},
{
  id: 118,
  nombre: "Buzo Mujer Maravilla Talle S",
  codigo: "2011",
  imagen: "buzo-mm-s.jpg",
  descripcion: "Buzo Mujer Maravilla – Talle S.",
  categoria: "Ropa",
  precio: 9690,
  cantidad: 1,
  talles: "S"
},
{
  id: 119,
  nombre: "Buzo Mujer Maravilla Talle M",
  codigo: "2012",
  imagen: "buzo-mm-m.jpg",
  descripcion: "Buzo Mujer Maravilla – Talle M.",
  categoria: "Ropa",
  precio: 10550,
  cantidad: 1,
  talles: "M"
},
{
  id: 120,
  nombre: "Buzo Mujer Maravilla Talle L",
  codigo: "2013",
  imagen: "buzo-mm-l.jpg",
  descripcion: "Buzo Mujer Maravilla – Talle L.",
  categoria: "Ropa",
  precio: 11066,
  cantidad: 1,
  talles: "L"
},
{
  id: 121,
  nombre: "Buzo Mujer Maravilla Talle XL",
  codigo: "2014",
  imagen: "buzo-mm-xl.jpg",
  descripcion: "Buzo Mujer Maravilla – Talle XL.",
  categoria: "Ropa",
  precio: 12280,
  cantidad: 1,
  talles: "XL"
},
{
  id: 122,
  nombre: "Buzo Mujer Maravilla Talle XXL",
  codigo: "2015",
  imagen: "buzo-mm-xxl.jpg",
  descripcion: "Buzo Mujer Maravilla – Talle XXL.",
  categoria: "Ropa",
  precio: 13690,
  cantidad: 1,
  talles: "XXL"
},
{
  id: 123,
  nombre: "Buzo Chapulín Talle S",
  codigo: "2016",
  imagen: "buzo-chapulin-s.jpg",
  descripcion: "Buzo Chapulín – Talle S.",
  categoria: "Ropa",
  precio: 9690,
  cantidad: 1,
  talles: "S"
},
{
  id: 124,
  nombre: "Buzo Chapulín Talle M",
  codigo: "2017",
  imagen: "buzo-chapulin-m.jpg",
  descripcion: "Buzo Chapulín – Talle M.",
  categoria: "Ropa",
  precio: 10550,
  cantidad: 1,
  talles: "M"
},
{
  id: 125,
  nombre: "Buzo Chapulín Talle L",
  codigo: "2018",
  imagen: "buzo-chapulin-l.jpg",
  descripcion: "Buzo Chapulín – Talle L.",
  categoria: "Ropa",
  precio: 11066,
  cantidad: 1,
  talles: "L"
},
{
  id: 126,
  nombre: "Buzo Chapulín Talle XL",
  codigo: "2019",
  imagen: "buzo-chapulin-xl.jpg",
  descripcion: "Buzo Chapulín – Talle XL.",
  categoria: "Ropa",
  precio: 12280,
  cantidad: 1,
  talles: "XL"
},
{
  id: 127,
  nombre: "Buzo Chapulín Talle XXL",
  codigo: "2020",
  imagen: "buzo-chapulin-xxl.jpg",
  descripcion: "Buzo Chapulín – Talle XXL.",
  categoria: "Ropa",
  precio: 13690,
  cantidad: 1,
  talles: "XXL"
},
{
  id: 128,
  nombre: "Buzo Capitán América Talle S",
  codigo: "2021",
  imagen: "buzo-capitan-s.jpg",
  descripcion: "Buzo Capitán América – Talle S.",
  categoria: "Ropa",
  precio: 9690,
  cantidad: 1,
  talles: "S"
},
{
  id: 129,
  nombre: "Buzo Capitán América Talle M",
  codigo: "2022",
  imagen: "buzo-capitan-m.jpg",
  descripcion: "Buzo Capitán América – Talle M.",
  categoria: "Ropa",
  precio: 10550,
  cantidad: 1,
  talles: "M"
},
{
  id: 130,
  nombre: "Buzo Capitán América Talle L",
  codigo: "2023",
  imagen: "buzo-capitan-l.jpg",
  descripcion: "Buzo Capitán América – Talle L.",
  categoria: "Ropa",
  precio: 11066,
  cantidad: 1,
  talles: "L"
},
{
  id: 131,
  nombre: "Buzo Capitán América Talle XL",
  codigo: "2024",
  imagen: "buzo-capitan-xl.jpg",
  descripcion: "Buzo Capitán América – Talle XL.",
  categoria: "Ropa",
  precio: 12280,
  cantidad: 1,
  talles: "XL"
},
{
  id: 132,
  nombre: "Buzo Capitán América Talle XXL",
  codigo: "2025",
  imagen: "buzo-capitan-xxl.jpg",
  descripcion: "Buzo Capitán América – Talle XXL.",
  categoria: "Ropa",
  precio: 13690,
  cantidad: 1,
  talles: "XXL"
},
{
  id: 133,
  nombre: "Buzo Ranita Talle XS",
  codigo: "2026",
  imagen: "buzo-ranita-xs.jpg",
  descripcion: "Buzo ranita – Talle XS.",
  categoria: "Ropa",
  precio: 7620,
  cantidad: 1,
  talles: "XS"
},
{
  id: 134,
  nombre: "Buzo Ranita Talle S",
  codigo: "2027",
  imagen: "buzo-ranita-s.jpg",
  descripcion: "Buzo ranita – Talle S.",
  categoria: "Ropa",
  precio: 8820,
  cantidad: 1,
  talles: "S"
},
{
  id: 135,
  nombre: "Buzo Ranita Talle L",
  codigo: "2028",
  imagen: "buzo-ranita-l.jpg",
  descripcion: "Buzo ranita – Talle L.",
  categoria: "Ropa",
  precio: 10053,
  cantidad: 1,
  talles: "L"
},
{
  id: 136,
  nombre: "Buzo Ranita Talle XL",
  codigo: "2029",
  imagen: "buzo-ranita-xl.jpg",
  descripcion: "Buzo ranita – Talle XL.",
  categoria: "Ropa",
  precio: 11150,
  cantidad: 1,
  talles: "XL"
},
{
  id: 137,
  nombre: "Buzo Ranita Talle XXL",
  codigo: "2030",
  imagen: "buzo-ranita-xxl.jpg",
  descripcion: "Buzo ranita – Talle XXL.",
  categoria: "Ropa",
  precio: 12450,
  cantidad: 1,
  talles: "XXL"
},
{
  id: 138,
  nombre: "Buzo Ranita Talle XXXL",
  codigo: "2031",
  imagen: "buzo-ranita-xxxl.jpg",
  descripcion: "Buzo ranita – Talle XXXL.",
  categoria: "Ropa",
  precio: 13750,
  cantidad: 1,
  talles: "XXXL"
},
{
  id: 139,
  nombre: "Antidesgarro Premium Large",
  codigo: "3001",
  imagen: "antidesgarro-large.jpg",
  descripcion: "Cama antidesgarro premium tamaño Large (65x90x10 cm).",
  categoria: "Camas",
  precio: 31050,
  cantidad: 1,
  talles: "Large"
},
{
  id: 140,
  nombre: "Antidesgarro Premium Medium",
  codigo: "3002",
  imagen: "antidesgarro-medium.jpg",
  descripcion: "Cama antidesgarro premium tamaño Medium (55x80x10 cm).",
  categoria: "Camas",
  precio: 22550,
  cantidad: 1,
  talles: "Medium"
},
{
  id: 141,
  nombre: "Antidesgarro Premium Small",
  codigo: "3003",
  imagen: "antidesgarro-small.jpg",
  descripcion: "Cama antidesgarro premium tamaño Small.",
  categoria: "Camas",
  precio: 19000,
  cantidad: 1,
  talles: "Small"
},
{
  id: 142,
  nombre: "Cama Tela Premium Small",
  codigo: "3004",
  imagen: "cama-tela-premium-small.jpg",
  descripcion: "Cama de tela premium tamaño Small (45x55x10 cm).",
  categoria: "Camas",
  precio: 17230,
  cantidad: 1,
  talles: "Small"
},
{
  id: 143,
  nombre: "Cama Tela Premium Medium",
  codigo: "3005",
  imagen: "cama-tela-premium-medium.jpg",
  descripcion: "Cama de tela premium tamaño Medium (55x80x10 cm).",
  categoria: "Camas",
  precio: 24000,
  cantidad: 1,
  talles: "Medium"
},
{
  id: 144,
  nombre: "Cama Tela Premium Large",
  codigo: "3006",
  imagen: "cama-tela-premium-large.jpg",
  descripcion: "Cama de tela premium tamaño Large (65x90x10 cm).",
  categoria: "Camas",
  precio: 29450,
  cantidad: 1,
  talles: "Large"
},
{
  id: 145,
  nombre: "Nido con Polar Soft",
  codigo: "4101",
  imagen: "nido-polar-soft.jpg",
  descripcion: "Nido con interior de polar soft.",
  categoria: "Camas",
  precio: 21590,
  cantidad: 1,
  talles: "Único"
},
{
  id: 146,
  nombre: "Moisés Soft",
  codigo: "4102",
  imagen: "moises-soft.jpg",
  descripcion: "Moisés soft con funda lavable. Brilla en la oscuridad.",
  categoria: "Camas",
  precio: 26750,
  cantidad: 1,
  talles: "Único"
},
{
  id: 147,
  nombre: "Nido Grande",
  codigo: "4103",
  imagen: "nido-grande.jpg",
  descripcion: "Nido tamaño Grande.",
  categoria: "Camas",
  precio: 21590,
  cantidad: 1,
  talles: "Grande"
},
{
  id: 148,
  nombre: "Moisés Small",
  codigo: "4104",
  imagen: "moises-small.jpg",
  descripcion: "Moisés tamaño Small (45 cm).",
  categoria: "Camas",
  precio: 15900,
  cantidad: 1,
  talles: "Small"
},
{
  id: 149,
  nombre: "Moisés Medium",
  codigo: "4105",
  imagen: "moises-medium.jpg",
  descripcion: "Moisés tamaño Medium (55 cm).",
  categoria: "Camas",
  precio: 17200,
  cantidad: 1,
  talles: "Medium"
},
{
  id: 150,
  nombre: "Moisés Large",
  codigo: "4106",
  imagen: "moises-large.jpg",
  descripcion: "Moisés tamaño Large (65 cm).",
  categoria: "Camas",
  precio: 18650,
  cantidad: 1,
  talles: "Large"
},
{
  id: 151,
  nombre: "Nido con Corderito",
  codigo: "4107",
  imagen: "nido-corderito.jpg",
  descripcion: "Nido con interior de corderito.",
  categoria: "Camas",
  precio: 22450,
  cantidad: 1,
  talles: "Único"
},
{
  id: 152,
  nombre: "Nidito Desmontable L",
  codigo: "4108",
  imagen: "nidito-desmontable-l.jpg",
  descripcion: "Nidito desmontable tamaño L (70 cm).",
  categoria: "Camas",
  precio: 36960,
  cantidad: 1,
  talles: "L"
},
{
  id: 153,
  nombre: "Nidito Desmontable XL",
  codigo: "4109",
  imagen: "nidito-desmontable-xl.jpg",
  descripcion: "Nidito desmontable tamaño XL (80 cm).",
  categoria: "Camas",
  precio: 39990,
  cantidad: 1,
  talles: "XL"
},
{
  id: 154,
  nombre: "Colchoneta Placa Small",
  codigo: "4110",
  imagen: "colchoneta-placa-small.jpg",
  descripcion: "Colchoneta placa Small (70×50×8 cm).",
  categoria: "Camas",
  precio: 25900,
  cantidad: 1,
  talles: "Small"
},
{
  id: 155,
  nombre: "Colchoneta Placa Medium",
  codigo: "4111",
  imagen: "colchoneta-placa-medium.jpg",
  descripcion: "Colchoneta placa Medium (90×70×8 cm).",
  categoria: "Camas",
  precio: 32150,
  cantidad: 1,
  talles: "Medium"
},
{
  id: 156,
  nombre: "Colchoneta Placa Large",
  codigo: "4112",
  imagen: "colchoneta-placa-large.jpg",
  descripcion: "Colchoneta placa Large (120×80×8 cm).",
  categoria: "Camas",
  precio: 40350,
  cantidad: 1,
  talles: "Large"
},
{
  id: 157,
  nombre: "Colchoneta Tela Mullida Nº1",
  codigo: "4113",
  imagen: "colchoneta-mullida-1.jpg",
  descripcion: "Colchoneta tela mullida Nº1 (50×55 cm).",
  categoria: "Camas",
  precio: 9320,
  cantidad: 1,
  
},
{
  id: 158,
  nombre: "Colchoneta Tela Mullida Nº2",
  codigo: "4114",
  imagen: "colchoneta-mullida-2.jpg",
  descripcion: "Colchoneta tela mullida Nº2 (55×60 cm).",
  categoria: "Camas",
  precio: 13222,
  cantidad: 1,
},
{
  id: 159,
  nombre: "Colchoneta Tela Mullida Nº3",
  codigo: "4115",
  imagen: "colchoneta-mullida-3.jpg",
  descripcion: "Colchoneta tela mullida Nº3 (60×80 cm).",
  categoria: "Camas",
  precio: 14650,
  cantidad: 1,
},
{
  id: 160,
  nombre: "Colchoneta Tela Mullida Nº4",
  codigo: "4116",
  imagen: "colchoneta-mullida-4.jpg",
  descripcion: "Colchoneta tela mullida Nº4 (70×90 cm).",
  categoria: "Camas",
  precio: 19450,
  cantidad: 1,
},
{
  id: 161,
  nombre: "Colchoneta Tela Mullida Nº5",
  codigo: "4117",
  imagen: "colchoneta-mullida-5.jpg",
  descripcion: "Colchoneta tela mullida Nº5 (90×110 cm).",
  categoria: "Camas",
  precio: 27490,
  cantidad: 1,

},
{
  id: 162,
  nombre: "Colchoneta Antidesgarro Terzi",
  codigo: "4118",
  imagen: "colchoneta-antidesgarro-terzi.jpg",
  descripcion: "Colchoneta antidesgarro Terzi (80×100 cm).",
  categoria: "Camas",
  precio: 29900,
  cantidad: 1,
  talles: "Único"
},
{
  id: 163,
  nombre: "Colchoneta Antidesgarro Terzi",
  codigo: "—",
  imagen: "colchoneta-antidesgarro-terzi-100x140.jpg",
  descripcion: "Colchoneta antidesgarro Terzi (100×140 cm).",
  categoria: "Camas",
  precio: 49500,
  cantidad: 1,
  talles: "Único"
},
{
  id: 164,
  nombre: "Jaula Transportadora 52×32",
  codigo: "13077",
  imagen: "jaula-transportadora-52x32.jpg",
  descripcion: "Jaula transportadora 52×32 (colores surtidos).",
  categoria: "Transporte",
  precio: 35990,
  cantidad: 1,
  talles: "Único"
},
{
  id: 165,
  nombre: "Bolso Transportadora Viajero",
  codigo: "703716",
  imagen: "bolso-transportadora-viajero.jpg",
  descripcion: "Bolso transportador viajero ventilado.",
  categoria: "Transporte",
  precio: 41660,
  cantidad: 1,
  talles: "Único"
},
{
  id: 166,
  nombre: "Mochila Transportadora",
  codigo: "MTS",
  imagen: "mochila-transportadora-s.jpg",
  descripcion: "Mochila transportadora talle S.",
  categoria: "Transporte",
  precio: 19500,
  cantidad: 1,
  talles: "S"
},
{
  id: 167,
  nombre: "Mochila Transportadora",
  codigo: "MTM",
  imagen: "mochila-transportadora-m.jpg",
  descripcion: "Mochila transportadora talle M.",
  categoria: "Transporte",
  precio: 2190,
  cantidad: 1,
  talles: "M"
},
{
  id: 168,
  nombre: "Mochila Transportadora",
  codigo: "MTL",
  imagen: "mochila-transportadora-l.jpg",
  descripcion: "Mochila transportadora talle L.",
  categoria: "Transporte",
  precio: 20900,
  cantidad: 1,
  talles: "L"
},
{
  id: 169,
  nombre: "Collar Polipropileno Nº0",
  codigo: "—",
  imagen: "collar-polipropileno-0.jpg",
  descripcion: "Collar polipropileno Nº0 (30 cm - colores varios).",
  categoria: "Collares",
  precio: 950,
  cantidad: 1,
  
},
{
  id: 170,
  nombre: "Collar Polipropileno Nº1",
  codigo: "—",
  imagen: "collar-polipropileno-1.jpg",
  descripcion: "Collar polipropileno Nº1 (30 cm - colores varios).",
  categoria: "Collares",
  precio: 1300,
  cantidad: 1,

},
{
  id: 171,
  nombre: "Collar Polipropileno Nº2",
  codigo: "—",
  imagen: "collar-polipropileno-2.jpg",
  descripcion: "Collar polipropileno Nº2 (30 cm - colores varios).",
  categoria: "Collares",
  precio: 1400,
  cantidad: 1,
  
},
{
  id: 172,
  nombre: "Collar Polipropileno Nº3",
  codigo: "—",
  imagen: "collar-polipropileno-3.jpg",
  descripcion: "Collar polipropileno Nº3 (30 cm - colores varios).",
  categoria: "Collares",
  precio: 1990,
  cantidad: 1,

},
{
  id: 173,
  nombre: "Collar Polipropileno Nº4",
  codigo: "—",
  imagen: "collar-polipropileno-4.jpg",
  descripcion: "Collar polipropileno Nº4 (30 cm - colores varios).",
  categoria: "Collares",
  precio: 2150,
  cantidad: 1,
  
},
{
  id: 174,
  nombre: "Collar Polipropileno Nº5",
  codigo: "—",
  imagen: "collar-polipropileno-5.jpg",
  descripcion: "Collar polipropileno Nº5 (30 cm - colores varios).",
  categoria: "Collares",
  precio: 2300,
  cantidad: 1,
  
},
{
  id: 175,
  nombre: "Collar NATO",
  codigo: "—",
  imagen: "collar-nato-30mm.jpg",
  descripcion: "Collar NATO 30 mm.",
  categoria: "Collares",
  precio: 3510,
  cantidad: 1,
},
{
  id: 176,
  nombre: "Collar NATO",
  codigo: "—",
  imagen: "collar-nato-40mm.jpg",
  descripcion: "Collar NATO 40 mm.",
  categoria: "Collares",
  precio: 6900,
  cantidad: 1,
  
},
{
  id: 177,
  nombre: "Collar NATO",
  codigo: "—",
  imagen: "collar-nato-60mm.jpg",
  descripcion: "Collar NATO 60 mm.",
  categoria: "Collares",
  precio: 9750,
  cantidad: 1,

},
{
  id: 178,
  nombre: "Correa NATO",
  codigo: "—",
  imagen: "correa-nato-30mm.jpg",
  descripcion: "Correa NATO 30 mm.",
  categoria: "Correas",
  precio: 4970,
  cantidad: 1,
  
},
{
  id: 179,
  nombre: "Correa NATO",
  codigo: "—",
  imagen: "correa-nato-40mm.jpg",
  descripcion: "Correa NATO 40 mm.",
  categoria: "Correas",
  precio: 5700,
  cantidad: 1,

},
{
  id: 180,
  nombre: "Extensible con Círculo",
  codigo: "520109",
  imagen: "extensible-circulo-5m.jpg",
  descripcion: "Extensible retráctil con círculo (5 metros).",
  categoria: "Paseo",
  precio: 6750,
  cantidad: 1,
  
},
{
  id: 181,
  nombre: "Collar Reflectivo 60 cm",
  codigo: "228072",
  imagen: "collar-reflectivo-60.jpg",
  descripcion: "Collar reflectivo (60 cm).",
  categoria: "Collares",
  precio: 4100,
  cantidad: 1,
  
},
{
  id: 182,
  nombre: "Collar Reflectivo 70 cm",
  codigo: "228089",
  imagen: "collar-reflectivo-70.jpg",
  descripcion: "Collar reflectivo (70 cm).",
  categoria: "Collares",
  precio: 5500,
  cantidad: 1,
  talles: "70 cm"
},
{
  id: 183,
  nombre: "Correa Polipropileno Nº1",
  codigo: "0010",
  imagen: "correa-polipropileno-1.jpg",
  descripcion: "Correa de polipropileno Nº1 (1 metro) colores varios.",
  categoria: "Paseo",
  precio: 3130,
  cantidad: 1,
  talles: "1 m"
},
{
  id: 184,
  nombre: "Correa Polipropileno Nº2",
  codigo: "0011",
  imagen: "correa-polipropileno-2.jpg",
  descripcion: "Correa de polipropileno Nº2 (1 metro) colores varios.",
  categoria: "Paseo",
  precio: 3470,
  cantidad: 1,
  talles: "1 m"
},
{
  id: 185,
  nombre: "Correa Polipropileno Nº3",
  codigo: "0012",
  imagen: "correa-polipropileno-3.jpg",
  descripcion: "Correa de polipropileno Nº3 (0,80 metro) colores varios.",
  categoria: "Paseo",
  precio: 3800,
  cantidad: 1,
  talles: "0,80 m"
},
{
  id: 186,
  nombre: "Correa Polipropileno Nº4",
  codigo: "0013",
  imagen: "correa-polipropileno-4.jpg",
  descripcion: "Correa de polipropileno Nº4 (1,1 metro) colores varios.",
  categoria: "Paseo",
  precio: 4790,
  cantidad: 1,
  talles: "1,1 m"
},
{
  id: 187,
  nombre: "Correa 3 Metros",
  codigo: "219205",
  imagen: "correa-3m.jpg",
  descripcion: "Correa de paseo de 3 metros.",
  categoria: "Paseo",
  precio: 2990,
  cantidad: 1,
  talles: "3 m"
},
{
  id: 188,
  nombre: "Correa 5 Metros",
  codigo: "219212",
  imagen: "correa-5m.jpg",
  descripcion: "Correa de paseo de 5 metros.",
  categoria: "Paseo",
  precio: 3700,
  cantidad: 1,
  talles: "5 m"
},
{
  id: 189,
  nombre: "Correa 7 Metros",
  codigo: "219229",
  imagen: "correa-7m.jpg",
  descripcion: "Correa de paseo de 7 metros.",
  categoria: "Paseo",
  precio: 4400,
  cantidad: 1,
  talles: "7 m"
},
{
  id: 190,
  nombre: "Correa 10 Metros",
  codigo: "511555",
  imagen: "correa-10m.jpg",
  descripcion: "Correa de paseo de 10 metros.",
  categoria: "Paseo",
  precio: 5600,
  cantidad: 1,
  talles: "10 m"
},
{
  id: 191,
  nombre: "Collar Pañuelo para Gato",
  codigo: "008230",
  imagen: "collar-panuelo-gato-12u.jpg",
  descripcion: "Collar pañuelo para gato (pack x12 unidades).",
  categoria: "Collares",
  precio: 11450,
  cantidad: 1,
  talles: "Único"
},
{
  id: 192,
  nombre: "Collar Elastizado",
  codigo: "002177",
  imagen: "collar-elastizado-12u.jpg",
  descripcion: "Collar elastizado (pack x12 unidades).",
  categoria: "Collares",
  precio: 11200,
  cantidad: 1,
  talles: "Único"
},
{
  id: 193,
  nombre: "Collar Camuflado",
  codigo: "719210",
  imagen: "collar-camuflado-12u.jpg",
  descripcion: "Collar camuflado (pack x12 unidades).",
  categoria: "Collares",
  precio: 11450,
  cantidad: 1,
  talles: "Único"
},
{
  id: 194,
  nombre: "Collar con Animal Print Dorado",
  codigo: "003297",
  imagen: "collar-animal-print-dorado-12u.jpg",
  descripcion: "Collar con animal print dorado (pack x12 unidades).",
  categoria: "Collares",
  precio: 10990,
  cantidad: 1,
  talles: "Único"
},
{
  id: 195,
  nombre: "Collar Fosforescente",
  codigo: "417225",
  imagen: "collar-fosforescente-4u.jpg",
  descripcion: "Collar fosforescente (pack x4 unidades).",
  categoria: "Collares",
  precio: 4900,
  cantidad: 1,
  talles: "Único"
},
{
  id: 196,
  nombre: "Collar para Gato con Animal Print",
  codigo: "315203",
  imagen: "collar-gato-animal-print-4u.jpg",
  descripcion: "Collar para gato con animal print (pack x4 unidades).",
  categoria: "Collares",
  precio: 4200,
  cantidad: 1,
  talles: "Único"
},
{
  id: 197,
  nombre: "Collar para Gato Liso",
  codigo: "312171",
  imagen: "collar-gato-liso-12u.jpg",
  descripcion: "Collar para gato liso (pack x12 unidades).",
  categoria: "Collares",
  precio: 11100,
  cantidad: 1,
  talles: "Único"
},
{
  id: 198,
  nombre: "Collar con Moño con Strass",
  codigo: "312164",
  imagen: "collar-mono-strass-12u.jpg",
  descripcion: "Collar con moño y strass (pack x12 unidades).",
  categoria: "Collares",
  precio: 14000,
  cantidad: 1,
  talles: "Único"
},
{
  id: 199,
  nombre: "Collar con Tachas de Silicona",
  codigo: "719203",
  imagen: "collar-tachas-silicona.jpg",
  descripcion: "Collar con tachas de silicona (pack x12 unidades).",
  categoria: "Collares",
  precio: 11450,
  cantidad: 1,
  talles: "Único"
},
{
  id: 200,
  nombre: "Collar con 10 Strass",
  codigo: "008360",
  imagen: "collar-10-strass.jpg",
  descripcion: "Collar con 10 strass (pack x12 unidades).",
  categoria: "Collares",
  precio: 14000,
  cantidad: 1,
  talles: "Único"
},
{
  id: 201,
  nombre: "Collar Fluor",
  codigo: "729537",
  imagen: "collar-fluor.jpg",
  descripcion: "Collar fluor (pack x12 unidades).",
  categoria: "Collares",
  precio: 9350,
  cantidad: 1,
  talles: "Único"
},
{
  id: 202,
  nombre: "Collar Perro Bicolor",
  codigo: "914674",
  imagen: "collar-perro-bicolor.jpg",
  descripcion: "Collar para perro bicolor (pack x12 unidades).",
  categoria: "Collares",
  precio: 9600,
  cantidad: 1,
  talles: "Único"
},
{
  id: 203,
  nombre: "Collar de Goma Transparente con Hueso",
  codigo: "325325",
  imagen: "collar-goma-transparente-hueso.jpg",
  descripcion: "Collar de goma transparente con dije de hueso (pack x12 unidades).",
  categoria: "Collares",
  precio: 9350,
  cantidad: 1,
  talles: "Único"
},
{
  id: 204,
  nombre: "Collar Pañuelo Estampado",
  codigo: "110910",
  imagen: "collar-panuelo-estampado.jpg",
  descripcion: "Collar pañuelo con dibujo estampado (pack x12 unidades).",
  categoria: "Collares",
  precio: 15490,
  cantidad: 1,
  talles: "Único"
},
{
  id: 205,
  nombre: "Collar con 2 Pescados",
  codigo: "003303",
  imagen: "collar-2-pescados.jpg",
  descripcion: "Collar con diseño de pescados (pack x12 unidades).",
  categoria: "Collares",
  precio: 13500,
  cantidad: 1,
  talles: "Único"
},
{
  id: 206,
  nombre: "Collar Ajustable",
  codigo: "402500",
  imagen: "collar-ajustable.jpg",
  descripcion: "Collar ajustable colores varios (pack x12 unidades).",
  categoria: "Collares",
  precio: 11450,
  cantidad: 1,
  talles: "Ajustable"
},
{
  id: 207,
  nombre: "Collar con Strass",
  codigo: "402302",
  imagen: "collar-strass.jpg",
  descripcion: "Collar con strass (pack x12 unidades).",
  categoria: "Collares",
  precio: 14000,
  cantidad: 1,
  talles: "Único"
},
{
  id: 208,
  nombre: "Collar de Gato Estampado",
  codigo: "86013",
  imagen: "collar-gato-estampado.jpg",
  descripcion: "Collares para gato estampados (pack x12 unidades).",
  categoria: "Gatos",
  precio: 9700,
  cantidad: 1,
  talles: "Único"
},
{
  id: 209,
  nombre: "Pretal para Gato con Alas",
  codigo: "003174",
  imagen: "pretal-gato-alas.jpg",
  descripcion: "Pretal para gato con alas – colores varios.",
  categoria: "Gatos",
  precio: 3490,
  cantidad: 1,
  talles: "Único"
},
{
  id: 210,
  nombre: "Pretal para Gato con Correa",
  codigo: "13075",
  imagen: "pretal-gato-correa.jpg",
  descripcion: "Pretal para gato con correa – colores varios.",
  categoria: "Gatos",
  precio: 1790,
  cantidad: 1,
  talles: "Único"
},
{
  id: 211,
  nombre: "Cardina Azul Chica",
  codigo: "001200",
  imagen: "cardina-azul-chica.jpg",
  descripcion: "Cardina azul tamaño chico.",
  categoria: "Cepillos",
  precio: 2150,
  cantidad: 1,
  talles: "Chica"
},
{
  id: 212,
  nombre: "Cardina Azul Mediana",
  codigo: "001217",
  imagen: "cardina-azul-mediana.jpg",
  descripcion: "Cardina azul tamaño mediano.",
  categoria: "Cepillos",
  precio: 3290,
  cantidad: 1,
  talles: "Mediana"
},
{
  id: 213,
  nombre: "Cardina Azul Grande",
  codigo: "001224",
  imagen: "cardina-azul-grande.jpg",
  descripcion: "Cardina azul tamaño grande.",
  categoria: "Cepillos",
  precio: 4050,
  cantidad: 1,
  talles: "Grande"
},
{
  id: 214,
  nombre: "Cardina Color Chica",
  codigo: "002832",
  imagen: "cardina-color-chica.jpg",
  descripcion: "Cardina color tamaño chico.",
  categoria: "Cepillos",
  precio: 2400,
  cantidad: 1,
  talles: "Chica"
},
{
  id: 215,
  nombre: "Cardina Color Grande",
  codigo: "002885",
  imagen: "cardina-color-grande.jpg",
  descripcion: "Cardina color tamaño grande.",
  categoria: "Cepillos",
  precio: 2900,
  cantidad: 1,
  talles: "Grande"
},
{
  id: 216,
  nombre: "Cepillo Neumático Mediano",
  codigo: "001262",
  imagen: "cepillo-neumatico-mediano.jpg",
  descripcion: "Cepillo neumático tamaño mediano.",
  categoria: "Cepillos",
  precio: 4690,
  cantidad: 1,
  talles: "Mediano"
},
{
  id: 217,
  nombre: "Cepillo Neumático Grande",
  codigo: "001279",
  imagen: "cepillo-neumatico-grande.jpg",
  descripcion: "Cepillo neumático tamaño grande.",
  categoria: "Cepillos",
  precio: 5200,
  cantidad: 1,
  talles: "Grande"
},
{
  id: 218,
  nombre: "Cepillo Automático Rosa/Gris/Azul",
  codigo: "003082",
  imagen: "cepillo-automatico.jpg",
  descripcion: "Cepillo automático en colores rosa, gris y azul.",
  categoria: "Cepillos",
  precio: 7660,
  cantidad: 1,
  talles: "-"
},
{
  id: 219,
  nombre: "Cepillo con Botón Chico",
  codigo: "1590",
  imagen: "cepillo-boton-chico.jpg",
  descripcion: "Cepillo con botón tamaño chico.",
  categoria: "Cepillos",
  precio: 3290,
  cantidad: 1,
  talles: "Chico"
},
{
  id: 220,
  nombre: "Cepillo con Botón Grande",
  codigo: "001606",
  imagen: "cepillo-boton-grande.jpg",
  descripcion: "Cepillo con botón tamaño grande.",
  categoria: "Cepillos",
  precio: 4750,
  cantidad: 1,
  talles: "Grande"
},
{
  id: 221,
  nombre: "Cardina Mascotas Talle M",
  codigo: "13124",
  imagen: "cardina-mascotas-m.jpg",
  descripcion: "Cardina para mascotas, talle M.",
  categoria: "Cepillos",
  precio: 13300,
  cantidad: 1,
  talles: "M"
},
{
  id: 222,
  nombre: "Cardina Mascotas Talle XL",
  codigo: "13125",
  imagen: "cardina-mascotas-xl.jpg",
  descripcion: "Cardina para mascotas, talle XL.",
  categoria: "Cepillos",
  precio: 14000,
  cantidad: 1,
  talles: "XL"
},
{
  id: 223,
  nombre: "Cardina Small",
  codigo: "13067",
  imagen: "cardina-small.jpg",
  descripcion: "Cardina tamaño small.",
  categoria: "Cepillos",
  precio: 1250,
  cantidad: 1,
  talles: "S"
},
{
  id: 224,
  nombre: "Cardina Medium",
  codigo: "13068",
  imagen: "cardina-medium.jpg",
  descripcion: "Cardina tamaño medium.",
  categoria: "Cepillos",
  precio: 1390,
  cantidad: 1,
  talles: "M"
},
{
  id: 225,
  nombre: "Cardina Large",
  codigo: "13069",
  imagen: "cardina-large.jpg",
  descripcion: "Cardina tamaño large.",
  categoria: "Cepillos",
  precio: 2100,
  cantidad: 1,
  talles: "L"
},
{
  id: 226,
  nombre: "Cardina Extra Large",
  codigo: "13070",
  imagen: "cardina-xl.jpg",
  descripcion: "Cardina extra large.",
  categoria: "Cepillos",
  precio: 3050,
  cantidad: 1,
  talles: "XL"
},
{
  id: 227,
  nombre: "Cardina Mascotas Amarillo 19x12.5",
  codigo: "13126AM",
  imagen: "cardina-mascotas-amarillo.jpg",
  descripcion: "Cardina para mascotas de 19 x 12.5 cm, color amarillo.",
  categoria: "Cepillos",
  precio: 13250,
  cantidad: 1,
  talles: "Único"
},
{
  id: 228,
  nombre: "Sacapelusa a Vapor con Manija",
  codigo: "-",
  imagen: "sacapelusa-vapor.jpg",
  descripcion: "Sacapelusa a vapor con manija.",
  categoria: "Sacapelusas",
  precio: 7990,
  cantidad: 1,
  talles: "Único"
},
{
  id: 229,
  nombre: "Cardina Silicona Azul 17x8",
  codigo: "13127AZ",
  imagen: "cardina-silicona-azul.jpg",
  descripcion: "Cardina de silicona 17 x 8 cm, color azul.",
  categoria: "Cepillos",
  precio: 6250,
  cantidad: 1,
  talles: "Único"
},
{
  id: 230,
  nombre: "Cardina Silicona Rosa 17x8",
  codigo: "13127RS",
  imagen: "cardina-silicona-rosa.jpg",
  descripcion: "Cardina de silicona 17 x 8 cm, color rosa.",
  categoria: "Cepillos",
  precio: 6250,
  cantidad: 1,
  talles: "Único"
},
{
  id: 231,
  nombre: "Cardina Alambre Azul 14x8",
  codigo: "13128AZ",
  imagen: "cardina-alambre-azul.jpg",
  descripcion: "Cardina de alambre 14 x 8 cm, color azul.",
  categoria: "Cepillos",
  precio: 5450,
  cantidad: 1,
  talles: "Único"
},
{
  id: 232,
  nombre: "Cardina Alambre Rosa 14x8",
  codigo: "13128RS",
  imagen: "cardina-alambre-rosa.jpg",
  descripcion: "Cardina de alambre 14 x 8 cm, color rosa.",
  categoria: "Cepillos",
  precio: 5450,
  cantidad: 1,
  talles: "Único"
},
{
  id: 233,
  nombre: "Furminator Small",
  codigo: "13014",
  imagen: "furminator-small.jpg",
  descripcion: "Furminator tamaño small.",
  categoria: "Cepillos",
  precio: 9690,
  cantidad: 1,
  talles: "Small"
},
{
  id: 234,
  nombre: "Furminator Large",
  codigo: "13015",
  imagen: "furminator-large.jpg",
  descripcion: "Furminator tamaño large.",
  categoria: "Cepillos",
  precio: 11050,
  cantidad: 1,
  talles: "Large"
},
{
  id: 235,
  nombre: "Cepillo Doble Chico",
  codigo: "13129",
  imagen: "cepillo-doble-chico.jpg",
  descripcion: "Cepillo doble chico – colores surtidos.",
  categoria: "Cepillos",
  precio: 4350,
  cantidad: 1,
  talles: "Chico"
},
{
  id: 236,
  nombre: "Cepillo Doble Grande",
  codigo: "13130",
  imagen: "cepillo-doble-grande.jpg",
  descripcion: "Cepillo doble grande – colores surtidos.",
  categoria: "Cepillos",
  precio: 4799,
  cantidad: 1,
  talles: "Grande"
},
{
  id: 237,
  nombre: "Cepillo Doble Mascota",
  codigo: "032566",
  imagen: "cepillo-doble-mascota.jpg",
  descripcion: "Cepillo doble para mascotas (22 × 6,5 cm).",
  categoria: "Cepillos",
  precio: 6000,
  cantidad: 1,
  talles: "Único"
},
{
  id: 238,
  nombre: "Peine Saca Nudos Rosado",
  codigo: "13132RS",
  imagen: "peine-saca-nudos-rosado.jpg",
  descripcion: "Peine saca nudos color rosado.",
  categoria: "Cepillos",
  precio: 10120,
  cantidad: 1,
  talles: "Único"
},
{
  id: 239,
  nombre: "Peine Saca Nudos Celeste",
  codigo: "13132CE",
  imagen: "peine-saca-nudos-celeste.jpg",
  descripcion: "Peine saca nudos color celeste.",
  categoria: "Cepillos",
  precio: 10120,
  cantidad: 1,
  talles: "Único"
},
{
  id: 240,
  nombre: "Peine P/Saca Nudos",
  codigo: "001477",
  imagen: "peine-psaca-nudos.jpg",
  descripcion: "Peine para sacar nudos.",
  categoria: "Cepillos",
  precio: 4500,
  cantidad: 1,
  talles: "Único"
},
{
  id: 241,
  nombre: "Manopla Cardina de Silicona",
  codigo: "13066RO",
  imagen: "manopla-cardina-silicona.jpg",
  descripcion: "Manopla cardina de silicona.",
  categoria: "Cepillos",
  precio: 1200,
  cantidad: 1,
  talles: "Único"
},
{
  id: 242,
  nombre: "Pulidor de Uñas para Mascotas",
  codigo: "201392",
  imagen: "pulidor-unias-mascotas.jpg",
  descripcion: "Pulidor de uñas para mascotas.",
  categoria: "Cuidado",
  precio: 5750,
  cantidad: 1,
  talles: "Único"
},
{
  id: 243,
  nombre: "Alicate Chico Verde/Gris",
  codigo: "523026",
  imagen: "alicate-chico-verde-gris.jpg",
  descripcion: "Alicate chico verde/gris.",
  categoria: "Cuidado",
  precio: 2990,
  cantidad: 1,
  talles: "Chico"
},
{
  id: 244,
  nombre: "Alicate Azul y Gris",
  codigo: "904797",
  imagen: "alicate-azul-gris.jpg",
  descripcion: "Alicate modelo 5010 (azul y gris).",
  categoria: "Cuidado",
  precio: 3800,
  cantidad: 1,
  talles: "Único"
},
{
  id: 245,
  nombre: "Alicate Grande con Lima",
  codigo: "802025",
  imagen: "alicate-grande-lima.jpg",
  descripcion: "Alicate grande con lima.",
  categoria: "Cuidado",
  precio: 4390,
  cantidad: 1,
  talles: "Grande"
},
{
  id: 246,
  nombre: "Alicate Chico para Perro",
  codigo: "001293",
  imagen: "alicate-chico-perro.jpg",
  descripcion: "Alicate chico para perro.",
  categoria: "Cuidado",
  precio: 2750,
  cantidad: 1,
  talles: "Chico"
},
{
  id: 247,
  nombre: "Alicate con Lima Chico",
  codigo: "13017",
  imagen: "alicate-lima-chico.jpg",
  descripcion: "Alicate con lima tamaño chico.",
  categoria: "Cuidado",
  precio: 4700,
  cantidad: 1,
  talles: "Chico"
},
{
  id: 248,
  nombre: "Alicate con Lima Grande",
  codigo: "13016",
  imagen: "alicate-lima-grande.jpg",
  descripcion: "Alicate con lima tamaño grande.",
  categoria: "Cuidado",
  precio: 5000,
  cantidad: 1,
  talles: "Grande"
},
{
  id: 249,
  nombre: "Esponja de Silicona",
  codigo: "614436",
  imagen: "esponja-silicona.jpg",
  descripcion: "Esponja de silicona.",
  categoria: "Cuidado",
  precio: 2200,
  cantidad: 1,
  talles: "Único"
},
{
  id: 250,
  nombre: "Rollo Sacapelusa Grande",
  codigo: "121691",
  imagen: "rollo-sacapelusa-grande.jpg",
  descripcion: "Rollo sacapelusa tamaño grande.",
  categoria: "Cuidado",
  precio: 2450,
  cantidad: 1,
  talles: "Grande"
},
{
  id: 251,
  nombre: "Repuesto de Sacapelusa",
  codigo: "121707",
  imagen: "repuesto-sacapelusa.jpg",
  descripcion: "Repuesto para sacapelusa.",
  categoria: "Cuidado",
  precio: 2350,
  cantidad: 1,
  talles: "Único"
},
{
  id: 252,
  nombre: "Sacapelusa Doble Rojo Grande",
  codigo: "121721",
  imagen: "sacapelusa-doble-rojo.jpg",
  descripcion: "Sacapelusa doble color rojo tamaño grande.",
  categoria: "Cuidado",
  precio: 3150,
  cantidad: 1,
  talles: "Grande"
},
{
  id: 253,
  nombre: "Manopla Blanca para Perro",
  codigo: "001583",
  imagen: "manopla-blanca-perro.jpg",
  descripcion: "Manopla blanca para perro.",
  categoria: "Cepillos",
  precio: 2990,
  cantidad: 1,
  talles: "Único"
},
{
  id: 254,
  nombre: "2 Piezas Cepillo Saca Pelusa",
  codigo: "074745",
  imagen: "2-piezas-cepillo-saca-pelusa.jpg",
  descripcion: "Juego de 2 cepillos saca pelusa.",
  categoria: "Cepillos",
  precio: 9990,
  cantidad: 1,
  talles: "Único"
},
{
  id: 255,
  nombre: "Saca Pelusa en Caja",
  codigo: "415659",
  imagen: "saca-pelusa-en-caja.jpg",
  descripcion: "Cepillo saca pelusa presentado en caja.",
  categoria: "Cepillos",
  precio: 2990,
  cantidad: 1,
  talles: "Único"
},
{
  id: 256,
  nombre: "Saca Pelusa Squishy 2 Piezas",
  codigo: "618104",
  imagen: "saca-pelusa-squishy-2pc.jpg",
  descripcion: "Pack de 2 unidades saca pelusa Squishy.",
  categoria: "Cepillos",
  precio: 4590,
  cantidad: 1,
  talles: "Único"
},
{
  id: 257,
  nombre: "Sacapelusa Sticky Buddy",
  codigo: "620875",
  imagen: "sacapelusa-sticky-buddy.jpg",
  descripcion: "Rodillo sacapelusa Sticky Buddy reutilizable.",
  categoria: "Cepillos",
  precio: 9800,
  cantidad: 1,
  talles: "Único"
},
{
  id: 258,
  nombre: "Sacapelusa Doble Dirección",
  codigo: "030758",
  imagen: "sacapelusa-doble-direccion.jpg",
  descripcion: "Sacapelusa de doble dirección.",
  categoria: "Cepillos",
  precio: 6590,
  cantidad: 1,
  talles: "Único"
},
{
  id: 259,
  nombre: "Pechera con Flores con Brillo",
  codigo: "615157",
  imagen: "pechera-flores-brillo.jpg",
  descripcion: "Pechera con flores y brillo.",
  categoria: "Pechera",
  precio: 8200,
  cantidad: 1,
  talles: "Único"
},
{
  id: 260,
  nombre: "Pechera con Osos",
  codigo: "615164",
  imagen: "pechera-osos.jpg",
  descripcion: "Pechera con diseño de osos.",
  categoria: "Pechera",
  precio: 8200,
  cantidad: 1,
  talles: "Único"
},
{
  id: 261,
  nombre: "Pechera con Huellas con Brillo",
  codigo: "429355",
  imagen: "pechera-huellas-brillo.jpg",
  descripcion: "Pechera con huellas y brillo.",
  categoria: "Pechera",
  precio: 7150,
  cantidad: 1,
  talles: "Único"
},
{
  id: 262,
  nombre: "Pechera con Rombos",
  codigo: "615171",
  imagen: "pechera-rombos.jpg",
  descripcion: "Pechera con diseño de rombos.",
  categoria: "Pechera",
  precio: 6250,
  cantidad: 1,
  talles: "Único"
},
{
  id: 263,
  nombre: "Pretal con Brillo",
  codigo: "901226",
  imagen: "pretal-brillo.jpg",
  descripcion: "Pretal con brillo.",
  categoria: "Pechera",
  precio: 8150,
  cantidad: 1,
  talles: "Único"
},
{
  id: 264,
  nombre: "Pechera Camuflada",
  codigo: "615188",
  imagen: "pechera-camuflada.jpg",
  descripcion: "Pechera con diseño camuflado.",
  categoria: "Pechera",
  precio: 6250,
  cantidad: 1,
  talles: "Único"
},
{ id: 265, nombre: "Arnes Nato 60mm", codigo: "—", imagen: "arnes-nato-60mm.jpg", descripcion: "Arnés Nato de 60 mm.", categoria: "Arneses", precio: 35400, cantidad: 1, talles: "60mm" },
{ id: 266, nombre: "Pretal Liso Nº1", codigo: "0060", imagen: "pretal-liso-1.jpg", descripcion: "Pretal liso Nº1 de polipropileno.", categoria: "Pretales", precio: 3650, cantidad: 1, talles: "Nº1" },
{ id: 267, nombre: "Pretal Liso Nº2", codigo: "0061", imagen: "pretal-liso-2.jpg", descripcion: "Pretal liso Nº2 de polipropileno.", categoria: "Pretales", precio: 3960, cantidad: 1, talles: "Nº2" },
{ id: 268, nombre: "Pretal Liso Nº3", codigo: "0062", imagen: "pretal-liso-3.jpg", descripcion: "Pretal liso Nº3 de polipropileno.", categoria: "Pretales", precio: 4130, cantidad: 1, talles: "Nº3" },
{ id: 269, nombre: "Pretal Liso Nº4", codigo: "0063", imagen: "pretal-liso-4.jpg", descripcion: "Pretal liso Nº4 de polipropileno.", categoria: "Pretales", precio: 5780, cantidad: 1, talles: "Nº4" },
{ id: 270, nombre: "Pretal Liso Nº5", codigo: "0064", imagen: "pretal-liso-5.jpg", descripcion: "Pretal liso Nº5 de polipropileno.", categoria: "Pretales", precio: 6100, cantidad: 1, talles: "Nº5" },

{ id: 271, nombre: "Pretal Pitbull Chico", codigo: "—", imagen: "pretal-pitbull-chico.jpg", descripcion: "Pretal Pitbull chico con correa corta, material Nato.", categoria: "Pretales", precio: 28050, cantidad: 1, talles: "Chico" },
{ id: 272, nombre: "Pretal Pitbull Grande", codigo: "—", imagen: "pretal-pitbull-grande.jpg", descripcion: "Pretal Pitbull grande con correa corta, material Nato.", categoria: "Pretales", precio: 31350, cantidad: 1, talles: "Grande" },

{ id: 273, nombre: "Arnes Táctico M", codigo: "—", imagen: "arnes-tactico-m.jpg", descripcion: "Arnés táctico talle M.", categoria: "Arneses", precio: 28400, cantidad: 1, talles: "M" },
{ id: 274, nombre: "Arnes Táctico L", codigo: "—", imagen: "arnes-tactico-l.jpg", descripcion: "Arnés táctico talle L.", categoria: "Arneses", precio: 28700, cantidad: 1, talles: "L" },
{ id: 275, nombre: "Arnes Táctico XL", codigo: "—", imagen: "arnes-tactico-xl.jpg", descripcion: "Arnés táctico talle XL.", categoria: "Arneses", precio: 28990, cantidad: 1, talles: "XL" },

{ id: 276, nombre: "Pechera Táctica S", codigo: "—", imagen: "pechera-tactica-s.jpg", descripcion: "Pechera táctica talle S.", categoria: "Pechera", precio: 14340, cantidad: 1, talles: "S" },
{ id: 277, nombre: "Pechera Táctica M", codigo: "—", imagen: "pechera-tactica-m.jpg", descripcion: "Pechera táctica talle M.", categoria: "Pechera", precio: 15790, cantidad: 1, talles: "M" },
{ id: 278, nombre: "Pechera Táctica L", codigo: "—", imagen: "pechera-tactica-l.jpg", descripcion: "Pechera táctica talle L.", categoria: "Pechera", precio: 16780, cantidad: 1, talles: "L" },
{ id: 279, nombre: "Pechera Táctica XL", codigo: "—", imagen: "pechera-tactica-xl.jpg", descripcion: "Pechera táctica talle XL.", categoria: "Pechera", precio: 17240, cantidad: 1, talles: "XL" },
{ id: 280, nombre: "Pechera Táctica XXL", codigo: "—", imagen: "pechera-tactica-xxl.jpg", descripcion: "Pechera táctica talle XXL.", categoria: "Pechera", precio: 18000, cantidad: 1, talles: "XXL" },

{ id: 281, nombre: "Bozal Cinta Nº1", codigo: "—", imagen: "bozal-cinta-1.jpg", descripcion: "Bozal cinta Nº1.", categoria: "Bozales", precio: 3800, cantidad: 1, talles: "Nº1" },
{ id: 282, nombre: "Bozal Cinta Nº2", codigo: "—", imagen: "bozal-cinta-2.jpg", descripcion: "Bozal cinta Nº2.", categoria: "Bozales", precio: 4460, cantidad: 1, talles: "Nº2" },
{
  id: 283,
  nombre: "Bozal Cinta N°3",
  codigo: "—",
  imagen: "bozal-cinta-3.jpg",
  descripcion: "Bozal cinta N°3.",
  categoria: "Bozales",
  precio: 4950,
  cantidad: 1,
  talles: "N°3"
},
{
  id: 284,
  nombre: "Extensible con Hueso 3M",
  codigo: "28011",
  imagen: "extensible-hueso-3m.jpg",
  descripcion: "Extensible con hueso (3 metros).",
  categoria: "Paseo",
  precio: 4550,
  cantidad: 1,
  talles: "3 m"
},
{
  id: 285,
  nombre: "Extensible con Hueso 5M",
  codigo: "28028",
  imagen: "extensible-hueso-5m.jpg",
  descripcion: "Extensible con hueso (5 metros).",
  categoria: "Paseo",
  precio: 6290,
  cantidad: 1,
  talles: "5 m"
},
{
  id: 286,
  nombre: "Extensible Redondo",
  codigo: "506015",
  imagen: "extensible-redondo.jpg",
  descripcion: "Extensible redondo.",
  categoria: "Paseo",
  precio: 9990,
  cantidad: 1,
  talles: "Único"
},
{
  id: 287,
  nombre: "Correa Extensible Automática 3M Azul",
  codigo: "13019AZ",
  imagen: "correa-extensible-3m-azul.jpg",
  descripcion: "Correa extensible automática 3 metros / 11 kg (azul).",
  categoria: "Paseo",
  precio: 4300,
  cantidad: 1,
  talles: "3 m"
},
{
  id: 288,
  nombre: "Correa Extensible Automática 5M Roja",
  codigo: "13020RO",
  imagen: "correa-extensible-5m-roja.jpg",
  descripcion: "Correa extensible automática 5 metros / 15 kg (roja).",
  categoria: "Paseo",
  precio: 6200,
  cantidad: 1,
  talles: "5 m"
},
{
  id: 289,
  nombre: "Juego Bozal Canasta 2 a 6",
  codigo: "001651",
  imagen: "juego-bozales-canasta.jpg",
  descripcion: "Juego bozal canasta N°2, 3, 4, 5 y 6.",
  categoria: "Bozales",
  precio: 24550,
  cantidad: 1,
  talles: "2 al 6"
},
{
  id: 290,
  nombre: "Bozal Canasta N°2",
  codigo: "—",
  imagen: "bozal-canasta-2.jpg",
  descripcion: "Bozal canasta N°2.",
  categoria: "Bozales",
  precio: 3000,
  cantidad: 1,
  talles: "N°2"
},
{
  id: 291,
  nombre: "Bozal Canasta N°3",
  codigo: "413103",
  imagen: "bozal-canasta-3.jpg",
  descripcion: "Bozal canasta N°3.",
  categoria: "Bozales",
  precio: 3300,
  cantidad: 1,
  talles: "N°3"
},
{
  id: 292,
  nombre: "Bozal Canasta N°5",
  codigo: "001781",
  imagen: "bozal-canasta-5.jpg",
  descripcion: "Bozal canasta N°5.",
  categoria: "Bozales",
  precio: 5100,
  cantidad: 1,
  talles: "N°5"
},
{
  id: 293,
  nombre: "Bozal Canasta N°6",
  codigo: "000999",
  imagen: "bozal-canasta-6.jpg",
  descripcion: "Bozal canasta N°6.",
  categoria: "Bozales",
  precio: 5900,
  cantidad: 1,
  talles: "N°6"
},
{
  id: 294,
  nombre: "Bozal Canasta N°7",
  codigo: "002498",
  imagen: "bozal-canasta-7.jpg",
  descripcion: "Bozal canasta N°7.",
  categoria: "Bozales",
  precio: 6300,
  cantidad: 1,
  talles: "N°7"
},
{
  id: 295,
  nombre: "Bozal Reflectario Talle 1",
  codigo: "—",
  imagen: "bozal-reflectario-1.jpg",
  descripcion: "Bozal reflectario talle 1.",
  categoria: "Bozales",
  precio: 5990,
  cantidad: 1,
  talles: "Talle 1"
},
{
  id: 296,
  nombre: "Bozal Reflectario Talle 2",
  codigo: "—",
  imagen: "bozal-reflectario-2.jpg",
  descripcion: "Bozal reflectario talle 2.",
  categoria: "Bozales",
  precio: 6582,
  cantidad: 1,
  talles: "Talle 2"
},
{
  id: 297,
  nombre: "Bozal Reflectario Talle 3",
  codigo: "—",
  imagen: "bozal-reflectario-3.jpg",
  descripcion: "Bozal reflectario talle 3.",
  categoria: "Bozales",
  precio: 7180,
  cantidad: 1,
  talles: "Talle 3"
},
{
  id: 298,
  nombre: "Bozal Reflectario Talle 4",
  codigo: "—",
  imagen: "bozal-reflectario-4.jpg",
  descripcion: "Bozal reflectario talle 4.",
  categoria: "Bozales",
  precio: 7929,
  cantidad: 1,
  talles: "Talle 4"
},
{
  id: 299,
  nombre: "Bozal Reflectario Talle 5",
  codigo: "—",
  imagen: "bozal-reflectario-5.jpg",
  descripcion: "Bozal reflectario talle 5.",
  categoria: "Bozales",
  precio: 8676,
  cantidad: 1,
  talles: "Talle 5"
},
{
  id: 300,
  nombre: "Bozal Reflectario Talle 6",
  codigo: "—",
  imagen: "bozal-reflectario-6.jpg",
  descripcion: "Bozal reflectario talle 6.",
  categoria: "Bozales",
  precio: 10173,
  cantidad: 1,
  talles: "Talle 6"
},
{
  id: 301,
  nombre: "Pelota de Soga",
  codigo: "17234",
  imagen: "pelota-de-soga.jpg",
  descripcion: "Pelota de soga.",
  categoria: "Juguetes",
  precio: 2900,
  cantidad: 1
},
{
  id: 302,
  nombre: "Pelota con Pelota de Goma",
  codigo: "808984",
  imagen: "pelota-con-pelota-de-goma.jpg",
  descripcion: "Pelota con pelota de goma.",
  categoria: "Juguetes",
  precio: 3900,
  cantidad: 1
},
{
  id: 303,
  nombre: "Juguete de Soga CQ-11",
  codigo: "000115",
  imagen: "juguete-soga-cq11.jpg",
  descripcion: "Juguete de soga modelo CQ-11.",
  categoria: "Juguetes",
  precio: 5090,
  cantidad: 1
},
{
  id: 304,
  nombre: "Mordillo con Pelota",
  codigo: "323154",
  imagen: "mordillo-con-pelota.jpg",
  descripcion: "Mordillo con pelota.",
  categoria: "Juguetes",
  precio: 2900,
  cantidad: 1
},
{
  id: 305,
  nombre: "Mordillo con Pelota de Soga",
  codigo: "323161",
  imagen: "mordillo-con-pelota-de-soga.jpg",
  descripcion: "Mordillo con pelota de soga.",
  categoria: "Juguetes",
  precio: 3650,
  cantidad: 1
},
{
  id: 306,
  nombre: "Juguete Pelota de Soga",
  codigo: "CQ-05",
  imagen: "juguete-pelota-de-soga.jpg",
  descripcion: "Juguete pelota de soga.",
  categoria: "Juguetes",
  precio: 6550,
  cantidad: 1
},

// --- Segunda imagen ---

{
  id: 307,
  nombre: "Juguete 2 Pelotas de Soga",
  codigo: "CQ-10",
  imagen: "juguete-2-pelotas-soga.jpg",
  descripcion: "Juguete con 2 pelotas de soga.",
  categoria: "Juguetes",
  precio: 6900,
  cantidad: 1
},
{
  id: 308,
  nombre: "Hueso Goma con 2 Pelotas",
  codigo: "323185",
  imagen: "hueso-goma-2-pelotas.jpg",
  descripcion: "Hueso de goma con 2 pelotas.",
  categoria: "Juguetes",
  precio: 5590,
  cantidad: 1
},
{
  id: 309,
  nombre: "Juguete 1 Pelota con Soga Grande",
  codigo: "CQ-09",
  imagen: "juguete-1-pelota-soga-gr.jpg",
  descripcion: "Juguete con 1 pelota y soga grande.",
  categoria: "Juguetes",
  precio: 9950,
  cantidad: 1
},
{
  id: 310,
  nombre: "Soga 40cm con Nudo y Pelota",
  codigo: "29185",
  imagen: "soga-40cm-nudo-pelota.jpg",
  descripcion: "Soga de 40 cm con nudo y pelota.",
  categoria: "Juguetes",
  precio: 3660,
  cantidad: 1
},
{
  id: 311,
  nombre: "Pelota de Soga con Nudo",
  codigo: "17227",
  imagen: "pelota-soga-con-nudo.jpg",
  descripcion: "Pelota de soga con nudo.",
  categoria: "Juguetes",
  precio: 3800,
  cantidad: 1
},
{
  id: 312,
  nombre: "Pelota 110-02 para Perro",
  codigo: "007625",
  imagen: "pelota-110-02-perro.jpg",
  descripcion: "Pelota modelo 110-02 para perro.",
  categoria: "Juguetes",
  precio: 2590,
  cantidad: 1
},

// --- Tercera imagen ---

{
  id: 313,
  nombre: "Pelota Chica Movimiento USB",
  codigo: "822164",
  imagen: "pelota-chica-usb.jpg",
  descripcion: "Pelota chica con movimiento USB.",
  categoria: "Juguetes",
  precio: 9800,
  cantidad: 1
},
{
  id: 314,
  nombre: "Pelota Grande Movimiento USB",
  codigo: "822157",
  imagen: "pelota-grande-usb.jpg",
  descripcion: "Pelota grande con movimiento USB.",
  categoria: "Juguetes",
  precio: 10400,
  cantidad: 1
},
{
  id: 315,
  nombre: "Frisbee con Luz",
  codigo: "129371",
  imagen: "frisbee-con-luz.jpg",
  descripcion: "Frisbee con luz.",
  categoria: "Juguetes",
  precio: 6590,
  cantidad: 1
},
{
  id: 316,
  nombre: "Soga con Nudo Chico CQ-06",
  codigo: "000061",
  imagen: "soga-nudo-chico-cq06.jpg",
  descripcion: "Soga con nudo chico modelo CQ-06.",
  categoria: "Juguetes",
  precio: 1150,
  cantidad: 1
},
{
  id: 317,
  nombre: "Pelota Chica de Soga CQ-18",
  codigo: "184",
  imagen: "pelota-chica-soga-cq18.jpg",
  descripcion: "Pelota chica de soga modelo CQ-18.",
  categoria: "Juguetes",
  precio: 2550,
  cantidad: 1
},
{
  id: 318,
  nombre: "Soga con Mango de Púas A3640",
  codigo: "720683",
  imagen: "soga-mango-puas-a3640.jpg",
  descripcion: "Soga con mango de púas modelo A3640.",
  categoria: "Juguetes",
  precio: 5590,
  cantidad: 1
},
{
  id: 319,
  nombre: "Juguete 2 Pelotas con Soga CQ-02",
  codigo: "000023",
  imagen: "juguete-2-pelotas-soga-cq02.jpg",
  descripcion: "Juguete de soga con 2 pelotas modelo CQ-02.",
  categoria: "Juguetes",
  precio: 6850,
  cantidad: 1
},
{
  id: 320,
  nombre: "Pelota con Hueso Medio",
  codigo: "323178",
  imagen: "pelota-con-hueso-medio.jpg",
  descripcion: "Pelota con hueso medio.",
  categoria: "Juguetes",
  precio: 2900,
  cantidad: 1
},
{
  id: 321,
  nombre: "Pelota Doble en Soga",
  codigo: "17258",
  imagen: "pelota-doble-en-soga.jpg",
  descripcion: "Pelota doble en soga.",
  categoria: "Juguetes",
  precio: 4190,
  cantidad: 1
},
{
  id: 322,
  nombre: "Soga 8 con Tenis",
  codigo: "524309",
  imagen: "soga-8-con-tenis.jpg",
  descripcion: "Soga en forma de 8 con pelota tipo tenis.",
  categoria: "Juguetes",
  precio: 2890,
  cantidad: 1
},
{
  id: 323,
  nombre: "Soga Mordillo Trenza Bicolor",
  codigo: "627106",
  imagen: "soga-mordillo-trenza-bicolor.jpg",
  descripcion: "Soga mordillo con trenza bicolor.",
  categoria: "Juguetes",
  precio: 3200,
  cantidad: 1
},
{
  id: 324,
  nombre: "Soga Mordillo con Pelota y Trenza",
  codigo: "627113",
  imagen: "soga-mordillo-pelota-trenza.jpg",
  descripcion: "Soga mordillo con pelota y trenza.",
  categoria: "Juguetes",
  precio: 3800,
  cantidad: 1
},

// --- Segunda tanda ---

{
  id: 325,
  nombre: "Soga Trenzada con Pelota Mordillo",
  codigo: "627120",
  imagen: "soga-trenzada-pelota-mordillo.jpg",
  descripcion: "Soga trenzada con pelota mordillo.",
  categoria: "Juguetes",
  precio: 2450,
  cantidad: 1
},
{
  id: 326,
  nombre: "Mordillo Soga Bicolor",
  codigo: "627175",
  imagen: "mordillo-soga-bicolor.jpg",
  descripcion: "Mordillo de soga bicolor.",
  categoria: "Juguetes",
  precio: 5200,
  cantidad: 1
},
{
  id: 327,
  nombre: "Soga Largo Mango con Pelota Bicolor",
  codigo: "627151",
  imagen: "soga-largo-mango-pelota-bicolor.jpg",
  descripcion: "Soga larga con mango y pelota bicolor.",
  categoria: "Juguetes",
  precio: 3800,
  cantidad: 1
},
{
  id: 328,
  nombre: "Soga Pelota Bicolor",
  codigo: "627182",
  imagen: "soga-pelota-bicolor.jpg",
  descripcion: "Soga con pelota bicolor.",
  categoria: "Juguetes",
  precio: 3200,
  cantidad: 1
},
{
  id: 329,
  nombre: "Soga Mango con Pelota de Silicona",
  codigo: "627199",
  imagen: "soga-mango-pelota-silicona.jpg",
  descripcion: "Soga con mango y pelota de silicona.",
  categoria: "Juguetes",
  precio: 4790,
  cantidad: 1
},
{
  id: 330,
  nombre: "Pelota Tenis x3",
  codigo: "104999",
  imagen: "pelota-tenis-x3.jpg",
  descripcion: "Pack de 3 pelotas tipo tenis.",
  categoria: "Juguetes",
  precio: 5900,
  cantidad: 1
},

// --- Tercera tanda (juguetes tipo goma / plástico) ---

{
  id: 331,
  nombre: "Set x3 Pelota Tenis Huellas",
  codigo: "633226",
  imagen: "set-3-pelota-tenis-huellas.jpg",
  descripcion: "Set de 3 pelotas de tenis con huellas.",
  categoria: "Juguetes",
  precio: 2600,
  cantidad: 1
},
{
  id: 332,
  nombre: "Hueso de Goma Chico",
  codigo: "HGC",
  imagen: "hueso-goma-chico.jpg",
  descripcion: "Hueso de goma tamaño chico.",
  categoria: "Juguetes",
  precio: 1950,
  cantidad: 1
},
{
  id: 333,
  nombre: "Hueso de Goma Mediano",
  codigo: "HGM",
  imagen: "hueso-goma-mediano.jpg",
  descripcion: "Hueso de goma tamaño mediano.",
  categoria: "Juguetes",
  precio: 3090,
  cantidad: 1
},
{
  id: 334,
  nombre: "Hueso de Goma Grande",
  codigo: "HGG",
  imagen: "hueso-goma-grande.jpg",
  descripcion: "Hueso de goma tamaño grande.",
  categoria: "Juguetes",
  precio: 5250,
  cantidad: 1
},
{
  id: 335,
  nombre: "Hueso Plástico Chico Brilla en Oscuridad",
  codigo: "HPCBOSC",
  imagen: "hueso-plastico-chico-brilla.jpg",
  descripcion: "Hueso de plástico chico, brilla en la oscuridad.",
  categoria: "Juguetes",
  precio: 2200,
  cantidad: 1
},
{
  id: 336,
  nombre: "Hueso Plástico Mediano Brilla en Oscuridad",
  codigo: "HPMBOSC",
  imagen: "hueso-plastico-mediano-brilla.jpg",
  descripcion: "Hueso de plástico mediano, brilla en la oscuridad.",
  categoria: "Juguetes",
  precio: 3390,
  cantidad: 1
},
{
  id: 337,
  nombre: "Hueso de Plástico Grande Brilla",
  codigo: "HPGBOSC",
  imagen: "hpgbosc.jpg",
  descripcion: "Hueso de plástico grande. Brilla en la oscuridad.",
  categoria: "Juguetes de Goma",
  precio: 5640,
  cantidad: 1,
  talles: "-"
},
{
  id: 338,
  nombre: "Pelota Goma Maciza Chica (2 Unidades)",
  codigo: "PGC",
  imagen: "pgc.jpg",
  descripcion: "Pelota de goma maciza chica. Pack de 2 unidades.",
  categoria: "Pelotas",
  precio: 1500,
  cantidad: 2,
  talles: "Chica"
},
{
  id: 339,
  nombre: "Pelota Goma Maciza Mediana",
  codigo: "PGM",
  imagen: "pgm.jpg",
  descripcion: "Pelota de goma maciza mediana.",
  categoria: "Pelotas",
  precio: 2800,
  cantidad: 1,
  talles: "Mediana"
},
{
  id: 340,
  nombre: "Pelota Goma Maciza Grande",
  codigo: "PGG",
  imagen: "pgg.jpg",
  descripcion: "Pelota de goma maciza grande.",
  categoria: "Pelotas",
  precio: 5300,
  cantidad: 1,
  talles: "Grande"
},
{
  id: 341,
  nombre: "Pelota de Goma con Agujero Chica",
  codigo: "PGCA",
  imagen: "pgca.jpg",
  descripcion: "Pelota de goma con agujero chica.",
  categoria: "Pelotas",
  precio: 1390,
  cantidad: 1,
  talles: "Chica"
},
{
  id: 342,
  nombre: "Pelota de Goma con Agujero Mediana",
  codigo: "PGMA",
  imagen: "pgma.jpg",
  descripcion: "Pelota de goma con agujero mediana.",
  categoria: "Pelotas",
  precio: 3200,
  cantidad: 1,
  talles: "Mediana"
},
{
  id: 343,
  nombre: "Pelota Maciza Chica Brilla (2 Unidades)",
  codigo: "PPCBOSC",
  imagen: "ppcbosc.jpg",
  descripcion: "Pelota maciza chica que brilla en la oscuridad. Pack por 2 unidades.",
  categoria: "Pelotas",
  precio: 1790,
  cantidad: 2,
  talles: "Chica"
},
{
  id: 344,
  nombre: "Pelota Maciza Mediana Brilla",
  codigo: "PPMBOSC",
  imagen: "ppmbosc.jpg",
  descripcion: "Pelota maciza mediana que brilla en la oscuridad.",
  categoria: "Pelotas",
  precio: 3900,
  cantidad: 1,
  talles: "Mediana"
},
{
  id: 345,
  nombre: "Pelota Maciza Grande Brilla",
  codigo: "PPGBOSC",
  imagen: "ppgbosc.jpg",
  descripcion: "Pelota maciza grande que brilla en la oscuridad.",
  categoria: "Pelotas",
  precio: 7500,
  cantidad: 1,
  talles: "Grande"
},
{
  id: 346,
  nombre: "Granada de Goma Chica",
  codigo: "CH6",
  imagen: "ch6.jpg",
  descripcion: "Granada de goma chica.",
  categoria: "Juguetes de Goma",
  precio: 2500,
  cantidad: 1,
  talles: "Chica"
},
{
  id: 347,
  nombre: "Granada de Goma Mediana",
  codigo: "CH3",
  imagen: "ch3.jpg",
  descripcion: "Granada de goma mediana.",
  categoria: "Juguetes de Goma",
  precio: 4690,
  cantidad: 1,
  talles: "Mediana"
},
{
  id: 348,
  nombre: "Rama de Goma Grande",
  codigo: "CH10",
  imagen: "ch10.jpg",
  descripcion: "Rama de goma grande.",
  categoria: "Juguetes de Goma",
  precio: 8700,
  cantidad: 1,
  talles: "Grande"
},
{
  id: 349,
  nombre: "Pata de Pollo de Goma",
  codigo: "CH5",
  imagen: "ch5.jpg",
  descripcion: "Pata de pollo de goma.",
  categoria: "Juguetes de Goma",
  precio: 2950,
  cantidad: 1,
  talles: "-"
},
{
  id: 350,
  nombre: "Bat Bumer de Goma",
  codigo: "CH7",
  imagen: "ch7.jpg",
  descripcion: "Bat bumer de goma.",
  categoria: "Juguetes de Goma",
  precio: 2750,
  cantidad: 1,
  talles: "-"
},
{
  id: 351,
  nombre: "Bife de Goma",
  codigo: "CH8",
  imagen: "ch8.jpg",
  descripcion: "Bife de goma.",
  categoria: "Juguetes de Goma",
  precio: 4390,
  cantidad: 1,
  talles: "-"
},
{
  id: 352,
  nombre: "Rama de Goma",
  codigo: "CH4",
  imagen: "ch4.jpg",
  descripcion: "Rama de goma.",
  categoria: "Juguetes de Goma",
  precio: 2350,
  cantidad: 1,
  talles: "-"
},
{
  id: 353,
  nombre: "Hueso de Pollo de Goma",
  codigo: "CH15",
  imagen: "ch15.jpg",
  descripcion: "Hueso de pollo de goma.",
  categoria: "Juguetes de Goma",
  precio: 2850,
  cantidad: 1,
  talles: "-"
},
{
  id: 354,
  nombre: "Jumpet de Goma Chico",
  codigo: "CH17",
  imagen: "ch17.jpg",
  descripcion: "Jumpet de goma chico.",
  categoria: "Juguetes de Goma",
  precio: 3290,
  cantidad: 1,
  talles: "Chico"
},
{ id: 355, nombre: "CH18 - Jumper de Goma Grande", codigo: "CH18", imagen: "ch18.jpg", descripcion: "Jumper de goma grande.", categoria: "Juguetes de Goma", precio: 4290, cantidad: 1, talles: "-" },

{ id: 356, nombre: "CH20 - Rasca Encías de Goma", codigo: "CH20", imagen: "ch20.jpg", descripcion: "Rasca encías de goma.", categoria: "Juguetes de Goma", precio: 2590, cantidad: 1, talles: "-" },

{ id: 357, nombre: "CH22 - Hueso Mordillo de Goma", codigo: "CH22", imagen: "ch22.jpg", descripcion: "Hueso mordillo de goma.", categoria: "Juguetes de Goma", precio: 3100, cantidad: 1, talles: "-" },

{ id: 358, nombre: "CH24 - Mordillo 8 de Goma", codigo: "CH24", imagen: "ch24.jpg", descripcion: "Mordillo forma 8 de goma.", categoria: "Juguetes de Goma", precio: 3990, cantidad: 1, talles: "-" },

{ id: 359, nombre: "CH27 - Pelota con Púas, Pluma y Cascabel", codigo: "CH27", imagen: "ch27.jpg", descripcion: "Pelota con púas, pluma y cascabel.", categoria: "Juguetes de Goma", precio: 4500, cantidad: 1, talles: "-" },

{ id: 360, nombre: "CH28 - Pelota con Púas de Goma", codigo: "CH28", imagen: "ch28.jpg", descripcion: "Pelota con púas de goma.", categoria: "Juguetes de Goma", precio: 1100, cantidad: 1, talles: "-" },

{ id: 361, nombre: "CH32 - Pesa de Goma", codigo: "CH32", imagen: "ch32.jpg", descripcion: "Pesa de goma.", categoria: "Juguetes de Goma", precio: 3100, cantidad: 1, talles: "-" },

{ id: 362, nombre: "CH33 - Cruz Mordillo de Goma", codigo: "CH33", imagen: "ch33.jpg", descripcion: "Cruz mordillo de goma.", categoria: "Juguetes de Goma", precio: 2290, cantidad: 1, talles: "-" },

{ id: 363, nombre: "CH34 - Pelota Rugby de Goma", codigo: "CH34", imagen: "ch34.jpg", descripcion: "Pelota rugby de goma.", categoria: "Juguetes de Goma", precio: 3390, cantidad: 1, talles: "-" },

{ id: 364, nombre: "CH35 - Pelota Rugby Grande de Goma", codigo: "CH35", imagen: "ch35.jpg", descripcion: "Pelota rugby grande de goma.", categoria: "Juguetes de Goma", precio: 4990, cantidad: 1, talles: "-" },

{ id: 365, nombre: "CH36 - Pelota con Púas Grande de Goma", codigo: "CH36", imagen: "ch36.jpg", descripcion: "Pelota con púas grande de goma.", categoria: "Juguetes de Goma", precio: 2030, cantidad: 1, talles: "-" },

{ id: 366, nombre: "S901 - Pelota de Goma Chica con Soga Alpina (8mm x 65cm)", codigo: "S901", imagen: "s901.jpg", descripcion: "Pelota de goma chica con soga alpina 8mm x 65cm.", categoria: "Juguetes de Goma", precio: 1780, cantidad: 1, talles: "-" },

{ id: 367, nombre: "S102 - Pelota de Goma Mediana con Soga Alpina (8mm x 70cm)", codigo: "S102", imagen: "s102.jpg", descripcion: "Pelota de goma mediana con soga alpina 8mm x 70cm.", categoria: "Juguetes con Soga", precio: 4600, cantidad: 1, talles: "-" },

{ id: 368, nombre: "S103 - Pelota de Goma Mediana con Soga Alpina (12mm x 70cm)", codigo: "S103", imagen: "s103.jpg", descripcion: "Pelota de goma mediana con soga alpina 12mm x 70cm.", categoria: "Juguetes con Soga", precio: 6080, cantidad: 1, talles: "-" },

{ id: 369, nombre: "S104 - Pelota de Goma Grande con Soga Alpina (12mm x 70cm)", codigo: "S104", imagen: "s104.jpg", descripcion: "Pelota de goma grande con soga alpina 12mm x 70cm.", categoria: "Juguetes con Soga", precio: 8500, cantidad: 1, talles: "-" },

{ id: 370, nombre: "S105 - Pelota de Goma Grande con Soga Alpina (15mm x 75cm)", codigo: "S105", imagen: "s105.jpg", descripcion: "Pelota de goma grande con soga alpina 15mm x 75cm.", categoria: "Juguetes con Soga", precio: 10750, cantidad: 1, talles: "-" },

{ id: 371, nombre: "S201 - Pelota de Goma Chica con Soga Alpina (8mm x 50cm)", codigo: "S201", imagen: "s201.jpg", descripcion: "Pelota de goma chica con soga alpina 8mm x 50cm.", categoria: "Juguetes con Soga", precio: 3190, cantidad: 1, talles: "-" },

{ id: 372, nombre: "S202 - Pelota de Goma Mediana con Soga Alpina (8mm x 50cm)", codigo: "S202", imagen: "s202.jpg", descripcion: "Pelota de goma mediana con soga alpina 8mm x 50cm.", categoria: "Juguetes con Soga", precio: 4790, cantidad: 1, talles: "-" },
// --- Página 1 ---
{
  id: 373,
  nombre: "Pelota de goma grande c/soga alpina",
  codigo: "S204",
  imagen: "s204.jpg",
  descripcion: "Pelota de goma grande con soga alpina.",
  categoria: "Juguetes",
  precio: 8990,
  cantidad: 1,
  medidas: "12mm x 70cm"
},
{
  id: 374,
  nombre: "Pelota de goma chica c/soga alpina",
  codigo: "S301",
  imagen: "s301.jpg",
  descripcion: "Pelota de goma chica con soga alpina.",
  categoria: "Juguetes",
  precio: 2390,
  cantidad: 1,
  medidas: "8mm x 50cm"
},
{
  id: 375,
  nombre: "Pelota de goma mediana c/soga alpina",
  codigo: "S302",
  imagen: "s302.jpg",
  descripcion: "Pelota de goma mediana con soga alpina.",
  categoria: "Juguetes",
  precio: 4650,
  cantidad: 1,
  medidas: "8mm x 55cm"
},
{
  id: 376,
  nombre: "Pelota de goma mediana c/soga alpina",
  codigo: "S303",
  imagen: "s303.jpg",
  descripcion: "Pelota de goma mediana con soga alpina.",
  categoria: "Juguetes",
  precio: 6400,
  cantidad: 1,
  medidas: "12mm x 55cm"
},
{
  id: 377,
  nombre: "Pelota de goma mediana c/soga alpina",
  codigo: "S402",
  imagen: "s402.jpg",
  descripcion: "Pelota de goma mediana con soga alpina.",
  categoria: "Juguetes",
  precio: 3350,
  cantidad: 1,
  medidas: "8mm x 25cm"
},
{
  id: 378,
  nombre: "Pelota de goma mediana c/soga alpina",
  codigo: "S701",
  imagen: "s701.jpg",
  descripcion: "Pelota de goma mediana con soga alpina.",
  categoria: "Juguetes",
  precio: 4190,
  cantidad: 1,
  medidas: "8mm x 35cm"
},

// --- Página 2 ---
{
  id: 379,
  nombre: "Pelota c/puas de goma c/soga alpina",
  codigo: "S1001",
  imagen: "s1001.jpg",
  descripcion: "Pelota con púas de goma con soga alpina.",
  categoria: "Juguetes",
  precio: 1890,
  cantidad: 1,
  medidas: "8mm x 30cm"
},
{
  id: 380,
  nombre: "Pelota c/puas de goma x2 und. c/soga alpina",
  codigo: "S1002",
  imagen: "s1002.jpg",
  descripcion: "Pack de 2 pelotas con púas de goma con soga alpina.",
  categoria: "Juguetes",
  precio: 3190,
  cantidad: 1,
  medidas: "8mm x 35cm",
  unidades: 2
},
{
  id: 381,
  nombre: "Rasca encías de goma c/soga alpina",
  codigo: "S1101",
  imagen: "s1101.jpg",
  descripcion: "Rasca encías de goma con soga alpina.",
  categoria: "Juguetes",
  precio: 3890,
  cantidad: 1,
  medidas: "8mm x 80cm"
},
{
  id: 382,
  nombre: "Jumper de goma c/soga alpina",
  codigo: "S1301",
  imagen: "s1301.jpg",
  descripcion: "Jumper de goma con soga alpina.",
  categoria: "Juguetes",
  precio: 5790,
  cantidad: 1,
  medidas: "8mm x 90cm"
},
{
  id: 383,
  nombre: "Pelota c/puas de goma x2 und. c/soga alpina",
  codigo: "S1401",
  imagen: "s1401.jpg",
  descripcion: "Pack de 2 pelotas con púas de goma con soga alpina.",
  categoria: "Juguetes",
  precio: 2750,
  cantidad: 1,
  medidas: "8mm x 65cm",
  unidades: 2
},
{
  id: 384,
  nombre: "Soga nudo con pelota",
  codigo: "525931",
  imagen: "525931.jpg",
  descripcion: "Soga con nudo y pelota.",
  categoria: "Juguetes",
  precio: 3690,
  cantidad: 1
},

// --- Página 3 ---
{
  id: 385,
  nombre: "Frisbee de goma",
  codigo: "CH29",
  imagen: "ch29.jpg",
  descripcion: "Frisbee de goma.",
  categoria: "Juguetes",
  precio: 3490,
  cantidad: 1
},
{
  id: 386,
  nombre: "Rueda de goma",
  codigo: "CH30",
  imagen: "ch30.jpg",
  descripcion: "Rueda de goma.",
  categoria: "Juguetes",
  precio: 3850,
  cantidad: 1
},
{
  id: 387,
  nombre: "Pelota con 2 colores c/luz",
  codigo: "616457",
  imagen: "616457.jpg",
  descripcion: "Pelota de goma con luz y dos colores.",
  categoria: "Juguetes",
  precio: 2770,
  cantidad: 1,
  medidas: "7.5 cm"
},
{
  id: 388,
  nombre: "Pelota mordillo con hueco (12 unidades)",
  codigo: "322501",
  imagen: "322501.jpg",
  descripcion: "Pelota mordillo con hueco. Pack por 12 unidades.",
  categoria: "Juguetes",
  precio: 36900,
  cantidad: 1,
  unidades: 12
},
{
  id: 389,
  nombre: "Pelota animal",
  codigo: "807534",
  imagen: "807534.jpg",
  descripcion: "Pelota animal de goma.",
  categoria: "Juguetes",
  precio: 3230,
  cantidad: 1,
  medidas: "6.3 cm"
},
{
  id: 390,
  nombre: "Banana - Medialuna - Pepino - Choclo",
  codigo: "720645",
  imagen: "720645.jpg",
  descripcion: "Pelotas con forma de frutas y verduras (precio unitario).",
  categoria: "Juguetes",
  precio: 3250,
  cantidad: 1
},
{
  id: 391,
  nombre: "Papa - Frutilla - Coliflor - Lechuga",
  codigo: "720652",
  imagen: "720652.jpg",
  descripcion: "Juguete de goma con forma de verduras y frutas. Precio unitario.",
  categoria: "Juguetes",
  precio: 3250,
  cantidad: 1
},
{
  id: 392,
  nombre: "Set asado juguete perro",
  codigo: "720676",
  imagen: "720676.jpg",
  descripcion: "Set de juguetes tipo asado para perro. Precio unitario.",
  categoria: "Juguetes",
  precio: 3250,
  cantidad: 1
},
{
  id: 393,
  nombre: "Peluche emoji caca",
  codigo: "3730",
  imagen: "3730.jpg",
  descripcion: "Peluche con forma de emoji de caca.",
  categoria: "Juguetes",
  precio: 3170,
  cantidad: 1
},
{
  id: 394,
  nombre: "Peluche hueso",
  codigo: "3747",
  imagen: "3747.jpg",
  descripcion: "Peluche con forma de hueso.",
  categoria: "Juguetes",
  precio: 1870,
  cantidad: 1
},
{
  id: 395,
  nombre: "Peluche ojota",
  codigo: "3723",
  imagen: "3723.jpg",
  descripcion: "Peluche con forma de ojota.",
  categoria: "Juguetes",
  precio: 3200,
  cantidad: 1
},
{
  id: 396,
  nombre: "Gallina chifle chica",
  codigo: "211261",
  imagen: "211261.jpg",
  descripcion: "Gallina chifle tamaño chico.",
  categoria: "Juguetes",
  precio: 1840,
  cantidad: 1
},
{
  id: 397,
  nombre: "Gallina chifle mediana",
  codigo: "211278",
  imagen: "211278.jpg",
  descripcion: "Gallina chifle tamaño mediano.",
  categoria: "Juguetes",
  precio: 3780,
  cantidad: 1
},
{
  id: 398,
  nombre: "Gallina chifle grande",
  codigo: "211285",
  imagen: "211285.jpg",
  descripcion: "Gallina chifle tamaño grande.",
  categoria: "Juguetes",
  precio: 5670,
  cantidad: 1
},

// ------------------ Página siguiente ------------------

{
  id: 399,
  nombre: "Hamburguesa chica chifle",
  codigo: "716743",
  imagen: "716743.jpg",
  descripcion: "Hamburguesa de goma tipo chifle.",
  categoria: "Juguetes",
  precio: 2100,
  cantidad: 1
},
{
  id: 400,
  nombre: "Sandwich chifle",
  codigo: "716750",
  imagen: "716750.jpg",
  descripcion: "Sándwich de goma tipo chifle.",
  categoria: "Juguetes",
  precio: 2950,
  cantidad: 1
},
{
  id: 401,
  nombre: "Chifle helado",
  codigo: "212183",
  imagen: "212183.jpg",
  descripcion: "Juguete chifle con forma de helado.",
  categoria: "Juguetes",
  precio: 3000,
  cantidad: 1
},
{
  id: 402,
  nombre: "Pesa c/pinche chifle",
  codigo: "105765",
  imagen: "105765.jpg",
  descripcion: "Pesa de goma con pinches tipo chifle.",
  categoria: "Juguetes",
  precio: 3350,
  cantidad: 1
},
{
  id: 403,
  nombre: "Hueso c/hueso",
  codigo: "18603",
  imagen: "18603.jpg",
  descripcion: "Hueso doble tipo juguete mordillo.",
  categoria: "Juguetes",
  precio: 3170,
  cantidad: 1
},
{
  id: 404,
  nombre: "Pelota trenzada con cascabel 4 cm",
  codigo: "13035",
  imagen: "13035.jpg",
  descripcion: "Pelota trenzada con cascabel de 4 cm.",
  categoria: "Juguetes",
  precio: 850,
  cantidad: 1
},

// ------------------ Página siguiente ------------------

{
  id: 405,
  nombre: "Pelota trenzada con cascabel 6,5 cm",
  codigo: "13037SR",
  imagen: "13037SR.jpg",
  descripcion: "Pelota trenzada con cascabel de 6,5 cm.",
  categoria: "Juguetes",
  precio: 2250,
  cantidad: 1
},
{
  id: 406,
  nombre: "Pelota trenzada con cascabel 10 cm",
  codigo: "13039SR",
  imagen: "13039SR.jpg",
  descripcion: "Pelota trenzada con cascabel de 10 cm.",
  categoria: "Juguetes",
  precio: 3450,
  cantidad: 1
},
{
  id: 407,
  nombre: "Pelota mordillo 6.3 cm (24 unidades)",
  codigo: "40897",
  imagen: "40897.jpg",
  descripcion: "Pelotas mordillo de 6.3 cm. Pack por 24 unidades. Precio unitario.",
  categoria: "Juguetes",
  precio: 2212.5,
  cantidad: 1,
  unidades: 24
},
{
  id: 408,
  nombre: "Pelota mordillo 7.3 cm (24 unidades)",
  codigo: "322807",
  imagen: "322807.jpg",
  descripcion: "Pelotas mordillo de 7.3 cm. Pack por 24 unidades. Precio unitario.",
  categoria: "Juguetes",
  precio: 2596.75,
  cantidad: 1,
  unidades: 24
},
{
  id: 409,
  nombre: "Pesa c/tela",
  codigo: "510113",
  imagen: "510113.jpg",
  descripcion: "Pesa para perro recubierta en tela.",
  categoria: "Juguetes",
  precio: 2750,
  cantidad: 1
},
{
  id: 410,
  nombre: "Pesa c/2 pelotas sonajero",
  codigo: "924382",
  imagen: "924382.jpg",
  descripcion: "Pesa con dos pelotas con sonido tipo sonajero.",
  categoria: "Juguetes",
  precio: 3650,
  cantidad: 1
},
{ id: 411, codigo: "716736", nombre: "Pollo Chifle", precio: 2000, descripcion: "Pollo chifle.", imagen: "pollo-chifle.jpg", categoria: "Juguetes", cantidad: 1, talles: "-" },

  { id: 412, codigo: "630727", nombre: "Hueso c/luz Chifle", precio: 3180, descripcion: "Hueso con luz y chifle.", imagen: "hueso-luz-chifle.jpg", categoria: "Juguetes", cantidad: 1, talles: "-" },

  { id: 413, codigo: "616457", nombre: "Pelota 2 Colores c/luz", precio: 2770, descripcion: "Pelota con dos colores y luz.", imagen: "pelota-2-colores-luz.jpg", categoria: "Pelotas", cantidad: 1, talles: "-" },

  { id: 414, codigo: "0549", nombre: "Pelota Frisbee", precio: 9190, descripcion: "Pelota tipo frisbee para perro.", imagen: "pelota-frisbee.jpg", categoria: "Pelotas", cantidad: 1, talles: "-" },

  { id: 415, codigo: "130075", nombre: "Pelota Limpia Dientes 5cm", precio: 3400, descripcion: "Pelota limpiadora de dientes de 5cm.", imagen: "pelota-limpia-dientes.jpg", categoria: "Pelotas", cantidad: 1, talles: "-" },

  { id: 416, codigo: "13168", nombre: "Pelota Ovalada c/Pinche", precio: 1650, descripcion: "Pelota ovalada con pinche.", imagen: "pelota-ovalada-pinche.jpg", categoria: "Pelotas", cantidad: 1, talles: "-" },

  { id: 417, codigo: "13169", nombre: "Aro Mordillo Mascota", precio: 2290, descripcion: "Aro mordillo para mascota.", imagen: "aro-mordillo.jpg", categoria: "Mordillos", cantidad: 1, talles: "-" },

  { id: 418, codigo: "515743", nombre: "Chancho Hoho Chifle", precio: 5090, descripcion: "Chancho hoho con chifle.", imagen: "chancho-hoho-chifle.jpg", categoria: "Juguetes", cantidad: 1, talles: "-" },

  { id: 419, codigo: "24065", nombre: "Pelota c/Puas Luz y Chifle", precio: 1500, descripcion: "Pelota con púas, luz y chifle.", imagen: "pelota-puas-luz-chifle.jpg", categoria: "Pelotas", cantidad: 1, talles: "-" },

  { id: 420, codigo: "24288", nombre: "Alicate para Perros", precio: 3430, descripcion: "Alicate para corte de uñas de perros.", imagen: "alicate-perros.jpg", categoria: "Accesorios", cantidad: 1, talles: "-" },

  { id: 421, codigo: "24419", nombre: "Botella 550ml + 180ml Racionadora", precio: 10900, descripcion: "Botella 550 ml con compartimento racionador.", imagen: "botella-550-racionadora.jpg", categoria: "Accesorios", cantidad: 1, talles: "-" },

  { id: 422, codigo: "24421", nombre: "Botella 350ml + 180ml Racionadora", precio: 9500, descripcion: "Botella 350 ml con compartimento racionador.", imagen: "botella-350-racionadora.jpg", categoria: "Accesorios", cantidad: 1, talles: "-" },

  { id: 423, codigo: "4002-02", nombre: "Rueda Hamster N°1 c/soporte", precio: 3700, descripcion: "Rueda para hámster Nº1 con soporte.", imagen: "rueda-hamster-1.jpg", categoria: "Roedores", cantidad: 1, talles: "-" },

  { id: 424, codigo: "4002-03", nombre: "Rueda Hamster N°2 c/soporte", precio: 4890, descripcion: "Rueda para hámster Nº2 con soporte.", imagen: "rueda-hamster-2.jpg", categoria: "Roedores", cantidad: 1, talles: "-" },
  {
  id: 425,
  nombre: "Ratas 3 und.",
  codigo: "210639",
  imagen: "210639.jpg",
  descripcion: "Pack de 3 ratas con plumas.",
  categoria: "Juguetes",
  precio: 2900,
  cantidad: 1
},
{
  id: 426,
  nombre: "Ratones 9 und.",
  codigo: "025016",
  imagen: "025016.jpg",
  descripcion: "Pack de 9 ratones para gato.",
  categoria: "Juguetes",
  precio: 5700,
  cantidad: 1
},
{
  id: 427,
  nombre: "Trompo c/plumas 2 und.",
  codigo: "216292",
  imagen: "216292.jpg",
  descripcion: "Pack de 2 trompos para gato con plumas.",
  categoria: "Juguetes",
  precio: 2990,
  cantidad: 1
},
{
  id: 428,
  nombre: "Rata ojo móvil a cuerda c/vibración",
  codigo: "10884",
  imagen: "10884.jpg",
  descripcion: "Rata con cuerda, vibración y ojos móviles.",
  categoria: "Juguetes",
  precio: 3750,
  cantidad: 1
},
{
  id: 429,
  nombre: "Rata c/3 tiras",
  codigo: "418123",
  imagen: "418123.jpg",
  descripcion: "Juguete tipo rata con tres tiras.",
  categoria: "Juguetes",
  precio: 2290,
  cantidad: 1
},
{
  id: 430,
  nombre: "Rata sisal x 2 und.",
  codigo: "522676",
  imagen: "522676.jpg",
  descripcion: "Pack de 2 ratas de sisal.",
  categoria: "Juguetes",
  precio: 2560,
  cantidad: 1
},
{
  id: 431,
  nombre: "Rata c/pelota de sisal",
  codigo: "518219",
  imagen: "518219.jpg",
  descripcion: "Rata con pelota de sisal y plumas.",
  categoria: "Juguetes",
  precio: 2480,
  cantidad: 1
},
{
  id: 432,
  nombre: "Bolita de rama con plumas",
  codigo: "722359",
  imagen: "722359.jpg",
  descripcion: "Bolita de rama natural con plumas.",
  categoria: "Juguetes",
  precio: 1850,
  cantidad: 1
},
{
  id: 433,
  nombre: "Rata de hilo c/pluma y tira pompón",
  codigo: "520520",
  imagen: "520520.jpg",
  descripcion: "Rata de hilo con plumas y pompón.",
  categoria: "Juguetes",
  precio: 1900,
  cantidad: 1
},
{
  id: 434,
  nombre: "Pelota de soga c/pluma y tira",
  codigo: "520506",
  imagen: "520506.jpg",
  descripcion: "Pelota de soga con pluma y tiras.",
  categoria: "Juguetes",
  precio: 1900,
  cantidad: 1
},
{
  id: 435,
  nombre: "Rata peluche c/pluma y sonajero",
  codigo: "520544",
  imagen: "520544.jpg",
  descripcion: "Rata de peluche con pluma y sonido tipo sonajero.",
  categoria: "Juguetes",
  precio: 2390,
  cantidad: 1
},
{
  id: 436,
  nombre: "Rata c/sonajero 2 und.",
  codigo: "729568",
  imagen: "729568.jpg",
  descripcion: "Pack de 2 ratas con sonajero.",
  categoria: "Juguetes",
  precio: 2690,
  cantidad: 1
},
{
  id: 437,
  nombre: "DHC-67 3pc ratas",
  codigo: "216353",
  imagen: "216353.jpg",
  descripcion: "Pack de 3 ratas con pluma.",
  categoria: "Juguetes",
  precio: 1950,
  cantidad: 1
},
{
  id: 438,
  nombre: "Rata sisal c/3 colas pompón",
  codigo: "920013",
  imagen: "920013.jpg",
  descripcion: "Rata de sisal con tres colas tipo pompón.",
  categoria: "Juguetes",
  precio: 1900,
  cantidad: 1
},
{
  id: 439,
  nombre: "Palito de metal c/rata",
  codigo: "418178",
  imagen: "418178.jpg",
  descripcion: "Juguete tipo palito metálico con rata.",
  categoria: "Juguetes",
  precio: 1690,
  cantidad: 1
},
{
  id: 440,
  nombre: "Palito c/rata y cascabel chico",
  codigo: "418185",
  imagen: "418185.jpg",
  descripcion: "Varita para gato con rata y cascabel pequeño.",
  categoria: "Juguetes",
  precio: 1390,
  cantidad: 1
},
{
  id: 441,
  nombre: "Palito c/rata p/gato",
  codigo: "24228",
  imagen: "24228.jpg",
  descripcion: "Varita para jugar con rata para gato.",
  categoria: "Juguetes",
  precio: 1390,
  cantidad: 1
},
{
  id: 442,
  nombre: "Juguete ventosa c/pluma",
  codigo: "24344",
  imagen: "24344.jpg",
  descripcion: "Juguete con ventosa y pluma para gatos.",
  categoria: "Juguetes",
  precio: 7690,
  cantidad: 1
},
{
  id: 443,
  nombre: "Ratas c/chifle",
  codigo: "100920",
  imagen: "100920.jpg",
  descripcion: "Ratas con sonido tipo chifle.",
  categoria: "Juguetes",
  precio: 3000,
  cantidad: 1
},
{
  id: 444,
  nombre: "Erizo móvil a cuerda",
  codigo: "216285",
  imagen: "216285.jpg",
  descripcion: "Juguete de erizo móvil a cuerda.",
  categoria: "Juguetes",
  precio: 3290,
  cantidad: 1
},
{
  id: 445,
  nombre: "Rata c/cola esponjosa",
  codigo: "18610",
  imagen: "18610.jpg",
  descripcion: "Rata para gato con cola esponjosa.",
  categoria: "Juguetes",
  precio: 3450,
  cantidad: 1
},
{
  id: 446,
  nombre: "Hierba gatera con adhesivo",
  codigo: "814508",
  imagen: "814508.jpg",
  descripcion: "Hierba gatera con base adhesiva.",
  categoria: "Juguetes",
  precio: 2590,
  cantidad: 1
},
{
  id: 447,
  nombre: "Hierba gatera c/palito",
  codigo: "224934",
  imagen: "224934.jpg",
  descripcion: "Hierba gatera montada sobre palito.",
  categoria: "Juguetes",
  precio: 1750,
  cantidad: 1
},
{
  id: 448,
  nombre: "Hierba gatera con oreja",
  codigo: "315504",
  imagen: "315504.jpg",
  descripcion: "Hierba gatera con diseño de oreja.",
  categoria: "Juguetes",
  precio: 2590,
  cantidad: 1
},

{
  id: 449,
  nombre: "Hierba gatera palta",
  codigo: "524917",
  imagen: "524917.jpg",
  descripcion: "Hierba gatera con diseño de palta.",
  categoria: "Juguetes",
  precio: 2600,
  cantidad: 1
},
{
  id: 450,
  nombre: "Hierba gatera ratón con queso",
  codigo: "524924",
  imagen: "524924.jpg",
  descripcion: "Hierba gatera con diseño de ratón y queso.",
  categoria: "Juguetes",
  precio: 2600,
  cantidad: 1
},
{
  id: 451,
  nombre: "Hierba gatera con pluma",
  codigo: "418208",
  imagen: "418208.jpg",
  descripcion: "Hierba gatera con pluma incorporada.",
  categoria: "Juguetes",
  precio: 1350,
  cantidad: 1
},
{
  id: 452,
  nombre: "Collar láser",
  codigo: "909208",
  imagen: "909208.jpg",
  descripcion: "Collar con luz láser integrada para juego interactivo.",
  categoria: "Accesorios",
  precio: 7630,
  cantidad: 1
},
{
  id: 453,
  nombre: "Cat-Gym Amichi",
  codigo: "GYMA",
  imagen: "GYMA.jpg",
  descripcion: "Gimnasio interactivo para gatos con múltiples niveles.",
  categoria: "Rascadores",
  precio: 23900,
  cantidad: 1
},
{
  id: 454,
  nombre: "Rascador interactivo 11x9 cm",
  codigo: "24144",
  imagen: "24144.jpg",
  descripcion: "Rascador interactivo compacto para gatos.",
  categoria: "Rascadores",
  precio: 15627,
  cantidad: 1
},
{
  id: 455,
  nombre: "Rascador modelo 1",
  codigo: "RM1",
  imagen: "RM1.jpg",
  descripcion: "Rascador de cartón modelo 1.",
  categoria: "Rascadores",
  precio: 6330,
  cantidad: 1
},
{
  id: 456,
  nombre: "Rascador modelo 2",
  codigo: "RM2",
  imagen: "RM2.jpg",
  descripcion: "Rascador de cartón modelo 2.",
  categoria: "Rascadores",
  precio: 6330,
  cantidad: 1
},
{
  id: 457,
  nombre: "Rascador modelo 3",
  codigo: "RM3",
  imagen: "RM3.jpg",
  descripcion: "Rascador de cartón modelo 3.",
  categoria: "Rascadores",
  precio: 6330,
  cantidad: 1
},
{
  id: 458,
  nombre: "Rascador modelo 4",
  codigo: "RM4",
  imagen: "RM4.jpg",
  descripcion: "Rascador de cartón modelo 4.",
  categoria: "Rascadores",
  precio: 6330,
  cantidad: 1
},
{
  id: 459,
  nombre: "Rascador modelo 5",
  codigo: "RM5",
  imagen: "RM5.jpg",
  descripcion: "Rascador de cartón modelo 5.",
  categoria: "Rascadores",
  precio: 6330,
  cantidad: 1
},
{
  id: 460,
  nombre: "Rascador queso",
  codigo: "RQ",
  imagen: "RQ.jpg",
  descripcion: "Rascador con forma de queso. 23 x 9 x 15 cm.",
  categoria: "Rascadores",
  precio: 2700,
  cantidad: 1,
  medidas: "23 x 9 x 15 cm"
},
{
  id: 461,
  nombre: "Rascador nube",
  codigo: "RN",
  imagen: "RN.jpg",
  descripcion: "Rascador modelo nube. 9 x 42 x 20 cm.",
  categoria: "Rascadores",
  precio: 9990,
  cantidad: 1,
  medidas: "9 x 42 x 20 cm"
},
{
  id: 462,
  nombre: "Rascador grisín grande",
  codigo: "RGG",
  imagen: "RGG.jpg",
  descripcion: "Rascador modelo grisín grande. 4 x 36 x 20 cm.",
  categoria: "Rascadores",
  precio: 4500,
  cantidad: 1,
  medidas: "4 x 36 x 20 cm"
},
{
  id: 463,
  nombre: "Rascador recto mini",
  codigo: "RRM",
  imagen: "RRM.jpg",
  descripcion: "Rascador recto tamaño mini.",
  categoria: "Rascadores",
  precio: 1980,
  cantidad: 1
},
{
  id: 464,
  nombre: "Rascador tuerca",
  codigo: "RT",
  imagen: "RT.jpg",
  descripcion: "Rascador con forma de tuerca.",
  categoria: "Rascadores",
  precio: 5900,
  cantidad: 1
},
{
  id: 465,
  nombre: "Rascador pampa",
  codigo: "RP",
  imagen: "RP.jpg",
  descripcion: "Rascador modelo pampa.",
  categoria: "Rascadores",
  precio: 9990,
  cantidad: 1
},
{
  id: 466,
  nombre: "Rascador óvalo extra grande",
  codigo: "ROEG",
  imagen: "ROEG.jpg",
  descripcion: "Rascador en forma de óvalo extra grande. 52.5 x 14 x 17.5 cm.",
  categoria: "Rascadores",
  precio: 13500,
  cantidad: 1,
  medidas: "52.5 x 14 x 17.5 cm"
},
{
  id: 467,
  nombre: "Rascador clásico",
  codigo: "RA01",
  imagen: "RA01.jpg",
  descripcion: "Rascador clásico para gatos.",
  categoria: "Rascadores",
  precio: 21150,
  cantidad: 1
},
{
  id: 468,
  nombre: "Rascador con descanso",
  codigo: "RA02",
  imagen: "RA02.jpg",
  descripcion: "Rascador con plataforma de descanso.",
  categoria: "Rascadores",
  precio: 26850,
  cantidad: 1
},
{
  id: 469,
  nombre: "Rascador con respaldo",
  codigo: "RA03",
  imagen: "RA03.jpg",
  descripcion: "Rascador con plataforma y respaldo.",
  categoria: "Rascadores",
  precio: 29300,
  cantidad: 1
},
{
  id: 470,
  nombre: "Rascador 2 niveles con tubo",
  codigo: "RA04",
  imagen: "RA04.jpg",
  descripcion: "Rascador de dos niveles con tubo.",
  categoria: "Rascadores",
  precio: 45350,
  cantidad: 1
},
{
  id: 471,
  nombre: "Rascador 3 niveles con tubo",
  codigo: "RA05",
  imagen: "RA05.jpg",
  descripcion: "Rascador de tres niveles con tubo.",
  categoria: "Rascadores",
  precio: 57890,
  cantidad: 1
},
{
  id: 472,
  nombre: "Rascador 4 niveles con tubo",
  codigo: "RA06",
  imagen: "RA06.jpg",
  descripcion: "Rascador de cuatro niveles con tubo.",
  categoria: "Rascadores",
  precio: 71190,
  cantidad: 1
},
{
  id: 473,
  nombre: "Comedero mini",
  codigo: "CMI",
  imagen: "CMI.jpg",
  descripcion: "Comedero plástico tamaño mini.",
  categoria: "Comederos",
  precio: 400,
  cantidad: 1
},
{
  id: 474,
  nombre: "Comedero chico",
  codigo: "CCH",
  imagen: "CCH.jpg",
  descripcion: "Comedero plástico tamaño chico.",
  categoria: "Comederos",
  precio: 600,
  cantidad: 1
},
{
  id: 475,
  nombre: "Comedero cocker",
  codigo: "CCK",
  imagen: "CCK.jpg",
  descripcion: "Comedero plástico modelo cocker.",
  categoria: "Comederos",
  precio: 1190,
  cantidad: 1
},
{
  id: 476,
  nombre: "Comedero mediano",
  codigo: "CMD",
  imagen: "CMD.jpg",
  descripcion: "Comedero plástico tamaño mediano.",
  categoria: "Comederos",
  precio: 860,
  cantidad: 1
},
{
  id: 477,
  nombre: "Comedero ovejero",
  codigo: "COV",
  imagen: "COV.jpg",
  descripcion: "Comedero plástico modelo ovejero.",
  categoria: "Comederos",
  precio: 1390,
  cantidad: 1
},
{
  id: 478,
  nombre: "Comedero doble rectangular",
  codigo: "CDR",
  imagen: "CDR.jpg",
  descripcion: "Comedero doble rectangular.",
  categoria: "Comederos",
  precio: 1990,
  cantidad: 1
},
{
  id: 479,
  nombre: "Comedero Regu-Diet",
  codigo: "CRDT",
  imagen: "CRDT.jpg",
  descripcion: "Comedero regulador CRDT Regu-Diet.",
  categoria: "Comederos",
  precio: 3500,
  cantidad: 1
},
{
  id: 480,
  nombre: "Comedero con tolva dosificadora para alimento",
  codigo: "CTAL",
  imagen: "CTAL.jpg",
  descripcion: "Comedero con tolva dosificadora para alimento.",
  categoria: "Comederos",
  precio: 5950,
  cantidad: 1
},
{
  id: 481,
  nombre: "Comedero con tolva dosificadora para bebida",
  codigo: "CTBEB",
  imagen: "CTBEB.jpg",
  descripcion: "Comedero con tolva dosificadora para bebida.",
  categoria: "Comederos",
  precio: 5950,
  cantidad: 1
},
{
  id: 482,
  nombre: "Comedero doble con bebedero a rosca",
  codigo: "CDBR",
  imagen: "CDBR.jpg",
  descripcion: "Comedero doble con bebedero a rosca integrado.",
  categoria: "Comederos",
  precio: 5200,
  cantidad: 1
},
{
  id: 483,
  nombre: "Comedero para perros 18 cm",
  codigo: "13000",
  imagen: "13000.jpg",
  descripcion: "Comedero metálico para perros de 18 cm.",
  categoria: "Comederos",
  precio: 2580,
  cantidad: 1,
  medidas: "18 cm"
},
{
  id: 484,
  nombre: "Comedero para perros 22 cm",
  codigo: "13001",
  imagen: "13001.jpg",
  descripcion: "Comedero metálico para perros de 22 cm.",
  categoria: "Comederos",
  precio: 3390,
  cantidad: 1,
  medidas: "22 cm"
},
{
  id: 485,
  nombre: "Comedero para perros 26 cm",
  codigo: "13002",
  imagen: "13002.jpg",
  descripcion: "Comedero para perros de 26 cm.",
  categoria: "Comederos",
  precio: 4250,
  cantidad: 1
},
{
  id: 486,
  nombre: "Comedero para perros 30 cm",
  codigo: "13003",
  imagen: "13003.jpg",
  descripcion: "Comedero para perros de 30 cm.",
  categoria: "Comederos",
  precio: 5880,
  cantidad: 1
},
{
  id: 487,
  nombre: "Comedero para perros 34 cm",
  codigo: "13004",
  imagen: "13004.jpg",
  descripcion: "Comedero para perros de 34 cm.",
  categoria: "Comederos",
  precio: 8130,
  cantidad: 1
},
{
  id: 488,
  nombre: "Comedero con color 15 cm",
  codigo: "002559",
  imagen: "002559.jpg",
  descripcion: "Comedero metálico con base de color de 15 cm.",
  categoria: "Comederos",
  precio: 3200,
  cantidad: 1
},
{
  id: 489,
  nombre: "Comedero con color 18 cm",
  codigo: "002566",
  imagen: "002566.jpg",
  descripcion: "Comedero metálico con base de color de 18 cm.",
  categoria: "Comederos",
  precio: 3890,
  cantidad: 1
},
{
  id: 490,
  nombre: "Comedero con color 22 cm",
  codigo: "002580",
  imagen: "002580.jpg",
  descripcion: "Comedero metálico con base de color de 22 cm.",
  categoria: "Comederos",
  precio: 5350,
  cantidad: 1
},
{
  id: 491,
  nombre: "Comedero con color 26 cm",
  codigo: "002597",
  imagen: "002597.jpg",
  descripcion: "Comedero metálico con base de color de 26 cm.",
  categoria: "Comederos",
  precio: 6450,
  cantidad: 1
},
{
  id: 492,
  nombre: "Comedero con color 30 cm",
  codigo: "002603",
  imagen: "002603.jpg",
  descripcion: "Comedero metálico con base de color de 30 cm.",
  categoria: "Comederos",
  precio: 7900,
  cantidad: 1
},
{
  id: 493,
  nombre: "Comedero con color 34 cm",
  codigo: "002604",
  imagen: "002604.jpg",
  descripcion: "Comedero metálico con base de color de 34 cm.",
  categoria: "Comederos",
  precio: 11100,
  cantidad: 1
},
{
  id: 494,
  nombre: "Comedero doble acero inoxidable 12 cm",
  codigo: "DOBLE12",
  imagen: "DOBLE12.jpg",
  descripcion: "Comedero doble de acero inoxidable de 12 cm.",
  categoria: "Comederos",
  precio: 8500,
  cantidad: 1
},
{
  id: 495,
  nombre: "Dispenser bebedero bidón mascotas",
  codigo: "13072",
  imagen: "13072.jpg",
  descripcion: "Dispenser bebedero para mascotas con bidón. Colores surtidos.",
  categoria: "Bebederos",
  precio: 13790,
  cantidad: 1
},
{
  id: 496,
  nombre: "Dispenser comedero bidón mascotas",
  codigo: "13084",
  imagen: "13084.jpg",
  descripcion: "Dispenser comedero para mascotas con bidón. Colores surtidos.",
  categoria: "Comederos",
  precio: 13790,
  cantidad: 1
},
{
  id: 497,
  nombre: "Bebedero automático Eggys",
  codigo: "EGG-BEB",
  imagen: "EGG-BEB.jpg",
  descripcion: "Bebedero automático Eggys con nivel constante, flotante y válvula con regulación. Apto exteriores con filtro UV.",
  categoria: "Bebederos",
  precio: 31990,
  cantidad: 1
},
{
  id: 498,
  nombre: "Comedero Eggys",
  codigo: "EGG-COM",
  imagen: "EGG-COM.jpg",
  descripcion: "Comedero Eggys para exterior con filtro UV. Capacidad 400 g. Puede colgarse o fijarse al piso.",
  categoria: "Comederos",
  precio: 16700,
  cantidad: 1
},
{
  id: 499,
  nombre: "Contenedor para alimento Eggys 18 kg",
  codigo: "EGG-CONT",
  imagen: "EGG-CONT.jpg",
  descripcion: "Contenedor de alimento Eggys (18 kg). Poliestireno remodelado, atóxico y con filtro UV. No pierde color con el tiempo.",
  categoria: "Contenedores",
  precio: 63374,
  cantidad: 1
},
{
  id: 500,
  nombre: "Piedras sanitarias 10 unidades x 2 kg",
  codigo: "PS-10X2",
  imagen: "PS-10X2.jpg",
  descripcion: "Piedras sanitarias — Bolson 10 unidades x 2 kg.",
  categoria: "Sanitarios",
  precio: 6500,
  cantidad: 1
},
{
  id: 501,
  nombre: "Piedras sanitarias 5 unidades x 4 kg",
  codigo: "PS-5X4",
  imagen: "PS-5X4.jpg",
  descripcion: "Piedras sanitarias — Bolson 5 unidades x 4 kg.",
  categoria: "Sanitarios",
  precio: 6000,
  cantidad: 1
},
{
  id: 502,
  nombre: "Piedras sanitarias 30 kg",
  codigo: "PS-30",
  imagen: "PS-30.jpg",
  descripcion: "Piedras sanitarias — Bolson x 30 kg.",
  categoria: "Sanitarios",
  precio: 9200,
  cantidad: 1
},
{
  id: 503,
  nombre: "Ey! Cat Premium aglomerante 5 kg",
  codigo: "EY5K",
  imagen: "EY5K.jpg",
  descripcion: "Ey! Cat Premium — Aglomerante x 5 kg.",
  categoria: "Sanitarios",
  precio: 5500,
  cantidad: 1
},
{
  id: 504,
  nombre: "Limp Cat lavanda / limón 8 kg",
  codigo: "LIMP8K",
  imagen: "LIMP8K.jpg",
  descripcion: "Limp Cat lavanda o limón — Bentonita aglomerante x 8 kg.",
  categoria: "Sanitarios",
  precio: 6990,
  cantidad: 1
},
{
  id: 505,
  nombre: "LimpCat lavanda / limón 4 kg",
  codigo: "LIMP4K",
  imagen: "LIMP4K.jpg",
  descripcion: "LimpCat lavanda o limón — Aglomerante x 4 kg.",
  categoria: "Sanitarios",
  precio: 4007.52,
  cantidad: 1
},
{
  id: 506,
  nombre: "Limp Cat clásica 4 kg",
  codigo: "LIMPCL4",
  imagen: "LIMPCL4.jpg",
  descripcion: "Limp Cat clásica — Aglomerante x 4 kg.",
  categoria: "Sanitarios",
  precio: 3132,
  cantidad: 1
},
{
  id: 507,
  nombre: "Ecokats Pellets 6 unidades x 2 L",
  codigo: "ECO6X2",
  imagen: "ECO6X2.jpg",
  descripcion: "Ecokats Pellets — 6 unidades x 2 litros.",
  categoria: "Sanitarios",
  precio: 1554,
  cantidad: 1
},
{
  id: 508,
  nombre: "Ecokats Pellets 4 unidades x 4 L",
  codigo: "ECO4X4",
  imagen: "ECO4X4.jpg",
  descripcion: "Ecokats Pellets — 4 unidades x 4 litros.",
  categoria: "Sanitarios",
  precio: 2872,
  cantidad: 1
},
{
  id: 509,
  nombre: "Viruta Poppy Pets x 5 L (10 unidades)",
  codigo: "VIRPP5",
  imagen: "VIRPP5.jpg",
  descripcion: "Viruta Poppy Pets — Pack de 10 unidades x 5 litros.",
  categoria: "Sanitarios",
  precio: 15790,
  cantidad: 1
},
{
  id: 510,
  nombre: "Palita sanitaria",
  codigo: "PAL",
  imagen: "PAL.jpg",
  descripcion: "Pal sanitaria para gatos.",
  categoria: "Sanitarios",
  precio: 572,
  cantidad: 1
},
{
  id: 511,
  nombre: "Bandeja sanitaria mediana",
  codigo: "BSM",
  imagen: "BSM.jpg",
  descripcion: "BSM — Bandeja sanitaria mediana.",
  categoria: "Sanitarios",
  precio: 3095,
  cantidad: 1
},
{
  id: 512,
  nombre: "Bandeja sanitaria jumbo",
  codigo: "BSJ",
  imagen: "BSJ.jpg",
  descripcion: "BSJ — Bandeja sanitaria jumbo.",
  categoria: "Sanitarios",
  precio: 6350,
  cantidad: 1
},
{
  id: 513,
  nombre: "Kit sanitario mediano",
  codigo: "KSM",
  imagen: "KSM.jpg",
  descripcion: "KSM — Kit sanitario mediano.",
  categoria: "Sanitarios",
  precio: 5195,
  cantidad: 1
},
{
  id: 514,
  nombre: "Baño sanitario para gato 45×48 cm",
  codigo: "13034",
  imagen: "13034.jpg",
  descripcion: "Baño sanitario para gato 45×48 cm — Colores surtidos.",
  categoria: "Sanitarios",
  precio: 46900,
  cantidad: 1
},
{
  id: 515,
  nombre: "Litera Netta Close",
  codigo: "854171",
  imagen: "854171.jpg",
  descripcion: "Litera Netta Close para gato.",
  categoria: "Sanitarios",
  precio: 63900,
  cantidad: 1
},
{
  id: 516,
  nombre: "Litera Virgo",
  codigo: "012751",
  imagen: "012751.jpg",
  descripcion: "Litera Virgo para gato.",
  categoria: "Sanitarios",
  precio: 31300,
  cantidad: 1
},
{
  id: 517,
  nombre: "Bolsa con hueso",
  codigo: "006307",
  imagen: "006307.jpg",
  descripcion: "Dispensador de bolsas con forma de hueso.",
  categoria: "Higiene",
  precio: 1300,
  cantidad: 1
},
{
  id: 518,
  nombre: "Bolsita sanitaria x 3 unidades",
  codigo: "000685",
  imagen: "000685.jpg",
  descripcion: "Bolsita sanitaria — Pack x 3 unidades.",
  categoria: "Higiene",
  precio: 1300,
  cantidad: 1
},
{
  id: 519,
  nombre: "Bolsita sanitaria pack x 3 negras (rollos x 10 unidades c/u)",
  codigo: "000686",
  imagen: "000686.jpg",
  descripcion: "Pack de 3 rollos de bolsitas sanitarias negras (10 unidades cada uno).",
  categoria: "Higiene",
  precio: 1090,
  cantidad: 1
},
{
  id: 520,
  nombre: "Toallitas Húmedas Paño Pet x 30 und",
  codigo: "TPP30",
  imagen: "TPP30.jpg",
  descripcion: "Toallitas húmedas Paño Pet x 30 unidades.",
  categoria: "Higiene",
  precio: 3230,
  cantidad: 1
},
{
  id: 521,
  nombre: "Paño Pet Mini x 10 und",
  codigo: "PPM10",
  imagen: "PPM10.jpg",
  descripcion: "Paño Pet Mini x 10 unidades.",
  categoria: "Higiene",
  precio: 8315,
  cantidad: 1
},
{
  id: 522,
  nombre: "Paño Pet Max x 10 und",
  codigo: "PPX10",
  imagen: "PPX10.jpg",
  descripcion: "Paño Pet Max x 10 unidades.",
  categoria: "Higiene",
  precio: 11970,
  cantidad: 1
},
{
  id: 523,
  nombre: "Perro Lac x 250 ml",
  codigo: "PLC250",
  imagen: "PLC250.jpg",
  descripcion: "Perro Lac suplemento lácteo x 250 ml.",
  categoria: "Suplementos",
  precio: 5980,
  cantidad: 1
},
{
  id: 524,
  nombre: "Perro Lac x 500 ml",
  codigo: "PLC500",
  imagen: "PLC500.jpg",
  descripcion: "Perro Lac suplemento lácteo x 500 ml.",
  categoria: "Suplementos",
  precio: 9700,
  cantidad: 1
},
{
  id: 525,
  nombre: "Gato Lac x 350 ml",
  codigo: "GLC350",
  imagen: "GLC350.jpg",
  descripcion: "Gato Lac suplemento lácteo x 350 ml.",
  categoria: "Suplementos",
  precio: 7600,
  cantidad: 1
},
{
  id: 526,
  nombre: "Shampoo Tradicional x 250 ml",
  codigo: "SHT250",
  imagen: "SHT250.jpg",
  descripcion: "Shampoo tradicional para mascotas x 250 ml.",
  categoria: "Higiene",
  precio: 5159.40,
  cantidad: 1
},
{
  id: 527,
  nombre: "Shampoo Cachorro x 250 ml",
  codigo: "SHC250",
  imagen: "SHC250.jpg",
  descripcion: "Shampoo para cachorro x 250 ml.",
  categoria: "Higiene",
  precio: 4681.50,
  cantidad: 1
},
{
  id: 528,
  nombre: "Shampoo Algas x 250 ml",
  codigo: "SHA250",
  imagen: "SHA250.jpg",
  descripcion: "Shampoo con extracto de algas x 250 ml.",
  categoria: "Higiene",
  precio: 4971.90,
  cantidad: 1
},

{
  id: 529,
  nombre: "Shampoo Double x 250 ml",
  codigo: "SHD250",
  imagen: "SHD250.jpg",
  descripcion: "Shampoo Double para mascotas x 250 ml.",
  categoria: "Higiene",
  precio: 5550.30,
  cantidad: 1
},
{
  id: 530,
  nombre: "Shampoo Mix Frutal x 250 ml",
  codigo: "SHMF250",
  imagen: "SHMF250.jpg",
  descripcion: "Shampoo Mix Frutal x 250 ml.",
  categoria: "Higiene",
  precio: 4681.50,
  cantidad: 1
},
{
  id: 531,
  nombre: "Shampoo A2 (Avena) x 250 ml",
  codigo: "SHA2250",
  imagen: "SHA2250.jpg",
  descripcion: "Shampoo con avena A2 x 250 ml.",
  categoria: "Higiene",
  precio: 5339.70,
  cantidad: 1
},
{
  id: 532,
  nombre: "Shampoo Gato Pulguisida x 250 ml",
  codigo: "SHGP250",
  imagen: "SHGP250.jpg",
  descripcion: "Shampoo pulguicida para gato x 250 ml.",
  categoria: "Higiene",
  precio: 5094.10,
  cantidad: 1
},
{
  id: 533,
  nombre: "Shampoo Aqua Ecto x 250 ml",
  codigo: "SHAE250",
  imagen: "SHAE250.jpg",
  descripcion: "Shampoo Aqua Ecto x 250 ml.",
  categoria: "Higiene",
  precio: 5094.10,
  cantidad: 1
},
{
  id: 534,
  nombre: "Shampoo Medic Hipoalergénico x 250 ml",
  codigo: "SHMH250",
  imagen: "SHMH250.jpg",
  descripcion: "Shampoo hipoalergénico Medic x 250 ml.",
  categoria: "Higiene",
  precio: 4817.00,
  cantidad: 1
},
{
  id: 535,
  nombre: "Shampoo Max Color Blanco x 250 ml",
  codigo: "SHMCB250",
  imagen: "SHMCB250.jpg",
  descripcion: "Shampoo Max Color Blanco x 250 ml.",
  categoria: "Higiene",
  precio: 5213.90,
  cantidad: 1
},
{
  id: 536,
  nombre: "Shampoo Max Color Bronce x 250 ml",
  codigo: "SHMCBR250",
  imagen: "SHMCBR250.jpg",
  descripcion: "Shampoo Max Color Bronce x 250 ml.",
  categoria: "Higiene",
  precio: 5213.90,
  cantidad: 1
},
{
  id: 537,
  nombre: "Shampoo Max Color Negro x 250 ml",
  codigo: "SHMCN250",
  imagen: "SHMCN250.jpg",
  descripcion: "Shampoo Max Color Negro x 250 ml.",
  categoria: "Higiene",
  precio: 5213.90,
  cantidad: 1
},
{
  id: 538,
  nombre: "Shampoo Groomers Expert x 250 ml",
  codigo: "SHGE250",
  imagen: "SHGE250.jpg",
  descripcion: "Shampoo Groomers Expert x 250 ml.",
  categoria: "Higiene",
  precio: 4898.10,
  cantidad: 1
},
{
  id: 539,
  nombre: "Enjuague Groomers Expert x 250 ml",
  codigo: "ENJGE250",
  imagen: "ENJGE250.jpg",
  descripcion: "Enjuague Groomers Expert x 250 ml.",
  categoria: "Higiene",
  precio: 6466.20,
  cantidad: 1
},
{
  id: 540,
  nombre: "Enjuague Especial x 250 ml",
  codigo: "ENJESP250",
  imagen: "ENJESP250.jpg",
  descripcion: "Enjuague especial para mascotas x 250 ml.",
  categoria: "Higiene",
  precio: 6421.50,
  cantidad: 1
},
{
  id: 541,
  nombre: "Enjuague Reacondicionador x 250 ml",
  codigo: "ENJREC250",
  imagen: "ENJREC250.jpg",
  descripcion: "Enjuague reacondicionador x 250 ml.",
  categoria: "Higiene",
  precio: 6421.50,
  cantidad: 1
},
{
  id: 542,
  nombre: "Shampoo Antisoborreico x 250 ml",
  codigo: "SHAS250",
  imagen: "SHAS250.jpg",
  descripcion: "Shampoo antisoborreico x 250 ml.",
  categoria: "Higiene",
  precio: 5213.90,
  cantidad: 1
},
{
  id: 543,
  nombre: "Shampoo Amitraz AL 0.25% x 250 ml",
  codigo: "SHAM250",
  imagen: "SHAM250.jpg",
  descripcion: "Shampoo con Amitraz AL 0.25% x 250 ml.",
  categoria: "Higiene",
  precio: 5150.30,
  cantidad: 1
},
{
  id: 544,
  nombre: "Palitos Extrusados",
  codigo: "PALEXT",
  imagen: "PALEXT.jpg",
  descripcion: "Palitos extrusados saborizados para mascotas.",
  categoria: "Snacks",
  precio: 7800,
  cantidad: 1
},
{
  id: 545,
  nombre: "Oreja Común",
  codigo: "ORECOM",
  imagen: "ORECOM.jpg",
  descripcion: "Oreja vacuna común para perros.",
  categoria: "Snacks",
  precio: 570,
  cantidad: 1
},
{
  id: 546,
  nombre: "Oreja Super",
  codigo: "ORESUP",
  imagen: "ORESUP.jpg",
  descripcion: "Oreja vacuna tamaño super.",
  categoria: "Snacks",
  precio: 980,
  cantidad: 1
},
{
  id: 547,
  nombre: "Hueso 3/4",
  codigo: "HUE34",
  imagen: "HUE34.jpg",
  descripcion: "Hueso saborizado tamaño 3/4.",
  categoria: "Snacks",
  precio: 750,
  cantidad: 1
},
{
  id: 548,
  nombre: "Hueso 5/6",
  codigo: "HUE56",
  imagen: "HUE56.jpg",
  descripcion: "Hueso saborizado tamaño 5/6.",
  categoria: "Snacks",
  precio: 1400,
  cantidad: 1
},
{
  id: 549,
  nombre: "Hueso 7/8",
  codigo: "HUE78",
  imagen: "HUE78.jpg",
  descripcion: "Hueso saborizado tamaño 7/8.",
  categoria: "Snacks",
  precio: 2400,
  cantidad: 1
},
{
  id: 550,
  nombre: "Hueso 8/9",
  codigo: "H89",
  imagen: "H89.jpg",
  descripcion: "Hueso 8/9.",
  categoria: "Snacks",
  precio: 2990,
  cantidad: 1
},
{
  id: 551,
  nombre: "Hueso 9/10",
  codigo: "H910",
  imagen: "H910.jpg",
  descripcion: "Hueso 9/10.",
  categoria: "Snacks",
  precio: 3500,
  cantidad: 1
},
{
  id: 552,
  nombre: "Hueso 14/15",
  codigo: "H1415",
  imagen: "H1415.jpg",
  descripcion: "Hueso 14/15.",
  categoria: "Snacks",
  precio: 9500,
  cantidad: 1
},
{
  id: 553,
  nombre: "Roll 4/5",
  codigo: "R45",
  imagen: "R45.jpg",
  descripcion: "Roll 4/5.",
  categoria: "Snacks",
  precio: 1300,
  cantidad: 1
},
{
  id: 554,
  nombre: "Roll 9/10",
  codigo: "R910",
  imagen: "R910.jpg",
  descripcion: "Roll 9/10.",
  categoria: "Snacks",
  precio: 1850,
  cantidad: 1
},
// ---------- SIMPARICA ----------
{
  id: 555,
  nombre: "Simparica 5mg (1,3-2,5 Kg)",
  codigo: "SIM5",
  imagen: "SIM5.jpg",
  descripcion: "Simparica 5mg para perros de 1,3 a 2,5 Kg.",
  categoria: "Simparica",
  precio: 12090,
  cantidad: 1
},
{
  id: 556,
  nombre: "Simparica 10mg (2,5-5 Kg)",
  codigo: "SIM10",
  imagen: "SIM10.jpg",
  descripcion: "Simparica 10mg para perros de 2,5 a 5 Kg.",
  categoria: "Simparica",
  precio: 12945,
  cantidad: 1
},
{
  id: 557,
  nombre: "Simparica 20mg (5-10 Kg)",
  codigo: "SIM20",
  imagen: "SIM20.jpg",
  descripcion: "Simparica 20mg para perros de 5 a 10 Kg.",
  categoria: "Simparica",
  precio: 13320,
  cantidad: 1
},
{
  id: 558,
  nombre: "Simparica 40mg (10-20 Kg)",
  codigo: "SIM40",
  imagen: "SIM40.jpg",
  descripcion: "Simparica 40mg para perros de 10 a 20 Kg.",
  categoria: "Simparica",
  precio: 17270,
  cantidad: 1
},
{
  id: 559,
  nombre: "Simparica 80mg (20-40 Kg)",
  codigo: "SIM80",
  imagen: "SIM80.jpg",
  descripcion: "Simparica 80mg para perros de 20 a 40 Kg.",
  categoria: "Simparica",
  precio: 20230,
  cantidad: 1
},
{
  id: 560,
  nombre: "Simparica 120mg (40-60 Kg)",
  codigo: "SIM120",
  imagen: "SIM120.jpg",
  descripcion: "Simparica 120mg para perros de 40 a 60 Kg.",
  categoria: "Simparica",
  precio: 24120,
  cantidad: 1
},

// ---------- SIMPARICA TRIO ----------
{
  id: 561,
  nombre: "Simparica Trio 1,3 a 2,5 Kg",
  codigo: "TRIO1",
  imagen: "TRIO1.jpg",
  descripcion: "Simparica Trio para perros de 1,3 a 2,5 Kg.",
  categoria: "Simparica Trio",
  precio: 12685,
  cantidad: 1
},
{
  id: 562,
  nombre: "Simparica Trio 2,6 a 5 Kg",
  codigo: "TRIO2",
  imagen: "TRIO2.jpg",
  descripcion: "Simparica Trio para perros de 2,6 a 5 Kg.",
  categoria: "Simparica Trio",
  precio: 13470,
  cantidad: 1
},
{
  id: 563,
  nombre: "Simparica Trio 5,1 a 10 Kg",
  codigo: "TRIO3",
  imagen: "TRIO3.jpg",
  descripcion: "Simparica Trio para perros de 5,1 a 10 Kg.",
  categoria: "Simparica Trio",
  precio: 14235,
  cantidad: 1
},
{
  id: 564,
  nombre: "Simparica Trio 10,1 a 20 Kg",
  codigo: "TRIO4",
  imagen: "TRIO4.jpg",
  descripcion: "Simparica Trio para perros de 10,1 a 20 Kg.",
  categoria: "Simparica Trio",
  precio: 17300,
  cantidad: 1
},
{
  id: 565,
  nombre: "Simparica Trio 20,1 a 40 Kg",
  codigo: "TRIO5",
  imagen: "TRIO5.jpg",
  descripcion: "Simparica Trio para perros de 20,1 a 40 Kg.",
  categoria: "Simparica Trio",
  precio: 20650,
  cantidad: 1
},
{
  id: 566,
  nombre: "Simparica Trio 40,1 a 60 Kg",
  codigo: "TRIO6",
  imagen: "TRIO6.jpg",
  descripcion: "Simparica Trio para perros de 40,1 a 60 Kg.",
  categoria: "Simparica Trio",
  precio: 25775,
  cantidad: 1
},

// ---------- CIDAR ----------
{
  id: 567,
  nombre: "Cidar Gatos de 1,5 a 3 Kg",
  codigo: "CIDG1",
  imagen: "CIDG1.jpg",
  descripcion: "Cidar para gatos de 1,5 a 3 Kg.",
  categoria: "Cidar",
  precio: 13935,
  cantidad: 1
},
{
  id: 568,
  nombre: "Cidar Gatos de 3,1 a 6 Kg",
  codigo: "CIDG2",
  imagen: "CIDG2.jpg",
  descripcion: "Cidar para gatos de 3,1 a 6 Kg.",
  categoria: "Cidar",
  precio: 14100,
  cantidad: 1
},
{
  id: 569,
  nombre: "Cidar Perros de 1,5 a 3 Kg",
  codigo: "CIDP1",
  imagen: "CIDP1.jpg",
  descripcion: "Cidar para perros de 1,5 a 3 Kg.",
  categoria: "Cidar",
  precio: 13935,
  cantidad: 1
},
{
  id: 570,
  nombre: "Cidar Perros de 3,1 a 6 Kg",
  codigo: "CIDP2",
  imagen: "CIDP2.jpg",
  descripcion: "Cidar para perros de 3,1 a 6 Kg.",
  categoria: "Cidar",
  precio: 14910,
  cantidad: 1
},
{
  id: 571,
  nombre: "Cidar Perros de 6,1 a 12 Kg",
  codigo: "CIDP3",
  imagen: "CIDP3.jpg",
  descripcion: "Cidar para perros de 6,1 a 12 Kg.",
  categoria: "Cidar",
  precio: 16500,
  cantidad: 1
},
{
  id: 572,
  nombre: "Cidar Perros de 12,1 a 25 Kg",
  codigo: "CIDP4",
  imagen: "CIDP4.jpg",
  descripcion: "Cidar para perros de 12,1 a 25 Kg.",
  categoria: "Cidar",
  precio: 21645,
  cantidad: 1
},
{
  id: 573,
  nombre: "Cidar Perros de 25,1 a 50 Kg",
  codigo: "CIDP5",
  imagen: "CIDP5.jpg",
  descripcion: "Cidar para perros de 25,1 a 50 Kg.",
  categoria: "Cidar",
  precio: 25790,
  cantidad: 1
},
{
  id: 575,
  nombre: "NexGard Spectra H-7,5 Kg",
  codigo: "NGS75",
  imagen: "NGS75.jpg",
  descripcion: "NexGard Spectra para perros hasta 7,5 kg.",
  categoria: "Antiparasitarios",
  precio: 21260,
  cantidad: 1
},
{
  id: 576,
  nombre: "NexGard Spectra H-15 Kg",
  codigo: "NGS15",
  imagen: "NGS15.jpg",
  descripcion: "NexGard Spectra para perros hasta 15 kg.",
  categoria: "Antiparasitarios",
  precio: 23540,
  cantidad: 1
},
{
  id: 577,
  nombre: "NexGard Spectra H-30 Kg",
  codigo: "NGS30",
  imagen: "NGS30.jpg",
  descripcion: "NexGard Spectra para perros hasta 30 kg.",
  categoria: "Antiparasitarios",
  precio: 30865,
  cantidad: 1
},
{
  id: 578,
  nombre: "NexGard Spectra H-60 Kg",
  codigo: "NGS60",
  imagen: "NGS60.jpg",
  descripcion: "NexGard Spectra para perros hasta 60 kg.",
  categoria: "Antiparasitarios",
  precio: 36780,
  cantidad: 1
},
{
  id: 579,
  nombre: "Fipro 1-10 Kg",
  codigo: "FIP10",
  imagen: "FIP10.jpg",
  descripcion: "Fiproline para perros de 1 a 10 kg.",
  categoria: "Antiparasitarios",
  precio: 4992,
  cantidad: 1
},
{
  id: 580,
  nombre: "Fipro 11-20 Kg",
  codigo: "FIP20",
  imagen: "FIP20.jpg",
  descripcion: "Fiproline para perros de 11 a 20 kg.",
  categoria: "Antiparasitarios",
  precio: 5358,
  cantidad: 1
},
{
  id: 581,
  nombre: "Fipro 21-40 Kg",
  codigo: "FIP40",
  imagen: "FIP40.jpg",
  descripcion: "Fiproline para perros de 21 a 40 kg.",
  categoria: "Antiparasitarios",
  precio: 7752,
  cantidad: 1
},
{
  id: 582,
  nombre: "Fipro 41-60 Kg",
  codigo: "FIP60",
  imagen: "FIP60.jpg",
  descripcion: "Fiproline para perros de 41 a 60 kg.",
  categoria: "Antiparasitarios",
  precio: 9852,
  cantidad: 1
},
{
  id: 583,
  nombre: "Fipro Gatos",
  codigo: "FIPG",
  imagen: "FIPG.jpg",
  descripcion: "Fiproline para gatos.",
  categoria: "Antiparasitarios",
  precio: 4488,
  cantidad: 1
},
{
  id: 584,
  nombre: "Fit Up 2-10 Kg",
  codigo: "FU10",
  imagen: "FU10.jpg",
  descripcion: "Fit Up (Fipronil + Metopreno) para perros de 2 a 10 kg.",
  categoria: "Antiparasitarios",
  precio: 3410,
  cantidad: 1
},
{
  id: 585,
  nombre: "Fit Up 10-20 Kg",
  codigo: "FU20",
  imagen: "FU20.jpg",
  descripcion: "Fit Up para perros de 10 a 20 kg.",
  categoria: "Antiparasitarios",
  precio: 3995,
  cantidad: 1
},
{
  id: 586,
  nombre: "Fit Up 20-40 Kg",
  codigo: "FU40",
  imagen: "FU40.jpg",
  descripcion: "Fit Up para perros de 20 a 40 kg.",
  categoria: "Antiparasitarios",
  precio: 4875,
  cantidad: 1
},
{
  id: 587,
  nombre: "Fit Up 40-60 Kg",
  codigo: "FU60",
  imagen: "FU60.jpg",
  descripcion: "Fit Up para perros de 40 a 60 kg.",
  categoria: "Antiparasitarios",
  precio: 5410,
  cantidad: 1
},
{
  id: 588,
  nombre: "Fit Up Gatos",
  codigo: "FUG",
  imagen: "FUG.jpg",
  descripcion: "Fit Up para gatos.",
  categoria: "Antiparasitarios",
  precio: 3390,
  cantidad: 1
},
{
  id: 589,
  nombre: "Spot Max 2-10 Kg",
  codigo: "SM10",
  imagen: "SM10.jpg",
  descripcion: "Spot Max para perros de 2 a 10 kg.",
  categoria: "Antiparasitarios",
  precio: 2927.66,
  cantidad: 1
},
{
  id: 590,
  nombre: "Spot Max 11-20 Kg",
  codigo: "SM20",
  imagen: "SM20.jpg",
  descripcion: "Spot Max para perros de 11 a 20 kg.",
  categoria: "Antiparasitarios",
  precio: 3275.85,
  cantidad: 1
},
{
  id: 591,
  nombre: "Spot Max 21-40 Kg",
  codigo: "SM40",
  imagen: "SM40.jpg",
  descripcion: "Spot Max para perros de 21 a 40 kg.",
  categoria: "Antiparasitarios",
  precio: 4492.92,
  cantidad: 1
},
{
  id: 592,
  nombre: "Spot Max 40-60 Kg",
  codigo: "SM60",
  imagen: "SM60.jpg",
  descripcion: "Spot Max para perros de 40 a 60 kg.",
  categoria: "Antiparasitarios",
  precio: 4883.07,
  cantidad: 1
},
{
  id: 593,
  nombre: "Spot Max Gatos H-4 Kg",
  codigo: "SMG4",
  imagen: "SMG4.jpg",
  descripcion: "Spot Max para gatos hasta 4 kg.",
  categoria: "Antiparasitarios",
  precio: 2874.94,
  cantidad: 1
},
{
  id: 594,
  nombre: "Spot Max Gatos H-8 Kg",
  codigo: "SMG8",
  imagen: "SMG8.jpg",
  descripcion: "Spot Max para gatos hasta 8 kg.",
  categoria: "Antiparasitarios",
  precio: 3034.00,
  cantidad: 1
},
{
  id: 595,
  nombre: "Frontline 2-10 Kg",
  codigo: "FL10",
  imagen: "FL10.jpg",
  descripcion: "Frontline fipronil para perros de 2 a 10 kg.",
  categoria: "Antiparasitarios",
  precio: 5150,
  cantidad: 1
},
{
  id: 596,
  nombre: "Frontline 10-20 Kg",
  codigo: "FL20",
  imagen: "FL20.jpg",
  descripcion: "Frontline para perros de 10 a 20 kg.",
  categoria: "Antiparasitarios",
  precio: 5590,
  cantidad: 1
},
{
  id: 597,
  nombre: "Frontline 20-40 Kg",
  codigo: "FL40",
  imagen: "FL40.jpg",
  descripcion: "Frontline para perros de 20 a 40 kg.",
  categoria: "Antiparasitarios",
  precio: 7220,
  cantidad: 1
},
{
  id: 598,
  nombre: "Frontline Gatos",
  codigo: "FLG",
  imagen: "FLG.jpg",
  descripcion: "Frontline para gatos.",
  categoria: "Antiparasitarios",
  precio: 4700,
  cantidad: 1
},
{
  id: 599,
  nombre: "Frontline Spray x 250 cc",
  codigo: "FLS250",
  imagen: "FLS250.jpg",
  descripcion: "Frontline spray de 250 cc.",
  categoria: "Antiparasitarios",
  precio: 25750,
  cantidad: 1
},
{
  id: 600,
  nombre: "Meltra Gold hasta 20 Kg",
  codigo: "MG20",
  imagen: "MG20.jpg",
  descripcion: "Meltra Gold para perros hasta 20 kg.",
  categoria: "Antiparasitarios",
  precio: 3450,
  cantidad: 1
},
{
  id: 601,
  nombre: "Meltra Gold hasta 60 Kg",
  codigo: "MG60",
  imagen: "MG60.jpg",
  descripcion: "Meltra Gold para perros hasta 60 kg.",
  categoria: "Antiparasitarios",
  precio: 5700,
  cantidad: 1
},
{
  id: 602,
  nombre: "Meltra Suspensión",
  codigo: "MGSUS",
  imagen: "MGSUS.jpg",
  descripcion: "Meltra presentación en suspensión.",
  categoria: "Antiparasitarios",
  precio: 6550,
  cantidad: 1
},
{
  id: 603,
  nombre: "Meltra Spot On Gatitos hasta 4 kg",
  codigo: "MSO4",
  imagen: "MSO4.jpg",
  descripcion: "Meltra Spot On para gatos hasta 4 kg.",
  categoria: "Antiparasitarios",
  precio: 5500,
  cantidad: 1
},
{
  id: 604,
  nombre: "Meltra Spot On Gatos 4-8 kg",
  codigo: "MSO8",
  imagen: "MSO8.jpg",
  descripcion: "Meltra Spot On para gatos de 4 a 8 kg.",
  categoria: "Antiparasitarios",
  precio: 6200,
  cantidad: 1
},
{
  id: 605,
  nombre: "Feline Full Spot 1-2 Kg",
  codigo: "FFS2",
  imagen: "FFS2.jpg",
  descripcion: "Feline Full Spot para gatos de 1 a 2 kg.",
  categoria: "Antiparasitarios",
  precio: 16120,
  cantidad: 1
},
{
  id: 606,
  nombre: "Feline Full Spot 2,1-5 Kg",
  codigo: "FFS5",
  imagen: "FFS5.jpg",
  descripcion: "Feline Full Spot para gatos de 2,1 a 5 kg.",
  categoria: "Antiparasitarios",
  precio: 19620,
  cantidad: 1
},
{
  id: 607,
  nombre: "Feline Full Spot +5 Kg",
  codigo: "FFSPLUS",
  imagen: "FFSPLUS.jpg",
  descripcion: "Feline Full Spot para gatos de más de 5 kg.",
  categoria: "Antiparasitarios",
  precio: 21000,
  cantidad: 1
},
{
  id: 608,
  nombre: "TEA 327 Collar Gatos",
  codigo: "TEAG",
  imagen: "TEAG.jpg",
  descripcion: "Collar TEA 327 para gatos.",
  categoria: "Antiparasitarios",
  precio: 8320,
  cantidad: 1
},
{
  id: 609,
  nombre: "TEA 327 Collar Cachorros",
  codigo: "TEAC",
  imagen: "TEAC.jpg",
  descripcion: "Collar TEA 327 para cachorros.",
  categoria: "Antiparasitarios",
  precio: 8325,
  cantidad: 1
},
{
  id: 610,
  nombre: "TEA 327 Collar Mediano y Chico",
  codigo: "TEAMC",
  imagen: "TEAMC.jpg",
  descripcion: "Collar TEA 327 para perros chicos y medianos.",
  categoria: "Antiparasitarios",
  precio: 8900,
  cantidad: 1
},
{
  id: 611,
  nombre: "TEA 327 Collar Grande",
  codigo: "TEAGD",
  imagen: "TEAGD.jpg",
  descripcion: "Collar TEA 327 tamaño grande.",
  categoria: "Antiparasitarios",
  precio: 9190,
  cantidad: 1
},
{
  id: 612,
  nombre: "TEA 327 Collar XL",
  codigo: "TEAXL",
  imagen: "TEAXL.jpg",
  descripcion: "Collar TEA 327 tamaño XL.",
  categoria: "Antiparasitarios",
  precio: 9350,
  cantidad: 1
},
{
  id: 613,
  nombre: "TEA 327 Aerosol",
  codigo: "TEAERO",
  imagen: "TEAERO.jpg",
  descripcion: "Aerosol TEA 327.",
  categoria: "Antiparasitarios",
  precio: 9900,
  cantidad: 1
},
{
  id: 614,
  nombre: "TEA 327 Polvo Talco 80 g",
  codigo: "TEATALC",
  imagen: "TEATALC.jpg",
  descripcion: "Talco antipulgas TEA 327 (80 g).",
  categoria: "Antiparasitarios",
  precio: 5700,
  cantidad: 1
},
{
  id: 615,
  nombre: "TEA 327 Líquido x 120 ml",
  codigo: "TEALIQ",
  imagen: "TEALIQ.jpg",
  descripcion: "Solución líquida TEA 327 (120 ml).",
  categoria: "Antiparasitarios",
  precio: 6200,
  cantidad: 1
},
{
  id: 616,
  nombre: "Basken Suspensión x 15 ml",
  codigo: "BASKSUS15",
  imagen: "BASKSUS15.jpg",
  descripcion: "Suspensión antiparasitaria Basken de 15 ml.",
  categoria: "Antiparasitarios",
  precio: 4080,
  cantidad: 1
},
{
  id: 617,
  nombre: "Basken Plus Chicos x 4 Comprimidos",
  codigo: "BASKPLCH4",
  imagen: "BASKPLCH4.jpg",
  descripcion: "Basken Plus para perros chicos, caja con 4 comprimidos.",
  categoria: "Antiparasitarios",
  precio: 2000,
  cantidad: 1
},
{
  id: 618,
  nombre: "Basken 4 Active Perro Chico 10 Kg",
  codigo: "BASK4AC10",
  imagen: "BASK4AC10.jpg",
  descripcion: "Basken 4 Active para perro chico hasta 10 kg.",
  categoria: "Antiparasitarios",
  precio: 2270,
  cantidad: 1
},
{
  id: 619,
  nombre: "Basken Doble 20 x 4 Comprimidos",
  codigo: "BASKD20X4",
  imagen: "BASKD20X4.jpg",
  descripcion: "Basken Doble 20 mg, caja con 4 comprimidos.",
  categoria: "Antiparasitarios",
  precio: 2060,
  cantidad: 1
},
{
  id: 620,
  nombre: "Basken Doble 40 x 4 Comprimidos",
  codigo: "BASKD40X4",
  imagen: "BASKD40X4.jpg",
  descripcion: "Basken Doble 40 mg, caja con 4 comprimidos.",
  categoria: "Antiparasitarios",
  precio: 3312,
  cantidad: 1
},
{
  id: 621,
  nombre: "Basken Doble 60 x 3 Comprimidos",
  codigo: "BASKD60X3",
  imagen: "BASKD60X3.jpg",
  descripcion: "Basken Doble 60 mg, caja con 3 comprimidos.",
  categoria: "Antiparasitarios",
  precio: 4197,
  cantidad: 1
},
{
  id: 622,
  nombre: "Basken Plus Gatos x 4 Comprimidos",
  codigo: "BASKPLGAT4",
  imagen: "BASKPLGAT4.jpg",
  descripcion: "Basken Plus para gatos, caja con 4 comprimidos.",
  categoria: "Antiparasitarios",
  precio: 2145,
  cantidad: 1
},
{
  id: 623,
  nombre: "Apto Plus Antiparasitario x 160 Comprimidos",
  codigo: "APTAPL160",
  imagen: "APTAPL160.jpg",
  descripcion: "Apto Plus antiparasitario en envase de 160 comprimidos.",
  categoria: "Antiparasitarios",
  precio: 58700,
  cantidad: 1
},
{
  id: 624,
  nombre: "Apto Plus Talco 150 g",
  codigo: "APTATAL150",
  imagen: "APTATAL150.jpg",
  descripcion: "Talco antiparasitario Apto Plus de 150 g.",
  categoria: "Antiparasitarios",
  precio: 5975,
  cantidad: 1
},
{
  id: 625,
  nombre: "Bicheron Insecticida Frasco x 50 g",
  codigo: "BICH50",
  imagen: "BICH50.jpg",
  descripcion: "Bicheron insecticida con cipermetrina 20%. Frasco 50 g.",
  categoria: "Antiparasitarios",
  precio: 10680,
  cantidad: 1
},
{
  id: 626,
  nombre: "Bactrovet Plata x 440 ml",
  codigo: "BACTVPL440",
  imagen: "BACTVPL440.jpg",
  descripcion: "Bactrovet Plata en presentación de 440 ml.",
  categoria: "Antiparasitarios",
  precio: 11090,
  cantidad: 1
},
{
  id: 627,
  nombre: "Bactrovet Oro x 260 g / 420 ml",
  codigo: "BACTVORO",
  imagen: "BACTVORO.jpg",
  descripcion: "Bactrovet Oro presentación 260 g o 420 ml.",
  categoria: "Antiparasitarios",
  precio: 10900,
  cantidad: 1
},
{
  id: 628,
  nombre: "DKL-5 Plata x 440 ml",
  codigo: "DKL5440",
  imagen: "DKL5440.jpg",
  descripcion: "DKL-5 Plata aerosol de 440 ml.",
  categoria: "Antiparasitarios",
  precio: 11360,
  cantidad: 1
},
{
  id: 629,
  nombre: "Kualcos Talco Perfos x 100 g",
  codigo: "KUALTAL100",
  imagen: "KUALTAL100.jpg",
  descripcion: "Kualcos talco Perfos de 100 g.",
  categoria: "Antiparasitarios",
  precio: 3900,
  cantidad: 1
},
{
  id: 630,
  nombre: "Seda Gotas Lamar",
  codigo: "LAMARGOT",
  imagen: "LAMARGOT.jpg",
  descripcion: "Seda Gotas de la marca Lamar.",
  categoria: "Cuidado General",
  precio: 3205,
  cantidad: 1
},
{
  id: 631,
  nombre: "Acarox Concentrado x 120 ml",
  codigo: "ACARX120",
  imagen: "ACARX120.jpg",
  descripcion: "Concentrado Acarox de 120 ml.",
  categoria: "Antiparasitarios",
  precio: 10680,
  cantidad: 1
},
{
  id: 632,
  nombre: "Acarox Ambiental x 100 ml",
  codigo: "ACARXAMB100",
  imagen: "ACARXAMB100.jpg",
  descripcion: "Acarox ambiental presentación 100 ml.",
  categoria: "Antiparasitarios",
  precio: 12760,
  cantidad: 1
},
{
  id: 633,
  nombre: "A Otra Parte Granulado x 600 g",
  codigo: "AOPGRAN600",
  imagen: "AOPGRAN600.jpg",
  descripcion: "Repelente A Otra Parte en formato granulado 600 g.",
  categoria: "Repelentes",
  precio: 29220,
  cantidad: 1
},
{
  id: 634,
  nombre: "A Otra Parte Concentrado x 1 L",
  codigo: "AOPCONC1L",
  imagen: "AOPCONC1L.jpg",
  descripcion: "Repelente concentrado A Otra Parte de 1 litro.",
  categoria: "Repelentes",
  precio: 24140,
  cantidad: 1
},
{
  id: 635,
  nombre: "A Otra Parte Aplicación Directa x 1 L",
  codigo: "AOPDIR1L",
  imagen: "AOPDIR1L.jpg",
  descripcion: "Repelente A Otra Parte listo para usar, 1 litro.",
  categoria: "Repelentes",
  precio: 21960,
  cantidad: 1
},
{
  id: 636,
  nombre: "Dental Plax Antiséptico Bucal x 250 ml",
  codigo: "DENTPLAX250",
  imagen: "DENTPLAX250.jpg",
  descripcion: "Antiséptico bucal Dental Plax de 250 ml.",
  categoria: "Higiene",
  precio: 4615,
  cantidad: 1
},
{
  id: 637,
  nombre: "Pulgar Repelente x 150 ml",
  codigo: "PULGAR150",
  imagen: "PULGAR150.jpg",
  descripcion: "Pulgar repelente en nuevo envase de 150 ml.",
  categoria: "Repelentes",
  precio: 16500,
  cantidad: 1
},
{
  id: 638,
  nombre: "Dog Out Repelente x 500 cc",
  codigo: "DOGOUT500",
  imagen: "DOGOUT500.jpg",
  descripcion: "Repelente Dog Out en presentación de 500 cc.",
  categoria: "Repelentes",
  precio: 6690,
  cantidad: 1
},
{
  id: 639,
  nombre: "Fit Ambiental Solución 120 ml",
  codigo: "FITAMB120",
  imagen: "FITAMB120.jpg",
  descripcion: "Solución Fit Ambiental de 120 ml.",
  categoria: "Ambientales",
  precio: 5600,
  cantidad: 1
},
{
  id: 640,
  nombre: "Total Full CG Suspensión x 15 ml",
  codigo: "TFULLCG15",
  imagen: "TFULLCG15.jpg",
  descripcion: "Suspensión Total Full CG de 15 ml.",
  categoria: "Antiparasitarios",
  precio: 8970,
  cantidad: 1
},
{
  id: 641,
  nombre: "Aprax Suspensión x 20 cc",
  codigo: "APRAX20",
  imagen: "APRAX20.jpg",
  descripcion: "Suspensión Aprax de 20 cc.",
  categoria: "Antiparasitarios",
  precio: 5730,
  cantidad: 1
},
{
  id: 642,
  nombre: "Fluido Manchester x 350 cc Lata",
  codigo: "FMAN350",
  imagen: "FMAN350.jpg",
  descripcion: "Fluido Manchester presentación 350 cc en lata.",
  categoria: "Cuidado General",
  precio: 5500,
  cantidad: 1
},
{
  id: 643,
  nombre: "Fluido Manchester x 700 cc Lata",
  codigo: "FMAN700",
  imagen: "FMAN700.jpg",
  descripcion: "Fluido Manchester presentación 700 cc en lata.",
  categoria: "Cuidado General",
  precio: 12950,
  cantidad: 1
},
{
  id: 644,
  nombre: "Tocoferol con Selenio x 500 g",
  codigo: "TOCOSEL500",
  imagen: "TOCOSEL500.jpg",
  descripcion: "Tocoferol con selenio presentación de 500 g.",
  categoria: "Vitaminas",
  precio: 35000,
  cantidad: 1
},
{
  id: 645,
  nombre: "Spineda Pote x 100 g",
  codigo: "SPINEDA100",
  imagen: "SPINEDA100.jpg",
  descripcion: "Crema desinflamante Spineda pote de 100 gramos.",
  categoria: "Cremas",
  precio: 15000,
  cantidad: 1
},
{
  id: 646,
  nombre: "Osspret x 100 g",
  codigo: "OSSPRET100",
  imagen: "OSSPRET100.jpg",
  descripcion: "Crema desinflamante Osspret pote de 100 gramos.",
  categoria: "Cremas",
  precio: 12075,
  cantidad: 1
}


];

@Component({
  selector: 'app-productos',
  standalone: true, // ✅ NECESARIO para que funcione el template y los eventos
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css'] // ✅ plural
})
export class ProductosComponent {

  productos: Products[] = PRODUCTOS_DATA;
  productosFiltrados: Products[] = PRODUCTOS_DATA;
  categorias: string[] = [];

  filtros = {
    nombre: '',
    categoria: '',
    precio: '',
    orden: ''
  };

  constructor(private carritoService: Carro, private favoritosService: Favorito) {
  this.categorias = [...new Set(this.productos.map(p => p.categoria))]
    .sort((a, b) => a.localeCompare(b));
}

  
  aplicarFiltros() {
    this.productosFiltrados = this.productos.filter(p => {

      const normalizar = (txt: string) =>
  txt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const nombreProducto = normalizar(p.nombre);
const nombreFiltro = normalizar(this.filtros.nombre);

// Coincidencia flexible
if (nombreFiltro && !nombreProducto.includes(nombreFiltro)) return false;

      if (this.filtros.categoria && p.categoria !== this.filtros.categoria) return false;

      if (this.filtros.precio === '1' && p.precio >= 1000) return false;
      if (this.filtros.precio === '2' && (p.precio < 1000 || p.precio > 5000)) return false;
      if (this.filtros.precio === '3' && p.precio <= 5000) return false;

      return true;
    });
    if (this.filtros.precio === 'asc') {
    this.productosFiltrados.sort((a, b) => a.precio - b.precio);
  }
  if (this.filtros.precio === 'desc') {
    this.productosFiltrados.sort((a, b) => b.precio - a.precio);
  }
  }

  agregar(producto: Products) {
    this.carritoService.agregarCarrito(producto);
    Swal.fire({
    title: '¡Producto agregado! 🐾',
    html: `El artículo <b>${producto.nombre}</b> fue añadido a tu carrito.`,
    icon: 'success',
    customClass: {
      popup: 'petshop-popup'
    },
    confirmButtonText: '¡Genial!',
    showConfirmButton: true,
    backdrop: `
      rgba(92, 64, 51, 0.4)
      url("https://i.imgur.com/J1pWJtO.png") 
      left top
      no-repeat
    `
  });
  }

  agregarAfav(producto: Products) {
    this.favoritosService.agregarFavorito(producto);
    Swal.fire({
    title: '¡Producto agregado! 🐾',
    html: `El artículo <b>${producto.nombre}</b> fue añadido a favoritos.`,
    icon: 'success',
    customClass: {
      popup: 'petshop-popup'
    },
    confirmButtonText: '¡Genial!',
    showConfirmButton: true,
    backdrop: `
      rgba(92, 64, 51, 0.4)
      url("https://i.imgur.com/J1pWJtO.png") 
      left top
      no-repeat
    `
  });
  }

  getSlides(): Products[][] {
    const destacados = this.productos.filter(p => p.destacado);
    const chunkSize = 3;
    const slides: Products[][] = [];

    for (let i = 0; i < destacados.length; i += chunkSize) {
      slides.push(destacados.slice(i, i + chunkSize));
    }
    return slides;
  }

  getOfertas(): Products[] {
    return this.productos.filter(p => p.oferta);
  }
  getSlidesOfertas() {
  const productos = this.getOfertas(); // tu misma función
  const slides = [];

  for (let i = 0; i < productos.length; i += 3) {
    slides.push(productos.slice(i, i + 3));
  }

  return slides;
}
  
}