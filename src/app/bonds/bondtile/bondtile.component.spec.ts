import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondtileComponent } from './bondtile.component';

describe('BondtileComponent', () => {
  let component: BondtileComponent;
  let fixture: ComponentFixture<BondtileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondtileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
