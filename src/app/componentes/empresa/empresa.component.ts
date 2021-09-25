import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/modelos/empresa.model';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  providers: [EmpresaService]
})
export class EmpresaComponent implements OnInit {

  public empresasList;
  public empresaIDModel: Empresa;
  buscar;

  constructor(public _empresaService: EmpresaService) {
    this.empresaIDModel = new Empresa('','','','','','');
   }

  ngOnInit(): void {
    this.obtenerEmpresas();
  }

  agregarEmpresa(){
    this._empresaService.agregarEmpresa(this.empresaIDModel).subscribe(
      response => {
        console.log(response);
          Swal.fire({
            icon: 'success',
            title: '!OK!',
            text: 'Empresa Creada Correctamente'
          })
          this.obtenerEmpresas();
      },
      error => {
        console.log(<any>error);
          Swal.fire({
            icon: 'warning',
            title: '!Opppsss....!',
            text: 'La empresa ingresada ya se encuentra creada dentro del sistema'
          })
        }
    )
  }


  obtenerEmpresas(){
    this._empresaService.obtenerEmpresas().subscribe(
      response => {
        console.log(response.empresas);
          this.empresasList = response.empresas
          Swal.fire({
            icon: 'success',
            title: '!OK!',
            text: 'Empresas obtenidas del sistema correctamente'
          })
      },
      error => {
        console.log(<any>error);
        Swal.fire({
          icon: 'warning',
          title: '!Opppsss....!',
          text: 'No se pudo obtener las empresas de la base de datos'
        })
      }
    )
  }


  obtenerEmpresasID(id){
    this._empresaService.obtenerEmpresaID(id).subscribe(
      response => {
        this.empresaIDModel = response.empresaEncontrada;
        console.log(response.empresaEncontrada);
          Swal.fire({
            icon: 'success',
            title: '!OK!',
            text: 'Datos de la empresa ' + [this.empresaIDModel.nombre] + ' obtenidos correctamente'
          })
      }
    )
  }


  editarEmpresa(){
    this._empresaService.editarEmpresa(this.empresaIDModel).subscribe(
      response => {
        console.log(response);
          Swal.fire({
            icon: 'success',
            title: '!OK!',
            text: 'Empresa editada correctamente'
          })
          this.obtenerEmpresas();
      },
        error => {
          console.log(<any>error);
          Swal.fire({
            icon: 'warning',
            title: '!Opppsss.....!',
            text: 'No se ha podido editar la empresa'
          })
        }
    )
  }

  eliminarEmpresa(id){
    this._empresaService.eliminarEmpresa(id).subscribe(
      response => {
        console.log(response)
          Swal.fire({
            icon: 'success',
            title: '!OK!',
            text: 'La empresa ' + [this.empresaIDModel.nombre] + ' se ha eliminado correctamente'
          })
          this.obtenerEmpresas();
      },
          error => {
            console.log(<any>error);
            Swal.fire({
              icon: 'warning',
              title: '!Opppsss....',
              text: 'No se ha podido eliminar la empresa de la base de datos'
            })
          }
    )
  }

}
