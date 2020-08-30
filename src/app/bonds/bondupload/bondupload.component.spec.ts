import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonduploadComponent } from './bondupload.component';

describe('BonduploadComponent', () => {
  let component: BonduploadComponent;
  let fixture: ComponentFixture<BonduploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonduploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonduploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
