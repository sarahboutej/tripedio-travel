import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandFilterComponent } from './land-filter.component';

describe('LandFilterComponent', () => {
  let component: LandFilterComponent;
  let fixture: ComponentFixture<LandFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
