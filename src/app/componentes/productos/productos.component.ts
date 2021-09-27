import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto.model';
import { ProductosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductosService]
})
export class ProductosComponent implements OnInit {

  public productosList;
  public productoIDModel: Producto;
  buscarProductoNombre;
  buscarProductoProveedor;
  constructor(public _productoService: ProductosService) {
    this.productoIDModel = new Producto('','','','','','');
   }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  agregarProducto(){
    this._productoService.agregarProducto(this.productoIDModel).subscribe(
      response => {
        console.log(response);
          Swal.fire({
            icon: 'success',
            title: '!OK!',
            text: 'Producto Creador Correctamente'
          })
          this.obtenerProductos();
      },
      error => {
        console.log(<any>error);
          Swal.fire({
            icon: 'warning',
            title: '!Opppsss....!',
            text: 'El producto ingresado ya se encuentra creado dentro de la empresa'
          })
      }
    )
  }

  obtenerProductos(){
    this._productoService.obtenerProductos().subscribe(
      response => {
        console.log(response.productos);
          this.productosList = response.productos
            Swal.fire({
              icon: 'success',
              title: '!OK!',
              text: 'Productos obtenidos correctamente'
            })
      },
      error => {
        console.log(<any>error);
          Swal.fire({
            icon: 'warning',
            title: '!Opppsss....!',
            text: 'No se pudo obtener los productos de la base de datos'
          })
      }
    )
  }


  obtenerProductosID(id){
    this._productoService.obtenerProductosID(id).subscribe(
      response => {
        this.productoIDModel = response.productoEncontrado;
          console.log(response.productoEncontrado);
            Swal.fire({
              icon: 'success',
              title: 'Datos del producto ' + [this.productoIDModel.nombre] + ' obtenidos correctamente'
            })
      }
    )
  }

  ordenarProductosAscendente(){
    this._productoService.ordenarProductosAscendente().subscribe(
      response => {
        console.log(response.productos);
          this.productosList = response.productos
            Swal.fire({
              icon: 'success',
              title: '!OK!',
              text: 'Se ha ordenado de menor a mayor el stock de los productos'
            })
      },
      error => {
        console.log(<any>error);
          Swal.fire({
            icon: 'warning',
            title: '!Opppsss....!',
            text: 'Ocurrio un problema al ordenar el stock'
          })
      }
    )
  }

  ordenarProductosDescendente(){
    this._productoService.ordenarProductosDescendente().subscribe(
      response => {
        console.log(response.productos);
          this.productosList = response.productos
            Swal.fire({
              icon: 'success',
              title: '!OK!',
              text: 'Se ha ordenado de mayor a menor el stock de los productos'
            })
      },
      error => {
        console.log(<any>error);
          Swal.fire({
            icon: 'warning',
            title: '!Opppsss....!',
            text: 'Ocurrio un problema al ordenar el stock'
          })
      }
    )
  }

  venderProducto(){
    this._productoService.venderProducto(this.productoIDModel).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Venta del producto ' + [this.productoIDModel.nombre] + ' efectuada correctamente'
        })
      }
    )
  }

}
