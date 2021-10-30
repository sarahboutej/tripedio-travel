import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSectionImagesComponent } from './article-section-images.component';

describe('ArticleSectionFiveComponent', () => {
  let component: ArticleSectionImagesComponent;
  let fixture: ComponentFixture<ArticleSectionImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSectionImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSectionImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
