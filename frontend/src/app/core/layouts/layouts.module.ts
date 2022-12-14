import { MaterialModule } from 'src/app/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MaterialModule,
  ],
  exports: [
    ToolbarComponent,
  ],
})
export class LayoutsModule { }
