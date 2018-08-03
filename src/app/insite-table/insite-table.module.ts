import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsiteTableComponent } from './insite-table/insite-table.component';
import { TableHeadComponent } from './table-head/table-head.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InsiteTableComponent, TableHeadComponent],
  exports: [
    InsiteTableComponent
  ]
})
export class InsiteTableModule { }
