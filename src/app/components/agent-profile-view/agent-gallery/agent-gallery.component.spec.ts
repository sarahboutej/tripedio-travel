import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentGalleryComponent } from './agent-gallery.component';

describe('AgentGalleryComponent', () => {
  let component: AgentGalleryComponent;
  let fixture: ComponentFixture<AgentGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
