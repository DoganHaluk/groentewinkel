import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkelmandjeComponent } from './winkelmandje.component';

describe('WinkelmandjeComponent', () => {
  let component: WinkelmandjeComponent;
  let fixture: ComponentFixture<WinkelmandjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinkelmandjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkelmandjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
