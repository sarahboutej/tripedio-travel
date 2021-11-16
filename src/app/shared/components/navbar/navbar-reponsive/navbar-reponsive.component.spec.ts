import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarReponsiveComponent } from './navbar-reponsive.component';

describe('NavbarReponsiveComponent', () => {
  let component: NavbarReponsiveComponent;
  let fixture: ComponentFixture<NavbarReponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarReponsiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarReponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
