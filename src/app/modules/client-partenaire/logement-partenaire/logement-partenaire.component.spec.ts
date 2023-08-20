import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogementPartenaireComponent } from './logement-partenaire.component';

describe('LogementPartenaireComponent', () => {
  let component: LogementPartenaireComponent;
  let fixture: ComponentFixture<LogementPartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogementPartenaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogementPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});