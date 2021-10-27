import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSectionFourComponent } from './article-section-four.component';

describe('ArticleSectionFourComponent', () => {
  let component: ArticleSectionFourComponent;
  let fixture: ComponentFixture<ArticleSectionFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSectionFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSectionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
