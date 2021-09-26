import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarProductoNombre'
})
export class BuscarProductoNombrePipe implements PipeTransform {

  transform(productos: any, search: any): any {

    if(search == undefined){
      return productos;
    } else{
      return productos.filter( producto=>{
        return producto.nombre.toLowerCase().includes(search.toLowerCase())
      })
    }
  }

}
