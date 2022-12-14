import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreComponent } from './store/store.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    StoreComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports: [
    ToolbarComponent,
  ],
})
export class LayoutsModule { }
