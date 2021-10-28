import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTravelExpertComponent } from './article-travel-expert.component';

describe('ArticleSectionTwoComponent', () => {
  let component: ArticleTravelExpertComponent;
  let fixture: ComponentFixture<ArticleTravelExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTravelExpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTravelExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
