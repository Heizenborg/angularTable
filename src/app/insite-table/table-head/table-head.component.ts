import { Component, OnInit, Input } from '@angular/core';
import { TableHeaders } from '../interfaces/insite-table-interfaces';

@Component({
  selector: "[table-head]",
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss']
})
export class TableHeadComponent implements OnInit {


  @Input() headers: TableHeaders[];
  constructor() { }

  ngOnInit() {
  }

  public setFilterHeader(filterValue) {
    console.log("filter by ", filterValue);
    for (var item = 0; item < this.headers.length; item++ ) {
      if (this.headers[item].title === filterValue) {
        this.headers[item].descending = !this.headers[item].descending;
      } else {
        this.headers[item].descending = false;
      }
    }
  }

}
