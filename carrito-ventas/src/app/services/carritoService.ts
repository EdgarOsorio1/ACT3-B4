import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto, ItemCarrito } from '../models/productoModel';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private itemsSubject = new BehaviorSubject<ItemCarrito[]>([]);

  readonly items$: Observable<ItemCarrito[]> = this.itemsSubject.asObservable();

  agregar(producto: Producto): void {
    const items = this.itemsSubject.value;
    const existente = items.find(i => i.producto.id === producto.id);

    if (existente) {
      this.cambiarCantidad(producto.id, existente.cantidad + 1);
    } else {
      this.itemsSubject.next([...items, { producto, cantidad: 1 }]);
    }
  }

  cambiarCantidad(id: number, cantidad: number): void {
    if (cantidad < 1) {
      this.eliminar(id);
      return;
    }
    const nuevos = this.itemsSubject.value.map(i =>
      i.producto.id === id ? { ...i, cantidad } : i
    );
    this.itemsSubject.next(nuevos);
  }

  eliminar(id: number): void {
    const nuevos = this.itemsSubject.value.filter(i => i.producto.id !== id);
    this.itemsSubject.next(nuevos);
  }

  vaciar(): void {
    this.itemsSubject.next([]);
  }
}