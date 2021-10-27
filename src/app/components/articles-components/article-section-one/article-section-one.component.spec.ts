import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSectionOneComponent } from './article-section-one.component';

describe('ArticleSectionOneComponent', () => {
  let component: ArticleSectionOneComponent;
  let fixture: ComponentFixture<ArticleSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSectionOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
