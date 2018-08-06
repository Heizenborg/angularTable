import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: "[table-body]",
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss']
})
export class TableBodyComponent implements OnInit {
  @Input() data: any[] = [];

  @Input()
  tbodyTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    console.log("template:", this.tbodyTemplate);
  }

  public rowToCell(obj) {
    return Object.keys(obj).map((key) => {
      return { key: key, value: obj[key]}});
}

}
