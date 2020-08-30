import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondformComponent } from './bondform.component';

describe('BondformComponent', () => {
  let component: BondformComponent;
  let fixture: ComponentFixture<BondformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
