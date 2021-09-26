import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { EmpresaComponent } from './componentes/empresa/empresa.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginAdminComponent } from './componentes/login-admin/login-admin.component';
import { LoginEmpresaComponent } from './componentes/login-empresa/login-empresa.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RestriccionService } from './servicios/restriccion.service';

const routes: Routes = [

  { path: 'loginAdmin', component: LoginAdminComponent},
  { path: 'loginEmpresa', component: LoginEmpresaComponent},
  { path: 'inicio', component: InicioComponent, canActivate:[RestriccionService]},
  { path: 'empresa', component: EmpresaComponent, canActivate:[RestriccionService]},
  { path: 'empleados', component: EmpleadoComponent, canActivate:[RestriccionService]},
  { path: 'productos', component: ProductosComponent, canActivate:[RestriccionService]},
  { path: '**', component: LoginAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
