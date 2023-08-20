import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPartenaireComponent } from './reservation-partenaire.component';

describe('ReservationPartenaireComponent', () => {
  let component: ReservationPartenaireComponent;
  let fixture: ComponentFixture<ReservationPartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationPartenaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});