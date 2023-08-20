import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotdepasseOublierComponent } from './motdepasse-oublier.component';

describe('MotdepasseOublierComponent', () => {
  let component: MotdepasseOublierComponent;
  let fixture: ComponentFixture<MotdepasseOublierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotdepasseOublierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotdepasseOublierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
