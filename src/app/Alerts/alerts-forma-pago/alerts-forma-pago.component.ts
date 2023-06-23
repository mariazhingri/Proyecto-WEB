import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alerts-forma-pago',
  templateUrl: './alerts-forma-pago.component.html',
  styleUrls: ['./alerts-forma-pago.component.css']
})
export class AlertsFormaPagoComponent {

  constructor(private dialogRef: MatDialogRef<AlertsFormaPagoComponent>){}

  cerrar(){
    this.dialogRef.close();
  }
}