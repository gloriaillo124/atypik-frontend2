import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergementLogementComponent } from './hebergement-logement.component';

describe('HebergementLogementComponent', () => {
  let component: HebergementLogementComponent;
  let fixture: ComponentFixture<HebergementLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HebergementLogementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HebergementLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

