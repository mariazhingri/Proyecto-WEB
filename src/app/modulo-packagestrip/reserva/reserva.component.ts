import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, Validators, FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';


interface Persona {
  name: string;
  sound: string;
}

interface Destino {
  name: string;
  sound: string;
}


interface Alojamiento {
  name: string;
  sound: string;
}

interface Servicio {
  name: string;
  sound: string;
}


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit{

  destino: any[] = [ 'Guayaquil', 'Quito', 'Galápagos', 'Cuenca'];
  alojamiento: any[] = ['Hotel', 'Apartamento', 'Complejo turístico' ];
  servicio: any[] = ['Actividades', 'Excursiones', 'Guías turísticos' ];
  npersonas: any[] = ['Uno', 'Dos', 'Tres' ];


  startDate: FormControl = new FormControl();
  endDate: FormControl = new FormControl();
  property1: any;
  
  ngOnInit() {
    this.startDate.setValidators(this.dateValidator());
    this.endDate.setValidators(this.dateValidator());
    //this.startDate.setValue(new Date(2023, 0, 1));
  }


  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  constructor(private _formBuilder: FormBuilder,  
    private dialogRef: MatDialogRef<ReservaComponent>,
    private snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) {}
  
  cancel(){
    this.dialogRef.close();
  }


  
  dateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const startSelectedDate = this.startDate.value;
      const endSelectedDate = control.value;
  
      if (startSelectedDate && endSelectedDate) {
        const startDate = new Date(startSelectedDate);
        const endDate = new Date(endSelectedDate);
  
        if (startDate > endDate) {
          return { invalidDateRange: true }; // La fecha de inicio es posterior a la fecha de fin
        }
  
        if (startDate.toDateString() === endDate.toDateString()) {
          return { sameDate: true }; // Las fechas son iguales
        }
      }
  
      return null; // Las fechas son diferentes y válidas
    };
  }
  

  //constructor() { }

  personaControl = new FormControl<Persona | null>(null, Validators.required);
  numpersona = new FormControl('', Validators.required);
  personas: Persona[] = [
    {name: 'Uno', sound: '1'},
    {name: 'Dos', sound: '2'},
    {name: 'Tres', sound: '3'},
  ];


  destinoControl = new FormControl<Destino | null>(null, Validators.required);
  tiposdestino = new FormControl('', Validators.required);
  destinos: Destino[] = [
    {name: 'Guayaquil', sound: 'Costa'},
    {name: 'Quito', sound: 'Sierra'},
    {name: 'Galápagos', sound: 'Insular'},
    {name: 'Cuenca', sound: 'Sierra'},
  ];


  alojamientoControl = new FormControl<Alojamiento | null>(null, Validators.required);
  tipoalojamiento = new FormControl('', Validators.required);
  alojamientos: Alojamiento[] = [
    {name: 'Hotel', sound: 'Hotel'},
    {name: 'Apartamento', sound: 'Apartment'},
    {name: 'Complejo turístico', sound: 'Resorts'},
  ];


  servicioControl = new FormControl<Servicio | null>(null, Validators.required);
  tiposervicio = new FormControl('', Validators.required);
  servicios: Servicio[] = [
    {name: 'Actividades', sound: 'Tourist guides'},
    {name: 'Excursiones', sound: 'Excursions'},
    {name: 'Guías turísticos', sound: 'Tourist guides'},
  ];


  myControl = new FormControl('');
  options: string[] = ['Uno', 'Dos', 'Tres'];

  //startDate = new Date(2023, 0, 1);

  colorControl = new FormControl('primary' as ThemePalette);

  hide = true;

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  number = new FormControl('', [Validators.required]);
  cedula = new FormControl('', [Validators.required]);


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




}
