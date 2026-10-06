import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CarritoService } from '../services/carritoService';
import { ItemCarrito } from '../models/productoModel';
import { SubtotalPipe, TotalCarritoPipe } from '../pipes/calculosPipe';

@Component({
  selector: 'app-resumen-carrito',
  standalone: true,
  imports: [CommonModule, SubtotalPipe, TotalCarritoPipe],
  templateUrl: './resumenCarritoComponent.html',
  styleUrls: ['./resumenCarritoComponent.css']
})
export class ResumenCarritoComponent {

  items$: Observable<ItemCarrito[]>;

  constructor(private carritoService: CarritoService) {
    this.items$ = this.carritoService.items$;
  }

  aumentar(item: ItemCarrito): void {
    this.carritoService.cambiarCantidad(item.producto.id, item.cantidad + 1);
  }

  disminuir(item: ItemCarrito): void {
    this.carritoService.cambiarCantidad(item.producto.id, item.cantidad - 1);
  }

  eliminar(id: number): void {
    this.carritoService.eliminar(id);
  }

  vaciar(): void {
    this.carritoService.vaciar();
  }
}