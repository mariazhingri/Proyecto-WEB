import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {NavigationExtras, Router} from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { PaginaPrincipalComponent } from '../pagina-principal/pagina-principal.component';
import { SericiodebtninciosesionService } from '../sericiodebtninciosesion.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.services';
import { Injectable } from '@angular/core';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';
import { BusquedaVuelosComponent } from '../modulo_vuelos/busqueda-vuelos/busqueda-vuelos.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loggedIn: boolean = false;
  usuarioTemp: any;
  hide = true;

  alert: boolean = false;
  
  usuarioLogin = new FormGroup({
    Cedula: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    Transaccion: new FormControl(),
  });

  constructor(private service: AuthService, 
    private headerService: SericiodebtninciosesionService, 
    private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { 
    
  }
     

  onSubmit() 
  {
    this.usuarioLogin.value.Transaccion = "CONSULTAR_USUARIO_LOGIN";
    this.usuarioTemp = this.usuarioLogin.value.Cedula;

    this.service.login(this.usuarioLogin.value as UsuarioInterface).subscribe((data:any) => {
      console.log(data);
      localStorage.setItem('userName',this.usuarioTemp);
      localStorage.setItem('token_value',data);
      this.router.navigate(['/crud']);
      this.dialogRef.close();
    },

    (errorData)  => alert(errorData.error))

    if (
      this.usuarioTemp = this.usuarioLogin.value.Cedula
      ){      
      
      this.router.navigate(['/BusquedaVuelosComponent']);      
      this.dialogRef.close(); 
      this.headerService.toggleFirstElement(false); // Muestra el primer elemento en el componente "header"
      this.headerService.toggleSecondElement(true); // Oculta el segundo elemento en el componente "header"
      this.headerService.togglemostrarusuario(true);
      this.headerService.setNombreUsuario("grupo10");
      this.headerService.togglenavtElement(true);
    }
    else
    {
      this.alert = true;      
      setTimeout(() => this.alert=false, 4000);      
    }
  }

  ngOnInit(): void {
    
  }

/*-------------------------PASAR ELEMENTO-----------------------------------------*/ 

}
