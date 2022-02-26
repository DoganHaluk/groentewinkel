import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestelformulierComponent } from './bestelformulier.component';

describe('BestelformulierComponent', () => {
  let component: BestelformulierComponent;
  let fixture: ComponentFixture<BestelformulierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestelformulierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestelformulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
