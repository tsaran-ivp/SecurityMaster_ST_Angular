import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityshowComponent } from './equityshow.component';

describe('EquityshowComponent', () => {
  let component: EquityshowComponent;
  let fixture: ComponentFixture<EquityshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
