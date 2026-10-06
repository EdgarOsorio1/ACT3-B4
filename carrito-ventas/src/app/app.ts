import { Component } from '@angular/core';
import { ListaProductosComponent } from './listaProductos/listaProductosComponent';
import { ResumenCarritoComponent } from './resumenCarrito/resumenCarritoComponent';

@Component({
  selector: 'app-root',
  imports: [ListaProductosComponent, ResumenCarritoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }