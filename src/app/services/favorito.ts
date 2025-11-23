import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../Modal/interface';
@Injectable({
  providedIn: 'root',
})
export class Favorito {
   private favoritoSubject = new BehaviorSubject<{producto:Products; cantidad:number}[]>([])
    favorito$=this.favoritoSubject.asObservable();
    
    agregarFavorito(producto:Products){
     const productos=this.favoritoSubject.getValue();
     const encontrado = productos.find(p => p.producto.id === producto.id) 
   
     if(encontrado){
       encontrado.cantidad++
       this.favoritoSubject.next([...productos]);

     }else{
       this.favoritoSubject.next([...productos, {producto,cantidad:1}])
     }
   
   }
   
   eliminarFavoritos(productoId:number){
     const productos = this.favoritoSubject.getValue().filter(p => p.producto.id !== productoId)
     this.favoritoSubject.next(productos)
   }
   vaciarCarrito(){
     this.favoritoSubject.next([])
   }
   



   
     
    constructor() { }
}
