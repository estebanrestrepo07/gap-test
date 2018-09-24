import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTableInfoComponent } from './car-table-info.component';

describe('CarTableInfoComponent', () => {
  let component: CarTableInfoComponent;
  let fixture: ComponentFixture<CarTableInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTableInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTableInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
