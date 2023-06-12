import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-forma-de-pago',
  templateUrl: './forma-de-pago.component.html',
  styleUrls: ['./forma-de-pago.component.css']
})
export class FormaDePagoComponent implements OnInit {
  
  constructor(private dialogRef: MatDialogRef<FormaDePagoComponent>){}

  ngOnInit(): void{

  }
}
