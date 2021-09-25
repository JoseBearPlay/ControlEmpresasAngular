import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public ruta;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   agregraEmpleado(usuario: Usuario): Observable<any>{
     let params = JSON.stringify(usuario);

     let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

     return this._http.post(this.ruta + 'agregraEmpleado', params, {headers: headersToken});
   }

   loginAdmin(usuario, getToken = null): Observable<any>{

    if(getToken != null){
      usuario.getToken = getToken;
    }
    let params = JSON.stringify(usuario);

    return this._http.post(this.ruta + 'loginAdmin', params, {headers: this.headersVariable});
   }

   editarEmpleado(usuario: Usuario): Observable<any>{
     let params = JSON.stringify(usuario);

     let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

     return this._http.put(this.ruta + 'editarEmpleado/' + usuario._id, params, {headers:headersToken});
   }

   eliminarEmpleado(id:String): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.delete(this.ruta + 'eliminarEmpleado/' + id, {headers: headersToken});
   }


   obtenerToken(){
     var token2 = localStorage.getItem('token');

     if(token2 != 'undefined'){
       this.token = token2;
     } else{
       this.token = null;
     }

     return this.token;
   }

   obtenerIdentidad(){
     var identidad2 = JSON.parse(localStorage.getItem('identidad'));
     if(identidad2 != 'undefined'){
       this.identidad = identidad2;
     } else{
       this.identidad = null;
     }

     return this.identidad;
   }
}
