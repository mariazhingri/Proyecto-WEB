import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { HabitacionesComponent } from '../habitaciones/habitaciones.component';



@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css'],

})
export class ConfirmacionComponent {  
  constructor(private dialog: MatDialog){}
  
}
