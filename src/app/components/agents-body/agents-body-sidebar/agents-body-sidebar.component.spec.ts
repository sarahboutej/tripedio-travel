import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsBodySidebarComponent } from './agents-body-sidebar.component';

describe('AgentsBodySidebarComponent', () => {
  let component: AgentsBodySidebarComponent;
  let fixture: ComponentFixture<AgentsBodySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsBodySidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsBodySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
