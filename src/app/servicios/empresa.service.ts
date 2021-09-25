import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../modelos/empresa.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
   }

   agregarEmpresa(empresa: Empresa): Observable<any>{
     let params = JSON.stringify(empresa);

     let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

     return this._http.post(this.ruta + 'agregarEmpresa', params, {headers: headersToken});
   }

   obtenerEmpresas(): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.get(this.ruta + 'obtenerEmpresas', {headers: headersToken});
   }

   loginEmpresa(empresa, getToken = null): Observable<any>{
     if(getToken != null){
       empresa.getToken = getToken;
     }

     let params = JSON.stringify(empresa);

     return this._http.post(this.ruta + 'loginEmpresa', params, {headers: this.headersVariable});
   }

   obtenerEmpresaID(id:String): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.get(this.ruta + 'obtenerEmpresaID/' + id, {headers: headersToken});
   }

   editarEmpresa(empresa: Empresa): Observable<any>{
     let params = JSON.stringify(empresa);

     let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

     return this._http.put(this.ruta + 'editarEmpresa/' + empresa._id, params, {headers: headersToken});
   }

   eliminarEmpresa(id:String): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.delete(this.ruta + 'eliminarEmpresa/' + id, {headers: headersToken});
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
    }else{
      this.identidad = null;
    }

    return this.identidad;
  }
}
