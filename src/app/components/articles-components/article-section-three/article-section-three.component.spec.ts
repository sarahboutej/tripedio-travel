import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSectionThreeComponent } from './article-section-three.component';

describe('ArticleSectionThreeComponent', () => {
  let component: ArticleSectionThreeComponent;
  let fixture: ComponentFixture<ArticleSectionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSectionThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
