import { Component, OnInit,Input, Output, EventEmitter, OnDestroy  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SericiodebtninciosesionService } from '../sericiodebtninciosesion.service';
import { Subscription } from 'rxjs';
import { PaginaPrincipalComponent } from '../pagina-principal/pagina-principal.component';
import { BodyComponent } from '../modulo-packagestrip/body/body.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  nombreUsuario!: string;
  showFirstElement: boolean = true;
  showSecondElement: boolean = false;
  mostrarUsuario: boolean = false;
  
  private subscription: Subscription;

  /*---------------------------------------------------*/
  constructor(private router: Router, private dialog:MatDialog, private headerService: SericiodebtninciosesionService) { 

    this.subscription = this.headerService.showFirstElement$.subscribe(show => {
      this.showFirstElement = show;
    });

    this.subscription.add(this.headerService.showSecondElement$.subscribe(show => {
      this.showSecondElement = show;
    }));

    this.subscription = this.headerService.nombreUsuario$.subscribe(nombre => {
      this.nombreUsuario = nombre;
    });
    this.subscription.add(this.headerService.mostrarUsuario$.subscribe(show => {
      this.mostrarUsuario = show;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /*---------------------------------------------------*/
  abrir_alojamiento(){
    this.router.navigate(['/AlojamientoComponent']);
  }
  abrir_vuelos(){
    this.router.navigate(['/BusquedaVuelosComponent']);
  }
  abrir_paquetes_viajes(){
    this.router.navigate(['/PaginaPrincipalComponent']);
  }

  /*---------------------------------------------------*/

  openDialogSesion(){
    this.dialog.open(LoginComponent)
  }

  cerrarsesion(){
    this.router.navigate(['/PaginaPrincipalComponent']);
  }

  ngOnInit(): void {
    /*this.btniniciarsesion = false;
    this.btncerrarsescion = true;*/
    //console.log('entrando data:',this.dataentrante);
  }


//constructor(private router: Router) {}
/*openDialogSesion() {
  this.router.navigate(['/LoginComponent']);
}*/

  /*
  constructor(private router: Router) {}
  abrirlogin() {
    //this.router.navigate(['/LoginComponent']);
    this.mostrarLogin = true;
  }

  inicio() {
    this.router.navigate(['/FormaDePagoComponent']);
    
  }

///////////////////////////////////////////////
  
  alert: boolean = false;
  
  usuarioLogin = new FormGroup({
  usuario: new FormControl('',Validators.required),
  password: new FormControl('', Validators.required)
  
  })
  
  ocultarbtn = true;
  mostrarbtn = false;
  mostrarLogin = false;
  
  onSubmit(){
    
    if (this.usuarioLogin.value.usuario=="jorge" && this.usuarioLogin.value.password=="123")
    {      
      this.router.navigate(['/PaginaPrincipalComponent']);   
      this.mostrarLogin = false;
      this.ocultarbtn = false;
      this.mostrarbtn = true;
    }
    else
    {
      this.alert = true;      
      setTimeout(() => this.alert=false, 4000);      
    }


  }*/


}