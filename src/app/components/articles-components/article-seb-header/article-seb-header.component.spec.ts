import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSebHeaderComponent } from './article-seb-header.component';

describe('ArticleSebHeaderComponent', () => {
  let component: ArticleSebHeaderComponent;
  let fixture: ComponentFixture<ArticleSebHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSebHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSebHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
