import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationLogementComponent } from './destination-logement.component';

describe('DestinationLogementComponent', () => {
  let component: DestinationLogementComponent;
  let fixture: ComponentFixture<DestinationLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationLogementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
