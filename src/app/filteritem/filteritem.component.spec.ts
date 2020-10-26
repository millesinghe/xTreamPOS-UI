import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteritemComponent } from './filteritem.component';

describe('FilteritemComponent', () => {
  let component: FilteritemComponent;
  let fixture: ComponentFixture<FilteritemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteritemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
