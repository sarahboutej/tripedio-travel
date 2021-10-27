import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSectionFiveComponent } from './article-section-five.component';

describe('ArticleSectionFiveComponent', () => {
  let component: ArticleSectionFiveComponent;
  let fixture: ComponentFixture<ArticleSectionFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSectionFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSectionFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
