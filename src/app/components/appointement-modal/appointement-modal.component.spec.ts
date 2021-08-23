import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointementModalComponent } from './appointement-modal.component';

describe('AppointementModalComponent', () => {
  let component: AppointementModalComponent;
  let fixture: ComponentFixture<AppointementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointementModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
