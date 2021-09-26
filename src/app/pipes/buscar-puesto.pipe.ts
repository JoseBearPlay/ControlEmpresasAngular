import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarPuesto'
})
export class BuscarPuestoPipe implements PipeTransform {

  transform(empleados: any, buscar: any): any {

    if(buscar == undefined){
      return empleados;
    } else{
      return empleados.filter( empleado=>{
        return empleado.puesto.toLowerCase().includes(buscar.toLowerCase())
      })
    }
  }

}
