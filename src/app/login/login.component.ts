import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {NavigationExtras, Router} from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { PaginaPrincipalComponent } from '../pagina-principal/pagina-principal.component';
import { SericiodebtninciosesionService } from '../sericiodebtninciosesion.service';
import { Subscription } from 'rxjs';
import { BusquedaVuelosComponent } from '../busqueda-vuelos/busqueda-vuelos.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  

  alert: boolean = false;
  
  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private headerService: SericiodebtninciosesionService, private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { 
    
  }
  

  onSubmit(){

    if (this.usuarioLogin.value.usuario=="grupo10" && this.usuarioLogin.value.password=="123")
    {      
      
      this.router.navigate(['/BusquedaVuelosComponent']);      
      this.dialogRef.close(); 
      this.headerService.toggleFirstElement(false); // Muestra el primer elemento en el componente "header"
      this.headerService.toggleSecondElement(true); // Oculta el segundo elemento en el componente "header"
      this.headerService.togglemostrarusuario(true);
      this.headerService.setNombreUsuario("grupo10");
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
