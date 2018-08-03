import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsiteTableComponent } from './insite-table/insite-table.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableBodyComponent } from './table-body/table-body.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InsiteTableComponent, TableHeadComponent, TableBodyComponent],
  exports: [
    InsiteTableComponent
  ]
})
export class InsiteTableModule { }
