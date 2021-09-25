import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [UsuarioService]
})
export class InicioComponent implements OnInit {

  constructor( public _usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

}
