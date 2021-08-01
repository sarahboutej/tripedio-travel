import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsSearchResultComponent } from './agents-search-result.component';

describe('AgentsSearchResultComponent', () => {
  let component: AgentsSearchResultComponent;
  let fixture: ComponentFixture<AgentsSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
