import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarProductoProveedor'
})
export class BuscarProductoProveedorPipe implements PipeTransform {

  transform(productos: any, search: any): any {

    if(search == undefined){
      return productos;
    } else{
      return productos.filter( producto=>{
        return producto.proveedor.toLowerCase().includes(search.toLowerCase())
      })
    }
  }

}
