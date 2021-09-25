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
import { EmpleadoComponent } from './componentes/empleado/empleado.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginEmpresaComponent,
    LoginAdminComponent,
    InicioComponent,
    EmpresaComponent,
    EmpleadoComponent,
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
