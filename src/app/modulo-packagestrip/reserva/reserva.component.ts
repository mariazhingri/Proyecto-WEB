import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormaDePagoComponent } from 'src/app/forma-de-pago/forma-de-pago.component';
import { AuthService } from 'src/app/services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit{

  transporte: any[] = [ 'Tren', 'Avión', 'Carro alquilado', 'Barco'];
  alojamiento: any[] = ['Hotel', 'Apartamento', 'Complejo turístico' ];
  servicio: any[] = ['Actividades', 'Excursiones', 'Guías turísticos' ];
  npersonas: any[] = ['Dos', 'Tres', 'Cuatro' ];


 // startDate: FormControl = new FormControl();
  //endDate: FormControl = new FormControl();

  startDateControl = new FormControl('', Validators.required);
  endDateControl = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  number = new FormControl('', Validators.required);
  cedula = new FormControl('', Validators.required);
  transporteControl = new FormControl('', Validators.required);
  alojamientoControl = new FormControl('', Validators.required);
  servicioControl = new FormControl('', Validators.required);
  npersonasControl = new FormControl('', Validators.required);


  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'Debe introducir su nombre';
    }
    return this.name.hasError('name') ? 'Nombre no válido' : '';

  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Debe introducir su correo electrónico';
    }

    return this.email.hasError('email') ? 'Correo electrónico no válido' : '';
  }


  getErrorMessageNumber() {
  
    if (this.number.hasError('required')) {
      return 'Debe introducir su telefóno';
    }

    return this.number.hasError('password') ? 'Telefóno no válido' : '';
  }

  getErrorMessageCedula() {
  
    if (this.cedula.hasError('required')) {
      return 'Debe introducir su cédula de identidad';
    }

    return this.cedula.hasError('password') ? 'Cédula no válida' : '';
  }
  
  getErrorMessageStartDate() {
    if (this.startDateControl.hasError('required')) {
      return 'Seleccione la fecha de inicio';
    }
    return '';
  }
  
  getErrorMessageEndDate() {
    if (this.endDateControl.hasError('required')) {
      return 'Seleccione la fecha de fin';
    }
    const endDateValue = this.endDateControl.value ? new Date(this.endDateControl.value) : null;
    const endDateLimit = new Date('December 31, 2023');
    endDateLimit.setHours(0, 0, 0, 0);
    if (endDateValue && endDateValue.getTime() > endDateLimit.getTime()) {
      return 'La fecha de fin no puede ser posterior al 31 de diciembre de 2023';
    }
    return '';
  }
  


  constructor(private _formBuilder: FormBuilder, 
    private router: Router,
    private authService: AuthService,
    private dialogRef: MatDialogRef<ReservaComponent>,
    private dialog: MatDialog) {}
    
    allFieldsCompleted: boolean = false;

    reservaForm = new FormGroup({
      name : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      number : new FormControl('', Validators.required),
      cedula : new FormControl('', Validators.required),
      transporte: this.transporteControl,
      alojamiento: this.alojamientoControl,
      servicio: this.servicioControl,
      npersonas: this.npersonasControl,
      startDate: this.startDateControl,
      endDate: this.endDateControl
    });


    cancel() {
      this.dialogRef.close();
    }

  
    openDialog(): void {
      const dialogRef = this.dialog.open(FormaDePagoComponent, {
        panelClass: 'custom-dialog-container',
        width: '500px',
        height: '490px'
      });
    }
    

    ngOnInit() {
  }


}


 /*openDialogPago(): void {
      const dialogRef = this.dialog.open(FormaDePagoComponent, {
        // Opciones de configuración del diálogo
      });
  
      dialogRef.afterClosed().subscribe(result => {
        // Acciones a realizar después de cerrar el diálogo (si es necesario)
      });
    
    }*/