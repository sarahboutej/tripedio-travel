import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSpecialistsComponent } from './article-specialists.component';

describe('ArticleSmallButtonComponent', () => {
  let component: ArticleSpecialistsComponent;
  let fixture: ComponentFixture<ArticleSpecialistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSpecialistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSpecialistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
