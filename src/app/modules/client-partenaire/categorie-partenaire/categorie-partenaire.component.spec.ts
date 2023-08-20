import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriePartenaireComponent } from './categorie-partenaire.component';

describe('CategoriePartenaireComponent', () => {
  let component: CategoriePartenaireComponent;
  let fixture: ComponentFixture<CategoriePartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriePartenaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriePartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
