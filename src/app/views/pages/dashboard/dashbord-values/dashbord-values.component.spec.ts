import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordValuesComponent } from './dashbord-values.component';

describe('DashbordValuesComponent', () => {
  let component: DashbordValuesComponent;
  let fixture: ComponentFixture<DashbordValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
