import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ReservavuelosService } from '../servicios/reservavuelos.service';



@Component({
  selector: 'app-tabla-back-end',
  templateUrl: './tabla-back-end.component.html',
  styleUrls: ['./tabla-back-end.component.css'],
})
export class TablaBackEndComponent {

  dataSource: any = [];
  displayedColumns: string[] = ['id', 'origen', 'destino', 'fecha_ida','fecha_vuelta','btn_cliqueado'];

  tabla_vuelo = [
    {id: 1, 
      origen: 'Guayaquil', 
      destino: 'Quito', 
      fecha_ida: new Date('2023-08-01'),
      fecha_vuelta: new Date('2023-10-15'),
      btn_cliqueado:'Ida y Vuelta'
    },
    
    {id: 2, 
      origen: 'Cuenca', 
      destino: 'Manta', 
      fecha_ida: new Date('2023-09-02'),
      fecha_vuelta: '',
      btn_cliqueado:'Solo Ida'
    }
  ];

  constructor(private router: Router,private dialog:MatDialog, private service: ReservavuelosService) { 
  
  }



  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
