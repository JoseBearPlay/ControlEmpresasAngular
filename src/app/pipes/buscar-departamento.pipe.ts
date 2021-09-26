import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarDepartamento'
})
export class BuscarDepartamentoPipe implements PipeTransform {

  transform(empleados: any, search: any): any {

    if(search == undefined){
      return empleados;
    } else{
      return empleados.filter( empleado=>{
        return empleado.departamento.toLowerCase().includes(search.toLowerCase());
      })
    }
  }

}
