import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/modelos/empresa.model';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.css'],
  providers: [EmpresaService]
})
export class LoginEmpresaComponent implements OnInit {

  public empresaIDModel: Empresa;
  public token;
  public identidad;

  constructor(
    private _empresaService: EmpresaService,
    public _router: Router
  ) {
    this.empresaIDModel = new Empresa('','','','','','')
  }

  ngOnInit(): void {
  }

  obtenerToken(){
    this._empresaService.loginEmpresa(this.empresaIDModel, 'true').subscribe(
      response =>{
        this.token = response.token;
        localStorage.setItem('token', this.token);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  loginEmpresa(){
    this._empresaService.loginEmpresa(this.empresaIDModel).subscribe(
      response => {
        this.identidad = response.empresaEncontrada;
        localStorage.setItem('identidad', JSON.stringify(this.identidad));
        this.obtenerToken();
        Swal.fire({
          icon: 'success',
          title: '!OK!',
          text: 'Bienvenido ' + [this.empresaIDModel.nombre] + ' a la administracion de sus empleados'
        })
          this._router.navigate(['/inicio'])
      },
        error => {
          Swal.fire({
            icon: 'error',
            title: '!Oppppssss.....',
            text: 'Ingreso de Credenciales incorrecto, intentelo de nuevo'
          })
        }
    )
  }

}
