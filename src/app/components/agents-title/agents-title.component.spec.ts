import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsTitleComponent } from './agents-title.component';

describe('AgentsTitleComponent', () => {
  let component: AgentsTitleComponent;
  let fixture: ComponentFixture<AgentsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
