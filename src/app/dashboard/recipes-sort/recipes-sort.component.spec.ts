import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesSortComponent } from './recipes-sort.component';

describe('RecipesSortComponent', () => {
  let component: RecipesSortComponent;
  let fixture: ComponentFixture<RecipesSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
