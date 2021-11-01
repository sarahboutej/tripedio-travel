import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSectionInfoComponent } from './article-section-info.component';

describe('ArticleSectionInfoComponent', () => {
  let component: ArticleSectionInfoComponent;
  let fixture: ComponentFixture<ArticleSectionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSectionInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSectionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
