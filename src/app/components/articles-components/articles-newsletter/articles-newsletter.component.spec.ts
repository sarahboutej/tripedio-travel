import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesNewsletterComponent } from './articles-newsletter.component';

describe('ArticlesNewsletterComponent', () => {
  let component: ArticlesNewsletterComponent;
  let fixture: ComponentFixture<ArticlesNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesNewsletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
