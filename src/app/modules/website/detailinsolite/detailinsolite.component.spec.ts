import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailinsoliteComponent } from './detailinsolite.component';

describe('DetailinsoliteComponent', () => {
  let component: DetailinsoliteComponent;
  let fixture: ComponentFixture<DetailinsoliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailinsoliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailinsoliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
