import { Pipe, PipeTransform } from '@angular/core';
import { ItemCarrito } from '../models/productoModel';

@Pipe({
  name: 'subtotal',
  standalone: true
})
export class SubtotalPipe implements PipeTransform {
  transform(precio: number, cantidad: number): number {
    return precio * cantidad;
  }
}

@Pipe({
  name: 'totalCarrito',
  standalone: true
})
export class TotalCarritoPipe implements PipeTransform {
  transform(items: ItemCarrito[] | null): number {
    if (!items) {
      return 0;
    }
    return items.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
  }
}