import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSectionTwoComponent } from './article-section-two.component';

describe('ArticleSectionTwoComponent', () => {
  let component: ArticleSectionTwoComponent;
  let fixture: ComponentFixture<ArticleSectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSectionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
