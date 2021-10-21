import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTabsMobileComponent } from './header-tabs-mobile.component';

describe('HeaderTabsMobileComponent', () => {
  let component: HeaderTabsMobileComponent;
  let fixture: ComponentFixture<HeaderTabsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTabsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTabsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
