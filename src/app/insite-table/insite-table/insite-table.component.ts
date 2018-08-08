import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
//import { TableHeadComponent } from '../table-head/table-head.component';
import { TableHeaders } from '../interfaces/insite-table-interfaces';



@Component({
  selector: 'insite-table',
  templateUrl: './insite-table.component.html',
  styleUrls: ['./insite-table.component.scss']
})
export class InsiteTableComponent implements OnInit {

   @Input() headers: TableHeaders[];
   @Input() isSticky: boolean = false;
   @Input() tbodyTemplate: TemplateRef<any>;
   @Input() height: number = 90;
  // @Input() data: any;
  @Output() selectedFilter = new EventEmitter();

  data;
  numbers: number[];
  constructor() { 
    this.numbers = Array(60).fill(0).map((xdescribe,i)=>i);
  }

  ngOnInit() {
    console.log("sticky:", this.isSticky);
    this.headers = [
      {
        'title': 'name',
        'filter': true,
      },
      {
        'title': 'email',
        'filter': true,
      }, {
        'title': 'address',
        'filter': true,
      },
      {
        'title': 'age',
        'filter': true,
        'align': 'center'
      }];

    this.data = [
      {
        'name': 'john doe',
        'email': 'jdoe@email.com',
        'address': '123 main street',
        'age': '24'
      },
      {
        'name': 'erica walsh',
        'email': 'ewalsh@email.com',
        'address': '123 main street',
        'age': '57'
      },
      {
        'name': 'jannice ewing',
        'email': 'jannice@email.com',
        'address': '123 main street',
        'age': '32'
      }
    ];
  }

 

public headerFilter(filterValue) {
  console.log('filter value:', filterValue);
  this.selectedFilter.emit(filterValue);
}

}
