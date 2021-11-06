import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTravelModesComponent } from './article-travel-modes.component';

describe('ArticleSectionTwoComponent', () => {
  let component: ArticleTravelModesComponent;
  let fixture: ComponentFixture<ArticleTravelModesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTravelModesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTravelModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
