import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertsFormaPagoComponent } from '../Alerts/alerts-forma-pago/alerts-forma-pago.component';


@Component({
  selector: 'app-forma-de-pago',
  templateUrl: './forma-de-pago.component.html',
  styleUrls: ['./forma-de-pago.component.css']
})
export class FormaDePagoComponent implements OnInit {
  
  constructor(private dialogRef: MatDialogRef<FormaDePagoComponent>, private dialog:MatDialog){}

  abrir_alerta(){
    this.dialog.open(AlertsFormaPagoComponent)
    this.dialogRef.close();
  }
  ngOnInit(): void{

  }
}
