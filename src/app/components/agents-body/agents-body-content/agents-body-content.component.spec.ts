import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsBodyContentComponent } from './agents-body-content.component';

describe('AgentsBodyContentComponent', () => {
  let component: AgentsBodyContentComponent;
  let fixture: ComponentFixture<AgentsBodyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsBodyContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsBodyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
