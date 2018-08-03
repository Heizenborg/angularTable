import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsiteTableComponent } from './insite-table.component';

describe('InsiteTableComponent', () => {
  let component: InsiteTableComponent;
  let fixture: ComponentFixture<InsiteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsiteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsiteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
