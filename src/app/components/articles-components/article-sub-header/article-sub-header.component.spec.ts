import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSubHeaderComponent } from './article-sub-header.component';

describe('ArticleSubHeaderComponent', () => {
  let component: ArticleSubHeaderComponent;
  let fixture: ComponentFixture<ArticleSubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSubHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
