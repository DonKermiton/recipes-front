import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestHottestComponent } from './latest-hottest.component';

describe('LatestHottestComponent', () => {
  let component: LatestHottestComponent;
  let fixture: ComponentFixture<LatestHottestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestHottestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestHottestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
