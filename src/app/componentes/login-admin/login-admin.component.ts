import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
  providers: [UsuarioService]
})
export class LoginAdminComponent implements OnInit {

  public usuarioIDModel: Usuario;
  public token;
  public identidad;

  constructor(
    private _usuarioService: UsuarioService,
    public _router: Router
  ) {
    this.usuarioIDModel = new Usuario('','','','','','','','');
  }


  ngOnInit(): void {
  }

  obtenerToken(){
    this._usuarioService.loginAdmin(this.usuarioIDModel, 'true').subscribe(
      response =>{
        this.token = response.token;
        localStorage.setItem('token', this.token);
      },
      error =>{
        console.log(<any>error);
      }
    )
  }


  loginAdmin(){
    this._usuarioService.loginAdmin(this.usuarioIDModel).subscribe(
      response => {
        this.identidad = response.usuarioEncontrado;
        localStorage.setItem('identidad', JSON.stringify(this.identidad));
        this.obtenerToken();
        Swal.fire({
          icon: 'success',
          title: '!OK!',
          text: 'Bienvenido ' + [this.usuarioIDModel.usuario] + ' a la administracion de las empresas'
        })
        this._router.navigate(['/inicio'])
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: '!Oppppsss.....',
          text: 'Ingreso de Credenciales incorrecto, intentelo de nuevo'
        })
      }
    )
  }

}
