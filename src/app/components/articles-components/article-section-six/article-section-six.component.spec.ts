import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSectionSixComponent } from './article-section-six.component';

describe('ArticleSectionSixComponent', () => {
  let component: ArticleSectionSixComponent;
  let fixture: ComponentFixture<ArticleSectionSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSectionSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSectionSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
