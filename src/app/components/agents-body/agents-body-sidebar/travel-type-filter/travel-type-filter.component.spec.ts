import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTypeFilterComponent } from './travel-type-filter.component';

describe('TravelTypeFilterComponent', () => {
  let component: TravelTypeFilterComponent;
  let fixture: ComponentFixture<TravelTypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelTypeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
