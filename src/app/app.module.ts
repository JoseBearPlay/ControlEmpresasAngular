import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginEmpresaComponent } from './componentes/login-empresa/login-empresa.component';
import { LoginAdminComponent } from './componentes/login-admin/login-admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EmpresaComponent } from './componentes/empresa/empresa.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { BuscarNombrePipe } from './pipes/buscar-nombre.pipe';
import { BuscarPuestoPipe } from './pipes/buscar-puesto.pipe';
import { BuscarDepartamentoPipe } from './pipes/buscar-departamento.pipe';
import { ProductosComponent } from './componentes/productos/productos.component';
import { BuscarProductoNombrePipe } from './pipes/buscar-producto-nombre.pipe';
import { BuscarProductoProveedorPipe } from './pipes/buscar-producto-proveedor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginEmpresaComponent,
    LoginAdminComponent,
    InicioComponent,
    EmpresaComponent,
    EmpleadoComponent,
    BuscarNombrePipe,
    BuscarPuestoPipe,
    BuscarDepartamentoPipe,
    ProductosComponent,
    BuscarProductoNombrePipe,
    BuscarProductoProveedorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
