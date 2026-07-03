import { Component, computed, signal } from '@angular/core';

interface ProductoInterface {
  nombre: string,
  precio: number,
  stock: number,
  descripcion: string,
  imagen: string,
  estado: boolean
}

@Component({
  selector: 'app-producto-carrito',
  imports: [],
  templateUrl: './producto-carrito.html',
  styleUrl: './producto-carrito.css',
})
export class ProductoCarrito {

  productos: ProductoInterface[] = [];
  carrito = signal<any>([]);

  constructor(){
    const prods = localStorage.getItem("productos") || "[]";
    this.productos = JSON.parse(prods);
  }

  total = computed(() =>
    this.carrito().reduce((suma: any, p: any) => suma + (p.precio * p.cantidad), 0)
  );

  agregarCarrito(prod: any){
    const p = { nombre: prod.nombre, cantidad: 1, precio: prod.precio, imagen: prod.imagen }
    this.carrito.set([...this.carrito(), p]);
  }
}
