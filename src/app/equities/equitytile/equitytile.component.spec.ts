import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquitytileComponent } from './equitytile.component';

describe('EquitytileComponent', () => {
  let component: EquitytileComponent;
  let fixture: ComponentFixture<EquitytileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquitytileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquitytileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
