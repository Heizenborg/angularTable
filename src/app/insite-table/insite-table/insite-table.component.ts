import { Component, OnInit, Input } from '@angular/core';
import { TableHeadComponent } from '../table-head/table-head.component';
import { TableHeaders } from '../interfaces/insite-table-interfaces';



@Component({
  selector: 'insite-table',
  templateUrl: './insite-table.component.html',
  styleUrls: ['./insite-table.component.scss']
})
export class InsiteTableComponent implements OnInit {

   @Input() headers: TableHeaders[];
  // @Input() data: any;

  data;
  constructor() { }

  ngOnInit() {
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
  
 public generateArray(obj){
    return Object.keys(obj).map((key)=>{ 
      return {key:key, value:obj[key]}});
}

}
