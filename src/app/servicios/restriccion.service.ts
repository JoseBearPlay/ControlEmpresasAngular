import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class RestriccionService implements CanActivate {

  constructor( private _router:Router, private _usuarioService: UsuarioService) { }

  canActivate(){
    let identity = this._usuarioService.obtenerIdentidad();
    if(identity && (identity.rol === 'Admin' || identity.rol === 'empresa')){
      return true;
    } else{
      this._router.navigate(['/loginAdmin']);
      return false;
    }
  }

}
