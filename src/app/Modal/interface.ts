export interface Products {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  categoria: string;
  precio: number;
  oferta?: boolean;
  destacado?: number;
  precioAnterior?: number;
  cantidad?: number;
  talle?: number;
  talles?:string;
  codigo?: string;
  medidas?: string;
  unidades?: number;
}
