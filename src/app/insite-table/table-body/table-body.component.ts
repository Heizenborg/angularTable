import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "[table-body]",
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {
  @Input() data: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  public rowToCell(obj) {
    return Object.keys(obj).map((key) => {
      return { key: key, value: obj[key]}});
}

}
