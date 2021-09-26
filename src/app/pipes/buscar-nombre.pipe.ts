import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarNombre'
})
export class BuscarNombrePipe implements PipeTransform {
  transform(usuarios: any, search: any): any {

    if(search == undefined){
      return usuarios;
    } else{
      return usuarios.filter( usuario=>{
        return usuario.departamento
      })
    }
  }
}
