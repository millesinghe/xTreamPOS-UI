import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteritemComponent } from './enteritem.component';

describe('EnteritemComponent', () => {
  let component: EnteritemComponent;
  let fixture: ComponentFixture<EnteritemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteritemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
