import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityformComponent } from './equityform.component';

describe('EquityformComponent', () => {
  let component: EquityformComponent;
  let fixture: ComponentFixture<EquityformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
