import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../services/carritoService';
import { Producto } from '../models/productoModel';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listaProductosComponent.html',
  styleUrls: ['./listaProductosComponent.css']
})
export class ListaProductosComponent {

  productos: Producto[] = [
    { id: 1, nombre: 'Laptop', precio: 5500 },
    { id: 2, nombre: 'Mouse inalámbrico', precio: 120 },
    { id: 3, nombre: 'Teclado mecánico', precio: 350 },
    { id: 4, nombre: 'Audífonos', precio: 275.5 },
    { id: 5, nombre: 'Monitor 24 pulgadas', precio: 1450 }
  ];

  constructor(private carritoService: CarritoService) { }

  agregar(producto: Producto): void {
    this.carritoService.agregar(producto);
  }
}