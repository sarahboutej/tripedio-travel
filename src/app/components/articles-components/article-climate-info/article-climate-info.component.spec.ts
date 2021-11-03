import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleClimateInfoComponent } from './article-climate-info.component';

describe('ArticleClimateInfoComponent', () => {
  let component: ArticleClimateInfoComponent;
  let fixture: ComponentFixture<ArticleClimateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleClimateInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleClimateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
