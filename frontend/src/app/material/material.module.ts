import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';


const MODULES = [
  MatFormFieldModule,
  MatExpansionModule,
  MatDialogModule,
  MatButtonModule,
  MatSliderModule,
  MatSelectModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
  ReactiveFormsModule,
  MatListModule,
  MatCardModule,
  MatPaginatorModule,
  RouterModule,
]



@NgModule({
  declarations: [],
  imports: [MODULES],
  exports: [MODULES],
})
export class MaterialModule { }
