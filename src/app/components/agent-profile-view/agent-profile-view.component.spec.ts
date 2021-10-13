import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentProfileViewComponent } from './agent-profile-view.component';

describe('AgentProfileViewComponent', () => {
  let component: AgentProfileViewComponent;
  let fixture: ComponentFixture<AgentProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentProfileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
