import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
   declarations: [],
   exports:[
     MatToolbarModule,
     MatSelectModule,
     MatCardModule,
     MatGridListModule,
     MatButtonModule,
     MatIconModule,
     MatDialogModule,
     MatExpansionModule,
     ReactiveFormsModule,
   ],
   imports:[
     CommonModule
   ]
})
export class MaterialModule {
  
}