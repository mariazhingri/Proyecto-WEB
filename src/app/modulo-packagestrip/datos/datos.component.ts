import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit{


  constructor( private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<DatosComponent>,
    private dialog: MatDialog) {}
    

  close() {
    this.dialogRef.close();
    /*this.snackBar.open('Cerrar', '', {
      duration: 3000
    });*/
  }

  ngOnInit() {
  }
}
