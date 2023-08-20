import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsprirationLogementComponent } from './inspriration-logement.component';

describe('InsprirationLogementComponent', () => {
  let component: InsprirationLogementComponent;
  let fixture: ComponentFixture<InsprirationLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsprirationLogementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsprirationLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
