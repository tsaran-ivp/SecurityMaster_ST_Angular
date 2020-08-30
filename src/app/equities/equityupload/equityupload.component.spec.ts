import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityuploadComponent } from './equityupload.component';

describe('EquityuploadComponent', () => {
  let component: EquityuploadComponent;
  let fixture: ComponentFixture<EquityuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
