import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondshowComponent } from './bondshow.component';

describe('BondshowComponent', () => {
  let component: BondshowComponent;
  let fixture: ComponentFixture<BondshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
