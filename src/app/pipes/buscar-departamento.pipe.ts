import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarDepartamento'
})
export class BuscarDepartamentoPipe implements PipeTransform {

  transform(usuarios: any, search: any): any {

    if(search == undefined){
      return usuarios;
    } else{
      return usuarios.filter( usuario=>{
        return usuario.departamento.toLowerCase().includes(search.toLowerCase())
      })
    }
  }

}
