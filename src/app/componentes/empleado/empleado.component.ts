import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model'
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers: [UsuarioService]
})
export class EmpleadoComponent implements OnInit {

  buscarNombre;
  buscarPuesto;
  buscarDepartamento;
  public empleadosList;
  public empleadoIDModel: Usuario;

  constructor(public _usuarioService: UsuarioService) {
    this.empleadoIDModel = new Usuario('','','','','','','','');
  }

  ngOnInit(): void {
    this.obtenerEmpleados()
  }

  agregraEmpleado(){
    this._usuarioService.agregraEmpleado(this.empleadoIDModel).subscribe(
      response => {
        console.log(response);
          Swal.fire({
            icon: 'success',
            title: '!OK!',
            text: 'Empleado creado correctamente'
          })
          this.obtenerEmpleados();
      },
      error =>{
        console.log(<any>error);
          Swal.fire({
            icon: 'warning',
            title: 'Opppssss....!',
            text: 'El nombre ingresado ya le pertenece a otro empleado de la empresa'
          })
      }
    )
  }


  obtenerEmpleados(){
    this._usuarioService.obtenerEmpleados().subscribe(
      response => {
        console.log(response.empleados);
          this.empleadosList = response.empleados
            Swal.fire({
              icon: 'success',
              title: '!OK!',
              text: 'Empleados de la empresa obtenidos correctamente'
            })
      },
      error => {
        console.log(<any>error);
          Swal.fire({
            icon: 'warning',
            title: '!Opppsss....!',
            text: 'Ocurrio un problema en la peticion de los empleados'
          })
      }
    )
  }


  obtenerEmpleadoID(id){
    this._usuarioService.obtenerEmpleadoID(id).subscribe(
      response => {
        this.empleadoIDModel = response.empleadoEncontrado;
          console.log(response.empleadoEncontrado);
            Swal.fire({
              icon: 'success',
              title: 'Datos del empleado ' + [this.empleadoIDModel.nombre] + ' obtenidos correctamente',
            })
      }
    )
  }

  editarEmpleado(){
    this._usuarioService.editarEmpleado(this.empleadoIDModel).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Se han actualizado los datos del empleado ' + [this.empleadoIDModel.nombre]
        })
          this.obtenerEmpleados();
      },
        error => {
          console.log(<any>error);
        }
    )
  }


  eliminarUsuario(id){
    this._usuarioService.eliminarEmpleado(id).subscribe(
      response => {
        console.log(response)
          Swal.fire({
            icon: 'success',
            title: 'Se ha eliminado el empleado ' + [this.empleadoIDModel.nombre]
          })
          this.obtenerEmpleados();
      },
        error => {
          console.log(<any>error);
        }
    )
  }
}
