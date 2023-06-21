import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasCTAComponent } from './categorias-cta.component';

describe('CategoriasCTAComponent', () => {
  let component: CategoriasCTAComponent;
  let fixture: ComponentFixture<CategoriasCTAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasCTAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasCTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
