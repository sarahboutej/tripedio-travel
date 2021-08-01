import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsBodyComponent } from './agents-body.component';

describe('AgentsBodyComponent', () => {
  let component: AgentsBodyComponent;
  let fixture: ComponentFixture<AgentsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
