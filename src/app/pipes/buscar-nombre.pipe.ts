import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarNombre'
})
export class BuscarNombrePipe implements PipeTransform {

  transform(empleados: any, search: any): any {

    if(search == undefined){
      return empleados;
    } else{
      return empleados.filter( empleado=>{
        return empleado.nombre.toLowerCase().includes(search.toLowerCase())
      })
    }
  }
}
